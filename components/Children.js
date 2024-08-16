import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Children = () => {
  return (
    <Box bg="red.500" color="white" p={10} textAlign="center">
      <Heading size="lg" mb={5}>
        Children&apos;s Health Care Facilities
      </Heading>
      <VStack spacing={4}>
        <Text>Find the best pediatricians near you.</Text>
        <Text>Get health services tailored to children's needs.</Text>
        <Text>Access child-specific medical advice and care facilities.</Text>
      </VStack>
    </Box>
  );
};

export default Children;
