import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Input,
  Icon,
  keyframes,
} from "@chakra-ui/react";
import {
  FaUserMd,
  FaMapMarkerAlt,
  FaRegClipboard,
  FaAmbulance,
} from "react-icons/fa";
import { useState, useEffect } from "react";

// Typewriter animation
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

export default function HeroSection() {
  const [showEmergencyButton, setShowEmergencyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowEmergencyButton(true);
      } else {
        setShowEmergencyButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position="relative" height="100vh" overflow="hidden" color="white">
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
        bg="blackAlpha.700"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={4}
      >
        {/* Search Bar */}
        <Flex
          mb={8}
          direction={["column", "row"]}
          maxW="md"
          width="100%"
          alignItems="center"
          position="absolute"
          top={10}
          zIndex={2}
        >
          <Input
            placeholder="Enter a doctor, specialty, or condition"
            size="lg"
            borderRadius="md"
            bg="white"
            color="gray.700"
            mb={[4, 0]}
            flex={1}
          />
          <Button
            colorScheme="green"
            size="lg"
            ml={[0, 2]}
            _hover={{ bg: "green.600" }}
          >
            →
          </Button>
        </Flex>

        {/* Main Heading with Typewriter Animation */}
        <Stack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            overflow="hidden"
            whiteSpace="nowrap"
            borderRight="3px solid"
            width="fit-content"
            animation={`${typing} 3.5s steps(30, end) 1, blink-caret .75s step-end infinite`}
          >
            Vitality AI
          </Heading>
          <Text fontSize={["lg", "xl"]}>
            Stay updated with the latest technology in Medicine.
          </Text>
        </Stack>

        {/* Action Buttons - In a Row with Spacing */}
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
            _hover={{ bg: "blue.600" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={8}
            flex={1}
            borderRadius="md"
            height={{ base: "", md: "250px" }}
          >
            <Icon as={FaUserMd} boxSize={10} mb={4} />
            <Text fontWeight="400" fontSize="28px">
              Find A Doctor
            </Text>
            <Text fontSize="md">
              Easily search for a doctor based on specialty and location.
            </Text>
          </Button>

          <Button
            bg="red.500"
            color="white"
            size="lg"
            height={{ base: "", md: "250px" }}
            _hover={{ bg: "red.600" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={8}
            flex={1}
            borderRadius="md"
          >
            <Icon as={FaMapMarkerAlt} boxSize={10} mb={4} />
            <Text fontWeight="400" fontSize="28px">
              Find Health Care Near You
            </Text>
            <Text fontSize="md">
              Locate the nearest health care facilities in your area.
            </Text>
          </Button>

          <Button
            bg="yellow.500"
            color="white"
            height={{ base: "", md: "250px" }}
            size="lg"
            _hover={{ bg: "yellow.600" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={8}
            flex={1}
            borderRadius="md"
          >
            <Icon as={FaRegClipboard} boxSize={10} mb={4} />
            <Text fontWeight="400" fontSize="28px">
              Manage Your Health Information Online
            </Text>
            <Text fontSize="md">
              Access and manage your health records from anywhere.
            </Text>
          </Button>
        </Flex>
      </Box>

      {/* Floating Emergency Button */}
      {showEmergencyButton && (
        <Button
          position="fixed"
          bottom={4}
          right={4}
          bg="red.600"
          color="white"
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          _hover={{ bg: "red.700" }}
          leftIcon={<FaAmbulance />}
        >
          Have an Emergency?
        </Button>
      )}
    </Box>
  );
}
