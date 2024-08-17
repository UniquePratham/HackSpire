import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Button,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import { FaFemale, FaChild, FaPregnantWoman } from "react-icons/fa";

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

const WC = () => {
  return (
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
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
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
      >
        {/* Main Heading with Typewriter Animation */}
        <Heading
          as="h1"
          fontSize={["5xl", "6xl", "7xl"]}
          fontWeight="300"
          overflow="hidden"
          whiteSpace="nowrap"
          borderRight="4px solid white"
          width="fit-content"
          margin="0 auto"
          animation={`${typing} 4s steps(40)`}
          animationFillMode="forwards"
          transition="transform 0.3s ease, color 0.3s ease"
          _hover={{ color: "cyan", transform: "scale(1.05)" }}
          cursor="pointer"
        >
          Women's & Child Care
        </Heading>

        {/* Content */}
        <Flex
          direction={["column", "row"]}
          align="center"
          justify="center"
          spacing={8}
          mt={8}
        >
          {/* Women's Care Section */}
          <VStack
            bg="blue.500"
            color="white"
            p={8}
            borderRadius="md"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            mb={[6, 0]}
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ bg: "blue.600", transform: "scale(1.05)" }}
            spacing={4}
            mr={2}
          >
            <Icon as={FaFemale} boxSize={10} mb={4} />
            <Heading size="xl" fontWeight="300" mb={2}>
              Women's Care
            </Heading>
            <Text>
              Providing comprehensive care for women’s health, including
              gynecological services, reproductive health, and general wellness
              checks.
            </Text>
          </VStack>

          {/* Child Care Section */}
          <VStack
            bg="yellow.500"
            color="black"
            p={8}
            borderRadius="md"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            mb={[6, 0]}
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ bg: "yellow.600", transform: "scale(1.05)" }}
            spacing={4}
          >
            <Icon as={FaChild} boxSize={10} mb={4} />
            <Heading size="xl" fontWeight="300" mb={2}>
              Child Care
            </Heading>
            <Text>
              From vaccinations to growth monitoring, our specialists ensure
              your child gets the best care during every stage of their
              development.
            </Text>
          </VStack>

          {/* Pregnancy Care Section */}
          <VStack
            bg="red.500"
            color="white"
            p={8}
            borderRadius="md"
            boxShadow="lg"
            width={{ base: "100%", md: "30%" }}
            mb={[6, 0]}
            transition="transform 0.3s ease, background-color 0.3s ease"
            _hover={{ bg: "red.600", transform: "scale(1.05)" }}
            spacing={4}
            ml={2}
          >
            <Icon as={FaPregnantWoman} boxSize={10} mb={4} />
            <Heading size="xl" fontWeight="300" mb={2}>
              Pregnancy Care
            </Heading>
            <Text>
              Our pregnancy care services provide expectant mothers with the
              support and medical guidance needed for a healthy and safe
              pregnancy journey.
            </Text>
          </VStack>
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
};

export default WC;
