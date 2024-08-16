import React from "react";
import {
  Flex,
  Link,
  Box,
  Heading,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import { AiOutlinePlayCircle } from "react-icons/ai";

const ChatbotIntro = () => {
  return (
    <Flex
      align="center"
      justify="center"
      height="80vh"
      px="4"
      bg="linear-gradient(to right, black, red)"
      color="white"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="1200px"
        w="100%"
        py={{ base: "8", md: "0" }}
      >
        {/* Left section with details */}
        <Box
          flex="1"
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "8", md: "0" }}
        >
          <Heading as="h2" size="3xl" fontWeight="400" mb="4">
            Welcome to Your
            <br />
            Healthcare Chatbot
          </Heading>
          <Box fontSize="lg" mb="4">
            Discover health insights with symptom detection and instant relief
            support from our chatbot.
          </Box>
          <Link href="/bot">
            <Button
              colorScheme="red"
              leftIcon={<Icon as={AiOutlinePlayCircle} />}
              size="lg"
            >
              Try Now
            </Button>
          </Link>
        </Box>

        {/* Right section with image or gif */}
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Image
            src="https://miro.medium.com/max/1200/1*9I6EIL5NG20A8se5afVmOg.gif"
            alt="Chatbot GIF"
            maxW="60%"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChatbotIntro;
