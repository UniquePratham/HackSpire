import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Women = () => {
  return (
    <Box bg="blue.500" color="white" p={10} textAlign="center">
      <Heading size="lg" mb={5}>
        Women&apos;s Health Facilities
      </Heading>
      <VStack spacing={4}>
        <Text>Track your menstrual cycle with our advanced AI tools.</Text>
        <Text>Get access to women&apos;s health care specialists nearby.</Text>
        <Text>Explore reproductive health resources and guidance.</Text>
      </VStack>
    </Box>
  );
};

export default Women;
