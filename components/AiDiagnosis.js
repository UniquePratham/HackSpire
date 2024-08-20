import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Text,
  Select,
  useToast,
  useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import { motion } from "framer-motion";

const AiDiagnosis = () => {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const handleDiagnosis = async () => {
    if (!symptoms || !age || !gender) {
      toast({
        title: "Please fill out all fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/diagnosis", {
        symptoms: symptoms.split(",").map((symptom) => symptom.trim()),
        age,
        gender,
      });

      setDiagnosis(response.data);
    } catch (error) {
      toast({
        title: "Error fetching diagnosis",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Box
      p={8}
      bgGradient="linear(to-r, teal.500, blue.500)"
      color="white"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing={4}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb={6}
          fontFamily="Poppins"
        >
          AI Health Diagnosis
        </Heading>
        <Text
          fontSize="lg"
          textAlign="center"
          color="whiteAlpha.800"
          fontWeight="light"
        >
          Enter your symptoms, age, and gender for an AI-based diagnosis.
        </Text>

        <Input
          placeholder="e.g., headache, nausea, fever"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          size="lg"
          bg="whiteAlpha.900"
          color="black"
          borderRadius="full"
          focusBorderColor="blue.300"
          boxShadow="lg"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
        />

        <Input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          size="lg"
          bg="whiteAlpha.900"
          color="black"
          borderRadius="full"
          focusBorderColor="blue.300"
          boxShadow="lg"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
        />

        <Select
          placeholder="Select Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          size="lg"
          bg="whiteAlpha.900"
          color="black"
          borderRadius="full"
          focusBorderColor="blue.300"
          boxShadow="lg"
          transition="all 0.3s ease-in-out"
          _hover={{ transform: "scale(1.05)" }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Button
          colorScheme="teal"
          size="lg"
          onClick={handleDiagnosis}
          mt={4}
          isLoading={loading}
          borderRadius="full"
          boxShadow="xl"
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            bgGradient: "linear(to-r, green.400, teal.400)",
          }}
        >
          Get Diagnosis
        </Button>

        {diagnosis && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            mt={8}
            p={4}
            bg="whiteAlpha.800"
            borderRadius="lg"
            boxShadow="xl"
            width={isLargerThan768 ? "60%" : "90%"}
          >
            <Heading as="h2" size="lg" mb={4} color="black">
              Possible Conditions:
            </Heading>
            {diagnosis.map((condition, index) => (
              <Text key={index} fontSize="lg" mb={2} color="black">
                {condition.label}: {condition.score}
              </Text>
            ))}
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default AiDiagnosis;
