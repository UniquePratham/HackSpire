import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  SimpleGrid,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/router";

const SponsoredMedicines = ({
  numberofCartItems,
  cartItems,
  addItemToCart,
}) => {
  const initialMedicines = [
    "T-bact",
    "Aspirin",
    "Ibuprofen",
    "Crocin",
    "Amoxicillin",
    "Ciprofloxacin",
    "Dolo 650",
    "Metformin",
    "Cetirizine",
    "Azithromycin",
    "Pantoprazole",
    "Ranitidine",
    "Diclofenac",
    "Fexofenadine",
    "Omeprazole",
    "Liv-52",
    "Amlodipine",
    "Folic Acid",
    "Clopidogrel",
    "Rosuvastatin",
    "Becosules",
  ];

  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({});
  const router = useRouter();
  const googleCustomSearchKey = process.env.NEXT_PUBLIC_GOOGLE_CUSTOM_SEARCH_KEY;
  const googleCustomSearchEngineId = process.env.NEXT_PUBLIC_GOOGLE_CUSTOM_SEARCH_ENGINE_ID;

  useEffect(() => {
    const fetchMedicinesDetails = async () => {
      setLoading(true);
      try {
        const enrichedMedicines = await Promise.all(
          initialMedicines.map(async (medicineName) => {
            const duckDuckGoData = await fetchMedicineDetailsFromDuckDuckGo(
              medicineName
            );
            const googleImageData = await fetchImageFromGoogle(medicineName);
            return {
              name: medicineName,
              ...duckDuckGoData,
              imageUrl: googleImageData,
              price: Math.floor(Math.random() * 900) + 100,
            };
          })
        );
        setMedicines(enrichedMedicines);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchMedicinesDetails();
  }, []);

  const fetchMedicineDetailsFromDuckDuckGo = async (medicineName) => {
    try {
      const duckDuckGoUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(
        medicineName
      )}&format=json&pretty=1`;
      const response = await axios.get(duckDuckGoUrl);
      const description = response.data.Abstract || "No description available";
      const shortDescription =
        description.length > 200
          ? `${description.substring(0, 200)}...`
          : description;

      return { description: shortDescription };
    } catch (error) {
      console.error("Error fetching data from DuckDuckGo API:", error);
      return { description: "No description available" };
    }
  };

  const fetchImageFromGoogle = async (medicineName) => {
    try {
      let googleUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
        medicineName + " medicine"
      )}&cx=${googleCustomSearchEngineId}&key=${googleCustomSearchKey}&searchType=image`;
      let response = await axios.get(googleUrl);
      let items = response.data.items || [];

      if (items.length === 0) {
        googleUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
          medicineName
        )}&cx=${googleCustomSearchEngineId}&key=${googleCustomSearchKey}&searchType=image`;
        response = await axios.get(googleUrl);
        items = response.data.items || [];
      }

      return items.length > 0 ? items[0].link : null;
    } catch (error) {
      console.error(
        "Error fetching image from Google Custom Search API:",
        error
      );
      return null;
    }
  };

  const handleSearch = async () => {
    if (searchQuery) {
      setLoading(true);
      const duckDuckGoData = await fetchMedicineDetailsFromDuckDuckGo(
        searchQuery
      );
      const googleImageData = await fetchImageFromGoogle(searchQuery);
      setMedicines([
        {
          name: searchQuery,
          ...duckDuckGoData,
          imageUrl: googleImageData,
          price: Math.floor(Math.random() * 900) + 100,
        },
      ]);
      setLoading(false);
    }
  };

  const handleQuantityChange = (medicineName, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [medicineName]: value,
    }));
  };

  const navigateToCart = () => {
    router.push({
      pathname: "/cart",
      query: { cartItems: JSON.stringify(cartItems) },
    });
  };

  // Determine button content based on screen size
  const buttonContent = useBreakpointValue({
    base: "", // Show only the icon on mobile
    md: `Go to Cart (${numberofCartItems})`, // Show icon and text on larger screens
  });

  if (loading) {
    return (
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" thickness="4px" color="pink.500" />
      </Flex>
    );
  }

  return (
    <Box
      bgGradient="linear(to-r, purple.500, pink.500)"
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      position="relative"
    >
      <InputGroup mb={4} justifyContent="center">
        <Input
          placeholder="Search for a medicine..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          backgroundColor="white"
          width="lg"
          textAlign="center"
        />
        <IconButton
          icon={<SearchIcon />}
          onClick={handleSearch}
          colorScheme="purple"
          border="2px solid magenta"
          ml={3}
        />
        <Button
          colorScheme="purple"
          border="2px solid magenta"
          onClick={navigateToCart}
          display={{ base: "flex", md: "flex" }}
          // flexDirection={} // Adjust position based on screen size
          textAlign="center"
          width={{ base: "unset", md: "160px" }}
          zIndex={1}
          ml={1}
          justifyContent="center"
        >
          {buttonContent}
          <FaShoppingCart fontSize="50px" />
        </Button>
      </InputGroup>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          medicines.map((medicine, index) => (
            <Box
              key={index}
              p={2}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image
                src={
                  medicine.imageUrl ||
                  `https://via.placeholder.com/100?text=${encodeURIComponent(
                    medicine.name || "Medicine"
                  )}`
                }
                alt={medicine.name || "Medicine"}
                boxSize="250px"
                objectFit="contain"
                mb={2}
                borderRadius="md"
              />
              <Text fontWeight="bold" mb={2}>
                {medicine.name || "Unknown Medicine"}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={2}>
                {medicine.description}
              </Text>
              <Text fontWeight="bold" color="purple.600" mb={2}>
                ₹{medicine.price}
              </Text>
              <NumberInput
                min={1}
                value={quantities[medicine.name] || 1}
                onChange={(value) => handleQuantityChange(medicine.name, value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                mt={2}
                colorScheme="purple"
                onClick={() =>
                  addItemToCart({
                    ...medicine,
                    quantity: quantities[medicine.name] || 1,
                  })
                }
              >
                Add to Cart
              </Button>
            </Box>
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default SponsoredMedicines;
