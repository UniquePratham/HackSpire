// components/LocationMap.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Input, Button, Stack, Text } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const LocationMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default to London
  const [searchQuery, setSearchQuery] = useState("");
  const [hospitals, setHospitals] = useState([]);

  // Fetch user's current location using PositionStack or another geolocation API
  const getUserLocation = async () => {
    try {
      const { data } = await axios.get(
        `http://api.positionstack.com/v1/forward?access_key=YOUR_API_KEY&query=YOUR_LOCATION`
      );
      const { latitude, longitude } = data.data[0];
      setPosition([latitude, longitude]);
    } catch (error) {
      console.error("Failed to fetch location", error);
    }
  };

  // Fetch hospitals using OpenStreetMap Overpass API
  const fetchHospitals = async (lat, lon) => {
    try {
      const query = `
        [out:json];
        node["amenity"="hospital"](around:5000,${lat},${lon});
        out body;
      `;
      const response = await axios.get(
        `https://overpass-api.de/api/interpreter?data=${query}`
      );
      const hospitalData = response.data.elements.map((element) => ({
        id: element.id,
        lat: element.lat,
        lon: element.lon,
        name: element.tags.name,
      }));
      setHospitals(hospitalData);
    } catch (error) {
      console.error("Failed to fetch hospitals", error);
    }
  };

  // Handle search for new location based on user input
  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `http://api.positionstack.com/v1/forward?access_key=YOUR_API_KEY&query=${searchQuery}`
      );
      const { latitude, longitude } = data.data[0];
      setPosition([latitude, longitude]);
      fetchHospitals(latitude, longitude);
    } catch (error) {
      console.error("Failed to search location", error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    fetchHospitals(position[0], position[1]);
  }, [position]);

  return (
    <Box p={4} bg="gray.50" minH="80vh" borderRadius="lg" boxShadow="md">
      <Stack spacing={4} mb={6}>
        <Input
          placeholder="Search for a location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Your location</Popup>
        </Marker>
        {hospitals.map((hospital) => (
          <Marker key={hospital.id} position={[hospital.lat, hospital.lon]}>
            <Popup>{hospital.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default LocationMap;
