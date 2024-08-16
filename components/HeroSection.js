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
import { FaUserMd, FaMapMarkerAlt, FaRegClipboard } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// Typewriter animation keyframes
const typing = keyframes`
  0%, 100% { width: 0; }
  50% { width: 100%; }
`;

export default function HeroSection() {
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
          top={8}
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
            rightIcon={<ArrowForwardIcon />}
          />
        </Flex>

        {/* Main Heading with Typewriter Animation */}
        <Stack spacing={4} mb={8} textAlign="center">
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="bold"
            overflow="hidden"
            whiteSpace="nowrap"
            borderRight="4px solid"
            borderColor="white"
            width="fit-content"
            margin="0 auto"
            animation={`${typing} 4s steps(40) infinite`}
          >
            Vitality AI
          </Heading>
          <Text fontSize={["lg", "xl"]}>
            Stay updated with the latest technology in Medicine.
          </Text>
        </Stack>

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
              Manage Your Health Information <br /> Online
            </Text>
            <Text fontSize="md">
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
        size="lg"
        borderRadius="full"
        boxShadow="lg"
        _hover={{ bg: "red.600" }}
      >
        Have an Emergency?
      </Button>
    </Box>
  );
}
