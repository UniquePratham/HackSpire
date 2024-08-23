import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import {
  Box,
  Flex,
  Heading,
  Button,
  VStack,
  Slide,
  Text,
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
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
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

  return (
    <Box
      h="100vh"
      w="100%"
      bg="url(https://img.lovepik.com/background/20211022/large/lovepik-medical-background-map-of-science-and-technology-image_500748360.jpg)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      maxW="100%"
    >
      {/* Header Section */}
      <Box p={4} bg="grey" shadow="md" w="full" position="relative" mb={2}>
        <Button
          variant="solid"
          colorScheme="green"
          onClick={() => setShowPanel(!showPanel)}
          mr={3}
        >
          Find Hospitals
        </Button>
        <Button variant="solid" colorScheme="teal">
          Health Portal
        </Button>
      </Box>

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
          {loading ? (
            <Flex align="center" justify="center" h="100%">
              <Text>Loading map...</Text>
            </Flex>
          ) : (
            <MapContainer
              center={
                userLocation
                  ? [userLocation.latitude, userLocation.longitude]
                  : [51.505, -0.09] // Default fallback center
              }
              zoom={14}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {userLocation && (
                <Marker
                  position={[userLocation.latitude, userLocation.longitude]}
                  icon={userIcon}
                >
                  <Popup>
                    <Text fontWeight="bold">You are here</Text>
                  </Popup>
                </Marker>
              )}
              {nearbyHospitals.map((hospital) => (
                <Marker
                  key={hospital.id}
                  position={[hospital.latitude, hospital.longitude]}
                  icon={hospitalIcon}
                  eventHandlers={{
                    click: () => {
                      setHighlightedHospital(hospital);
                    }
                  }}
                >
                  <Popup>
                    <Text fontWeight="bold">{hospital.name}</Text>
                  </Popup>
                </Marker>
              ))}
              {highlightedHospital && (
                <PanToMarker location={highlightedHospital} />
              )}
              {highlightedHospital && (
                <PopupMarker location={highlightedHospital} />
              )}
            </MapContainer>
          )}
        </Box>

        {/* Slide-in Panel for Hospital List */}
        <Slide direction="right" in={showPanel} style={{ zIndex: 10 }}>
          <Box
            w={{ base: "full", md: "300px" }}
            bg="cyan.700"
            p={4}
            shadow="xl"
            h="100%" // Full height slide
            border="1px solid #ccc"
            overflowY="scroll" // Make slide scrollable
            position="relative"
          >
            <Flex justify="space-between" alignItems="center">
              <Heading
                size="md"
                mb={4}
                textAlign="center"
                fontFamily="monospace"
                textShadow="2px 2px 5px rgba(0,0,0,0.2)"
              >
                Nearby Hospitals
              </Heading>
              <IconButton
                icon={<CloseIcon />}
                variant="outline"
                size="sm"
                onClick={() => setShowPanel(false)}
                aria-label="Close"
                color="white"
                border="3px solid white"
                fontSize={"medium"}
                _hover={{ color: "black", border: "3px solid black" }}
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
                  bg="cyan.500"
                  onClick={() => {
                    setHighlightedHospital(hospital); // Highlight hospital on click
                    setShowPanel(false); // Optionally close the panel
                  }}
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

// Helper component to show the popup of the clicked hospital
const PopupMarker = ({ location }) => {
  const map = useMap();
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (location) {
      const marker = L.marker([location.latitude, location.longitude], {
        icon: hospitalIcon
      }).addTo(map);

      marker.bindPopup(location.name);
      marker.openPopup();
      setMarker(marker);

      return () => {
        map.removeLayer(marker);
      };
    }
  }, [location, map]);

  return null;
};

export default MapComponent;
