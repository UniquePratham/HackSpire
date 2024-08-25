import "leaflet/dist/leaflet.css";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  VStack,
  HStack,
  Slide,
  Text,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import L from "leaflet";

// Custom hospital icon
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1486/1486262.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});
// Custom user location icon
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // URL to a custom icon
  iconSize: [32, 32], // Adjust size as needed
  iconAnchor: [16, 32], // Anchor at the center bottom
  popupAnchor: [0, -32], // Position the popup above the icon
});

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [highlightedHospital, setHighlightedHospital] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        fetchNearbyHospitals(latitude, longitude);
      },
      (error) => {
        console.error("Error getting user location:", error);
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  const fetchNearbyHospitals = async (latitude, longitude) => {
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:5000,${latitude},${longitude})[amenity=hospital];out;`;

    try {
      const response = await fetch(overpassUrl);
      const data = await response.json();
      const hospitals = data.elements.map((hospital) => ({
        id: hospital.id,
        name: hospital.tags.name || "Unknown Hospital",
        latitude: hospital.lat,
        longitude: hospital.lon,
      }));
      setNearbyHospitals(hospitals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching nearby hospitals:", error);
      setLoading(false);
    }
  };

  // Pan map to the clicked hospital
  const panToHospital = (latitude, longitude) => {
    setHighlightedHospital({ latitude, longitude });
    setShowPanel(false);
  };

  return (
    <Box h="100vh" w="100%" bg="gray.50">
      {/* Header Section */}
      <Box p={4} bg="green.600" shadow="md" w="full" position="relative">
        <HStack justify="space-between" color="white">
          <Heading size="lg">Vitality AI</Heading>
          <HStack spacing={4}>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={() => setShowPanel(!showPanel)}
            >
              Find Hospitals
            </Button>
            <Button variant="solid" colorScheme="teal">
              Health Portal
            </Button>
            <Button variant="outline" colorScheme="red">
              Emergency
            </Button>
          </HStack>
        </HStack>
      </Box>

      {/* Search Section */}
      <Flex p={4} bg="white" shadow="sm" justify="center" zIndex={2}>
        <Input
          placeholder="Search for a hospital or location..."
          size="lg"
          width={["90%", "60%"]}
          borderRadius="full"
          boxShadow="md"
          border="1px solid #ccc"
        />
      </Flex>

      {/* Map and Side Panel */}
      <Flex
        h="calc(100vh - 184px)"
        direction={{ base: "column", md: "row" }}
        justify="center"
        alignItems="center"
      >
        {/* Map Section */}
        <Box
          h="70vh"
          w={{ base: "0%", md: "50%" }} // Hide map on mobile, show on desktop
          display={{ base: "none", md: "block" }} // Hide map on mobile, show on desktop
          position="relative"
          border="1px solid #ccc"
          boxShadow="lg"
          borderRadius="lg"
          overflow="hidden"
        >
          {userLocation ? (
            <MapContainer
              center={[userLocation.latitude, userLocation.longitude]}
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[userLocation.latitude, userLocation.longitude]}
                icon={userIcon} // Use the custom icon
              >
                <Popup>
                  <Text fontWeight="bold">You are here</Text>
                </Popup>
              </Marker>

              {nearbyHospitals.map((hospital) => (
                <Marker
                  key={hospital.id}
                  position={[hospital.latitude, hospital.longitude]}
                  icon={hospitalIcon}
                  opacity={
                    highlightedHospital &&
                    hospital.latitude === highlightedHospital.latitude &&
                    hospital.longitude === highlightedHospital.longitude
                      ? 1.0
                      : 0.5
                  }
                >
                  <Popup>
                    <Text fontWeight="bold">{hospital.name}</Text>
                  </Popup>
                </Marker>
              ))}
              {highlightedHospital && <PanToMarker location={highlightedHospital} />}
            </MapContainer>
          ) : (
            <Flex align="center" justify="center" h="100%">
              <Text>Loading map...</Text>
            </Flex>
          )}
        </Box>

        {/* Slide-in Panel for Hospital List */}
        <Slide direction="right" in={showPanel} style={{ zIndex: 10 }}>
          <Box
            w={{ base: "full", md: "300px" }}
            bg="white"
            p={4}
            shadow="xl"
            h="100%" // Full height slide
            border="1px solid #ccc"
            overflowY="scroll" // Make slide scrollable
            position="relative"
          >
            <Flex justify="space-between" alignItems="center">
              <Heading size="md" mb={4}>
                Nearby Hospitals
              </Heading>
              <IconButton
                icon={<CloseIcon />}
                variant="outline"
                size="sm"
                onClick={() => setShowPanel(false)}
                aria-label="Close"
              />
            </Flex>
            <VStack spacing={4} align="start">
              {nearbyHospitals.map((hospital) => (
                <Box
                  key={hospital.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  w="full"
                  boxShadow="sm"
                  border="1px solid #ddd"
                  onClick={() => panToHospital(hospital.latitude, hospital.longitude)} // Pan to hospital on click
                  cursor="pointer"
                  _hover={{ bg: "gray.100" }}
                >
                  <Text fontWeight="bold">{hospital.name}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </Slide>
      </Flex>
    </Box>
  );
};

// Helper component to pan the map to the clicked hospital
const PanToMarker = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo([location.latitude, location.longitude], 14, {
        animate: true,
      });
    }
  }, [location, map]);

  return null;
};

export default MapComponent;
