import { Box, Image, Text, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SponsoredMedicines = ({ addItemToCart }) => {
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://api.fda.gov/drug/label.json?limit=10";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMedicines(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  // Function to get a placeholder image using RoboHash
  const getPlaceholderImage = (medicineName) => {
    // Encode the name to ensure it works with URL structure
    const name = encodeURIComponent(medicineName || "medicine");
    // Use RoboHash to generate an image based on the medicine name
    return `https://robohash.org/${name}?set=set4&size=150x150`; // 'set4' gives unique avatars
  };

  return (
    <Box p={5} background="gray.50" minHeight="100vh">
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Sponsored Medicines
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {medicines.map((medicine, index) => (
          <Box
            key={index}
            borderRadius="md"
            boxShadow="md"
            p={5}
            background="white"
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            {/* Placeholder image based on the brand name */}
            <Image
              src={getPlaceholderImage(medicine.openfda.brand_name || "Medicine")}
              alt={medicine.openfda.brand_name || "Medicine"}
              borderRadius="md"
              mb={4}
            />
            <Text fontSize="xl" mt={2} fontWeight="bold">
              {medicine.openfda.brand_name || "Unknown Medicine"}
            </Text>
            <Text mt={1} color="gray.600">
              {medicine.purpose ? `Purpose: ${medicine.purpose.join(", ")}` : "No purpose provided"}
            </Text>
            <Text mt={1} color="gray.500">
              Active Ingredients: {medicine.active_ingredient?.join(", ") || "N/A"}
            </Text>
            <Text mt={2} color="green.500" fontWeight="bold">
              Price: $10.99
            </Text>
            <Flex mt={3}>
              <Button colorScheme="teal" flex={1} mr={2}>
                Buy Now
              </Button>
              <Button
                variant="outline"
                colorScheme="teal"
                flex={1}
                onClick={() => addItemToCart(medicine)}
              >
                Add to Cart
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SponsoredMedicines;
