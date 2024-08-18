import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { FaHeartbeat } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AiDiagnosis = () => {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const [diseases, setDiseases] = useState([]);
  const toast = useToast();

  const handleDiagnosis = async () => {
    if (!symptoms) {
      toast({
        title: "Please enter symptoms.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://disease.sh/v3/covid-19/jhucsse/counties/${symptoms}`
      );
      const data = await response.json();
      setDiseases(data);
    } catch (error) {
      toast({
        title: "Error fetching data.",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        bgGradient="linear(to-r, teal.400, blue.500)"
        color="white"
        px={4}
      >
        <Box
          bg="whiteAlpha.200"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          w="full"
          maxW="600px"
          textAlign="center"
        >
          <Heading mb={6} fontSize="3xl">
            AI Diagnosis
          </Heading>
          <VStack spacing={4}>
            <Input
              placeholder="Enter your symptoms..."
              size="lg"
              variant="filled"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              focusBorderColor="teal.300"
            />
            <Button
              leftIcon={<FaHeartbeat />}
              colorScheme="teal"
              size="lg"
              onClick={handleDiagnosis}
              isLoading={loading}
            >
              Diagnose
            </Button>
          </VStack>

          {loading ? (
            <Spinner size="xl" mt={6} />
          ) : (
            diseases.length > 0 && (
              <Box mt={8} textAlign="left">
                <Heading size="lg" mb={4}>
                  Possible Diseases:
                </Heading>
                {diseases.map((disease, index) => (
                  <Text key={index} fontSize="lg" mb={2}>
                    {disease.province ? `${disease.province}, ` : ""}
                    {disease.county}
                  </Text>
                ))}
              </Box>
            )
          )}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default AiDiagnosis;
