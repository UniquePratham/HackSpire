import React from "react";
import { Box, Heading, Text, VStack, Stack } from "@chakra-ui/react";

const Feedbacks = () => {
  const feedbacks = [
    {
      name: "John Doe",
      feedback: "Amazing service! Helped me find the right doctor quickly.",
    },
    {
      name: "Jane Smith",
      feedback: "The healthcare facilities recommended were top-notch.",
    },
    {
      name: "Mary Johnson",
      feedback:
        "Very satisfied with the quick response and accurate information.",
    },
  ];

  return (
    <Box bg="yellow.500" color="black" p={10} textAlign="center">
      <Heading size="lg" mb={5}>
        Client Feedbacks
      </Heading>
      <VStack spacing={8}>
        {feedbacks.map((feedback, index) => (
          <Stack
            key={index}
            p={5}
            bg="white"
            boxShadow="md"
            borderRadius="md"
            spacing={2}
          >
            <Text fontWeight="bold">{feedback.name}</Text>
            <Text>{feedback.feedback}</Text>
          </Stack>
        ))}
      </VStack>
    </Box>
  );
};

export default Feedbacks;
