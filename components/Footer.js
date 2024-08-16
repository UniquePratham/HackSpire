import React from "react";
import { Box, Flex, Icon, Link, Text, Input, Button } from "@chakra-ui/react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={8} bg="gray.700" color="white" px={4}>
      {/* Contact and Social Links */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "flex-start" }}
        flexWrap="wrap"
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
            <Icon as={FiMapPin} mr={2} color="cyan" />
            <Text cursor="pointer"  _hover={{ color: "green.300", transition: "color 0.3s" }}>
              Salt Lake, Kolkata- 700138
            </Text>
          </Flex>
          <Flex align="center" mb={4}>
            <Icon as={FiPhone} mr={2} color="red" />
            <Text cursor="pointer" _hover={{ color: "green.300", transition: "color 0.3s" }}>
              +91 9674177512
            </Text>
          </Flex>
          <Flex align="center" mb={4}>
            <Icon as={FiMail} mr={2} color="yellow" />
            <Text  cursor="pointer" _hover={{ color: "green.300", transition: "color 0.3s" }}>
              shaswata.ssaha@gmail.com
            </Text>
          </Flex>
        </Box>

        {/* Right part: Social Links and Newsletter Subscription */}
        <Box flex="1" textAlign={{ base: "center", md: "right" }}>
          {/* LinkedIn icon/link */}
          <Flex justify="center" mb={4}>
            <Link
              href="https://www.linkedin.com/in/shaswata-saha-74b209251/"
              isExternal
              _hover={{ color: "cyan.500", transition: "color 0.3s" }}
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
                bg="gray.600"
                color="white"
                size="lg"
                mr={2}
                _placeholder={{ color: "gray.400" }}
              />
              <Button
                bg="gold"
                size="lg"
                color="black"
                _hover={{
                  bg: "black",
                  color: "gold",
                  boxShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                }}
                transition="all 0.3s"
              >
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
          bg="gray.700"
          px={4}
        >
          <Text fontSize="sm" color="gray.400">
            Developed by{" "}
            <Link
              href="https://acns.vercel.app"
              isExternal
              color="cyan.500"
              _hover={{ color: "white", transition: "color 0.3s" }}
            >
              ACNS
            </Link>
          </Text>
        </Box>
      </Flex>

      {/* Copyright */}
      <Flex justify="center" mt={4} textShadow="2px 2px 5px rgba(0,0,0,0.5)">
        <Text fontSize="lg">&copy; 2024 VitalityAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
