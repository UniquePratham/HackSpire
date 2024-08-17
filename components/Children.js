import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  StackDivider,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { FaStethoscope, FaUserMd, FaHospital } from "react-icons/fa";

const Children = () => {
  return (
    <Box
      bg="yellow.100"
      // h="100vh"
      py="80px"
      px={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="6xl" fontWeight="300" mb={8} color="yellow.700">
        Child Care Facilities
      </Heading>

      <HStack spacing={8} w="100%" justify="space-between">
        {/* Left Section: Descriptions and Process */}
        <VStack w="50%" align="start" spacing={5}>
          <Text fontSize="xl" color="gray.700">
            Providing top-quality pediatric care for your little ones. We offer
            a wide range of services, from routine check-ups to specialized
            treatments, ensuring that your child gets the best medical
            attention.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Our dedicated team of pediatricians and specialists are here to
            guide you through every step of your child's health journey. Whether
            it's vaccinations, growth monitoring, or treating acute conditions,
            our experts are ready to assist.
          </Text>

          {/* Medical Check-up Steps */}
          <VStack
            spacing={4}
            align="start"
            divider={<StackDivider borderColor="gray.300" />}
            mt={6}
          >
            <HStack spacing={4}>
              <Icon as={FaStethoscope} w={6} h={6} color="yellow.700" />
              <Text fontSize="lg" color="gray.700">
                Step 1: Schedule a Consultation
              </Text>
            </HStack>
            <Text color="gray.600" ml={10}>
              Choose a convenient time to meet with our pediatric experts for an
              initial consultation.
            </Text>

            <HStack spacing={4}>
              <Icon as={FaUserMd} w={6} h={6} color="yellow.700" />
              <Text fontSize="lg" color="gray.700">
                Step 2: Meet with Pediatricians
              </Text>
            </HStack>
            <Text color="gray.600" ml={10}>
              Discuss your child's health concerns and let our team guide you
              through the next steps of care.
            </Text>

            <HStack spacing={4}>
              <Icon as={FaHospital} w={6} h={6} color="yellow.700" />
              <Text fontSize="lg" color="gray.700">
                Step 3: Receive Care at Our Facilities
              </Text>
            </HStack>
            <Text color="gray.600" ml={10}>
              Visit our state-of-the-art facilities where your child will
              receive the best possible care.
            </Text>
          </VStack>

          {/* Updated Button */}
          <Link href="/consult-doctors" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="yellow" size="lg" mt={8}>
              Consult Doctors Nearby
            </Button>
          </Link>
        </VStack>

        {/* Right Section: Image and Additional Text */}
        <VStack w="40%" spacing={5}>
          <Image
            src="/child_care.webp"
            alt="Child doctor consultation"
            borderRadius="md"
            boxShadow="md"
          />
          <Text fontSize="md" color="gray.500">
            Pediatricians providing compassionate and comprehensive care.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Children;
