import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Box, Button, Input, Heading, Text, VStack } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const LocationMarker = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }, [position, map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const LocationMap = () => {
  const [position, setPosition] = useState(null);
  const [search, setSearch] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [isClient, setIsClient] = useState(false); // New state to handle client-side check

  // Effect to check if it's client-side
  useEffect(() => {
    setIsClient(true); // This will be true only on the client side
  }, []);

  // Geolocation effect for fetching the user's current location
  useEffect(() => {
    if (isClient && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Geolocation error: ", err);
        }
      );
    }
  }, [isClient]);

  // Function to handle search and fetch hospital data
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${search}&format=json`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);

        const hospitalRes = await axios.get(
          `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity=hospital](around:5000,${lat},${lon});out;`
        );
        setHospitals(hospitalRes.data.elements);
      }
    } catch (error) {
      console.error("Error fetching location or hospital data:", error);
    }
  };

  return (
    <Box p={8} bg="gray.800" borderRadius="lg" boxShadow="xl" mt={8} mb={8}>
      <Heading color="white" mb={4}>
        Find Hospitals Near You
      </Heading>
      <Text color="gray.300" mb={6}>
        Use the map below to find hospitals in your area. The map will
        automatically detect your location, or you can search for a specific
        location.
      </Text>
      <VStack spacing={4} mb={6}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a location"
          bg="gray.700"
          color="white"
          border="none"
          _placeholder={{ color: "gray.400" }}
        />
        <Button onClick={handleSearch} colorScheme="teal">
          Search Location
        </Button>
      </VStack>

      {/* Render Map only when client-side and position available */}
      {isClient && position && (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker position={position} />
          {hospitals.map((hospital) => (
            <Marker key={hospital.id} position={[hospital.lat, hospital.lon]}>
              <Popup>{hospital.tags.name || "Unnamed Hospital"}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </Box>
  );
};

export default LocationMap;
