import React from "react";
import { Box, Flex, Icon, Link, Text, Input, Button } from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={8} bg="gray.800" color="white">
      {/* Contact and Social Links */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "flex-start" }}
        flexWrap="wrap"
        px={{ base: 4, md: 0 }}
        maxW="1200px"
        mx="auto"
      >
        {/* Left part: Contact Information */}
        <Box
          flex="1"
          mb={{ base: 4, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex align="center" mb={4}>
            <Icon as={FiMapPin} mr={2} />
            <Text>Salt Lake, Kolkata- 700138</Text>
          </Flex>
          <Flex align="center" mb={4}>
            <Icon as={FiPhone} mr={2} />
            <Text>+91 9674177512</Text>
          </Flex>
          <Flex align="center" mb={4}>
            <Icon as={FiMail} mr={2} />
            <Text>shaswata.ssaha@gmail.com</Text>
          </Flex>
        </Box>

        {/* Right part: Social Links and Newsletter Subscription */}
        <Box flex="1" textAlign={{ base: "center", md: "right" }}>
          {/* LinkedIn icon/link */}
          <Flex justify="center" mb={4}>
            <Link
              href="https://www.linkedin.com/in/shaswata-saha-74b209251/"
              isExternal
            >
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
          </Flex>

          {/* Newsletter subscription section */}
          <Flex justify="center" flexDir="column" alignItems="center">
            <Text mb={2} textAlign="center">
              Subscribe to our newsletter
            </Text>
            <Flex>
              <Input
                placeholder="Enter your email"
                bg="gray.700"
                color="white"
                mr={2}
                _placeholder={{ color: "gray.400" }}
              />
              <Button colorScheme="blue" size="md">
                Subscribe
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/* Developer Attribution */}
      <Flex justify="center" mt={8} position="relative">
        <Box
          position="absolute"
          top="-12px"
          left="50%"
          transform="translateX(-50%)"
          bg="gray.800"
          px={4}
        >
          <Text fontSize="sm" color="gray.500">
            Developed by{" "}
            <Link href="https://acns.vercel.app" isExternal color="white">
              ACNS
            </Link>
          </Text>
        </Box>
      </Flex>

      {/* Copyright */}
      <Flex justify="center" mt={4}>
        <Text>&copy; 2024 VitalityAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
