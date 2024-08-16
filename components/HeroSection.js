import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  HStack,
  Text,
  Input,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import { FaUserMd, FaMapMarkerAlt, FaRegClipboard } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// Typing animation keyframes
const typing = keyframes`
  from {
    width: 0;
    border-right: 4px solid white;
  }
  to {
    width: 100%;
    border-right: none;
  }
`;

export default function HeroSection() {
  const [borderRight, setBorderRight] = useState("4px solid white");

  useEffect(() => {
    const timer = setTimeout(() => {
      setBorderRight("none");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      position="relative"
      height={{ base: "110vh", md: "100vh" }}
      overflow="hidden"
      color="white"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="blackAlpha.600"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
        pt={[16, 0]}
        transition="background-color 0.3s ease-in-out"
        // _hover={{ bg: "blackAlpha.800" }}
      >
        {/* Search Bar */}
        <Flex
          mb={[4, 8]}
          direction={["column", "column"]}
          maxW={{ base: "sm", md: "lg" }}
          width="100%"
          alignItems="center"
          position="relative"
          zIndex={1}
        >
          <VStack spacing={4} mb={[6, 8]} textAlign="center">
            <Heading
              as="h1"
              pb={-4}
              fontSize={["5xl", "6xl", "7xl"]}
              fontWeight="300"
              overflow="hidden"
              whiteSpace="nowrap"
              borderRight={borderRight}
              borderColor="white"
              width="fit-content"
              margin="0 auto"
              animation={`${typing} 4s steps(40)`}
              animationFillMode="forwards"
              transition="transform 0.3s ease, color 0.3s ease"
              _hover={{ color: "cyan", transform: "scale(1.05)" }}
              cursor="pointer"
            >
              Vitality AI
            </Heading>
            <Text
              fontSize={["lg", "xl"]}
              transition="color 0.3s ease"
              _hover={{ color: "teal.300" }}
              pb={5}
            >
              Stay updated with the latest technology in Medicine.
            </Text>
          </VStack>
          <HStack>
            <Input
              placeholder="Enter a doctor, specialty, or condition!"
              size="lg"
              borderRadius="md"
              bg="white"
              color="gray.700"
              mb={[4, 0]}
              flex={1}
              padding="10px 3px"
              width={{ base: "330px", md: "lg" }}
              textAlign="center"
              _focus={{
                outline: "none",
                border: "2px solid rgba(255,255,255,0.6)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.5)",
              }}
              _active={{
                outline: "none",
                border: "2px solid rgba(255,255,255,0.6)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.5)",
              }}
              transition="border-color 0.3s ease, box-shadow 0.3s ease"
            />
            <Button
              colorScheme="green"
              size="lg"
              ml={{ base: 2, md: 0 }}
              _hover={{ bg: "green.600", transform: "scale(1.05)" }}
              _active={{ bg: "green.700" }}
              transition="transform 0.3s ease, background-color 0.3s ease"
              rightIcon={<ArrowForwardIcon />}
            >
              Search
            </Button>
          </HStack>
        </Flex>

        {/* Main Heading with Typewriter Animation */}

        {/* Action Buttons */}
        <Flex
          direction={["column", "row"]}
          width="100%"
          justifyContent="center"
          gap={4}
        >
          <Button
            bg="blue.500"
            color="white"
            size="lg"
            _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
            _active={{ bg: "blue.700" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={8}
            flex={1}
            borderRadius="md"
            height={{ base: "auto", md: "250px" }}
            mb={[4, 0]}
            transition="transform 0.3s ease, background-color 0.3s ease"
          >
            <Icon as={FaUserMd} boxSize={[8, 10]} mb={4} />
            <Text fontWeight="400" fontSize={["24px", "28px"]}>
              Find A Doctor
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
              Search doctors by specialty and location.
            </Text>
          </Button>

          <Button
            bg="red.500"
            color="white"
            size="lg"
            height={{ base: "auto", md: "250px" }}
            _hover={{ bg: "red.600", transform: "scale(1.05)" }}
            _active={{ bg: "red.700" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={8}
            flex={1}
            borderRadius="md"
            mb={[4, 0]}
            transition="transform 0.3s ease, background-color 0.3s ease"
          >
            <Icon as={FaMapMarkerAlt} boxSize={[8, 10]} mb={4} />
            <Text fontWeight="400" fontSize={["24px", "28px"]}>
              Find Health Care Near You
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
              Discover nearby health care facilities.
            </Text>
          </Button>

          <Button
            bg="yellow.500"
            color="white"
            height={{ base: "auto", md: "250px" }}
            size="lg"
            _hover={{ bg: "yellow.600", transform: "scale(1.05)" }}
            _active={{ bg: "yellow.700" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={8}
            flex={1}
            borderRadius="md"
            transition="transform 0.3s ease, background-color 0.3s ease"
          >
            <Icon as={FaRegClipboard} boxSize={[8, 10]} mb={4} />
            <Text fontWeight="400" fontSize={["24px", "28px"]}>
              Go to Health Portal
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
              Access and manage your health records from anywhere.
            </Text>
          </Button>
        </Flex>
      </Box>

      {/* Floating Emergency Button */}
      <Button
        position="fixed"
        bottom={4}
        right={4}
        colorScheme="red"
        size={["md", "lg"]}
        borderRadius="full"
        boxShadow="lg"
        _hover={{ bg: "red.600", transform: "scale(1.1)" }}
        _active={{ bg: "red.700" }}
        transition="transform 0.3s ease, background-color 0.3s ease"
      >
        Have an Emergency?
      </Button>
    </Box>
  );
}
