import React from "react";
import { Box, Text, Link, Button, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Women = dynamic(() => import("../components/Women"), { ssr: false });
const Children = dynamic(() => import("../components/Children"), {
  ssr: false,
});
const Feedbacks = dynamic(() => import("../components/Feedbacks"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const WomenChildren = () => {
  return (
    <Box>
      <Navbar />
      <Women />
      <Children />
      <Feedbacks />
      <VStack align="center" my={10}>
        <Text fontSize="xl" fontWeight="bold">
          Have a medical enquiry?
        </Text>
        <Link href="/chatbot" _hover={{ textDecoration: "none" }}>
          <Button colorScheme="yellow" size="lg">
            Ask Our ChatBot
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default WomenChildren;
