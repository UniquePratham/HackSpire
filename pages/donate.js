import React from "react";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import PayThroughPayPal from "../components/PayThroughPayPal"; // Adjust the path if necessary
import Navbar from "@/components/Navbar";

const Donate = () => {
  return (
    <>
      <Navbar />
      <Box
        position="relative"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        overflow="hidden"
        color="white"
        p={4}
        bg="gray.800"
      >
        {/* Main Content */}
        <VStack spacing={8} mb={10}>
          <Heading as="h1" size="2xl" color="white" mb={4}>
            Support Us
          </Heading>
          <Text fontSize="lg" color="gray.300" mb={8}>
            Your contributions help us continue our mission and improve our
            services. Every donation makes a difference and is greatly
            appreciated. Thank you for your support!
          </Text>
                  <PayThroughPayPal />
                  <Text>
                      or <br />
                  </Text>
          <Button
            as="a"
            href="https://acns.vercel.app/qrpay"
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="teal"
            size="lg"
            mt={4}
          >
            
            Pay Through ACNS UPI
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default Donate;
