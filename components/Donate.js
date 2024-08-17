// components/Donate.js

import React from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const Donate = () => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout"); // Navigate to the checkout page
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      //   border="1px solid #ccc"
      //   borderRadius="lg"
      //   boxShadow="md"
      bgImage="donateBg.png"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      width="100%"
      height="85vh"
    >
      <Box
        mb={4}
        display="flex"
        justifyContent="center"
        alignItems={"center"}
        flexDirection="column"
      >
        <Box
          textAlign="center"
          color="white"
          fontWeight="bolder"
          fontSize={{ base: "", md: "20" }}
          fontFamily="Poppins"
        >
          Make a difference in health with a single donation
        </Box>
        <Heading
          as="h2"
          size={{ base: "xl", md: "2xl" }}
          mt={6}
          fontWeight="500"
          mb={3}
          textShadow="2px 2px 5px rgba(0,0,0,0.5)"
        >
          Pay Through PayPal
        </Heading>
        <Text
          fontSize="md"
          textAlign="center"
          color="whitesmoke"
          fontWeight="bold"
        >
          Secure international payments with PayPal.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="xl" textAlign="left" fontWeight="bold" mb={2}>
          Why Choose PayPal?
        </Text>
        <ul>
          <li>Safe and secure transactions</li>
          <li>Buyer protection and refunds</li>
          <li>Accepted worldwide</li>
        </ul>
      </Box>
      <Button
        colorScheme="blue"
        size="lg"
        mt={5}
        rightIcon={<ArrowForwardIcon />}
        onClick={handleCheckout}
      >
        Pay with PayPal
      </Button>
    </Flex>
  );
};

export default Donate;
