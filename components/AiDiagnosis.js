import React, { useState } from "react";
import { Box, Heading, Input, Button, VStack, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import axios from "axios";

const AiDiagnosis = () => {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnosis = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://disease.sh/v3/covid-19/jhucsse/counties/${symptoms}`
      );
      setDiagnosis(response.data);
    } catch (error) {
      console.error("Error fetching diagnosis:", error);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <Box p={8} bg="gray.800" color="white" minHeight="100vh">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6}>
            AI Diagnosis
          </Heading>
          <Text fontSize="lg" textAlign="center" color="gray.300">
            Enter your symptoms to get possible conditions.
          </Text>
          <Input
            placeholder="e.g., fever, cough, fatigue"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            size="lg"
            bg="gray.700"
            color="white"
            border="none"
          />
          <Button
            colorScheme="teal"
            size="lg"
            onClick={handleDiagnosis}
            mt={4}
            isLoading={loading}
          >
            Get Diagnosis
          </Button>

          {diagnosis && (
            <Box mt={8} p={4} bg="gray.700" borderRadius="md" w="100%">
              <Heading as="h2" size="lg" mb={4}>
                Possible Diseases:
              </Heading>
              {diagnosis.map((item, index) => (
                <Text key={index} fontSize="lg" mb={2}>
                  {item.county}: {item.stats.confirmed} confirmed cases
                </Text>
              ))}
            </Box>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default AiDiagnosis;
