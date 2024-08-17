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
import { FaHeartbeat, FaClinicMedical, FaUserNurse } from "react-icons/fa";

const Women = () => {
  return (
    <Box
      bg="blue.100"
      // h="100vh"
      py="50px"
      px={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading fontSize="6xl" fontWeight="300" mb={8} color="blue.700">
        Women's Health Facilities
      </Heading>

      <HStack spacing={8} w="100%" justify="space-between">
        {/* Left Section: Image and Additional Text */}
        <VStack w="40%" spacing={5}>
          <Image
            src="/women_care.png"
            alt="Women's health consultation"
            borderRadius="md"
            boxShadow="md"
          />
          <Text fontSize="md" color="gray.500">
            Empowering women with comprehensive health care services.
          </Text>
        </VStack>

        {/* Right Section: Descriptions and Process */}
        <VStack w="50%" align="start" spacing={5}>
          <Text fontSize="xl" color="gray.700">
            We provide a full range of women's health services to meet the
            unique needs of every woman. From routine gynecological care to
            specialized treatments, we are here to support your health journey.
          </Text>
          <Text fontSize="lg" color="gray.600">
            Our network of women's health specialists is dedicated to offering
            personalized care. Whether you're looking for reproductive health
            guidance, pregnancy support, or menopause management, our experts
            are here for you.
          </Text>

          {/* Women's Health Check-up Steps */}
          <VStack
            spacing={4}
            align="start"
            divider={<StackDivider borderColor="gray.300" />}
            mt={6}
          >
            <HStack spacing={4}>
              <Icon as={FaHeartbeat} w={6} h={6} color="blue.700" />
              <Text fontSize="lg" color="gray.700">
                Step 1: Schedule Your Wellness Check
              </Text>
            </HStack>
            <Text color="gray.600" ml={10}>
              Book an appointment with one of our women's health specialists to
              begin your personalized care plan.
            </Text>

            <HStack spacing={4}>
              <Icon as={FaClinicMedical} w={6} h={6} color="blue.700" />
              <Text fontSize="lg" color="gray.700">
                Step 2: Meet Your Specialist
              </Text>
            </HStack>
            <Text color="gray.600" ml={10}>
              Consult with our experts to discuss your health needs and get
              recommendations for the best care options.
            </Text>

            <HStack spacing={4}>
              <Icon as={FaUserNurse} w={6} h={6} color="blue.700" />
              <Text fontSize="lg" color="gray.700">
                Step 3: Receive Continued Support
              </Text>
            </HStack>
            <Text color="gray.600" ml={10}>
              Stay connected with our team for ongoing care, guidance, and
              wellness support as you navigate your health journey.
            </Text>
          </VStack>

          {/* Updated Button */}
          <Link href="/consult-specialists" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="blue" size="lg" mt={8}>
              Consult Specialists Nearby
            </Button>
          </Link>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Women;
