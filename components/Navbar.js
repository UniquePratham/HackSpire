import {
  Box,
  Flex,
  Link,
  Button,
  HStack,
  Spacer,
  IconButton,
  Image,
  useDisclosure,
  VStack,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import NextLink from "next/link";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="black" px={4} py={3} color="white" w="full">
      <Flex alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <NextLink href="/" passHref>
          <Link>
            <Image src="/logo.png" alt="VitalityAi Logo" width="150px" />
          </Link>
        </NextLink>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Toggle Navigation"
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          variant="ghost"
          color="white"
        />

        {/* Links for larger screens */}
        <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
          <NextLink href="/womenchildren" passHref>
            <Link _hover={{ color: "green.300" }}>Women & Children</Link>
          </NextLink>
          <NextLink href="/aidiagnosis" passHref>
            <Link _hover={{ color: "green.300" }}>AI Diagnosis</Link>
          </NextLink>
          <NextLink href="/cardiometer" passHref>
            <Link _hover={{ color: "green.300" }}>Cardiometer</Link>
          </NextLink>
          <NextLink href="/aichatbot" passHref>
            <Link bg="gold" color="black" px={4} py={2} borderRadius="md">
              AI ChatBot
            </Link>
          </NextLink>
          <NextLink href="/contactus" passHref>
            <Link bg="cyan.500" color="white" px={4} py={2} borderRadius="md">
              Contact Us
            </Link>
          </NextLink>
        </HStack>

        {/* Right-side Icons for larger screens */}
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Button size="sm" variant="outline" colorScheme="whiteAlpha">
            Donate
          </Button>
        </HStack>
      </Flex>

      {/* Mobile Menu Links */}
      <Collapse in={isOpen} animateOpacity>
        <VStack as="nav" spacing={4} mt={4} display={{ md: "none" }}>
          <NextLink href="/womenchildren" passHref>
            <Link _hover={{ color: "green.300" }}>Women & Children</Link>
          </NextLink>
          <NextLink href="/aidiagnosis" passHref>
            <Link _hover={{ color: "green.300" }}>AI Diagnosis</Link>
          </NextLink>
          <NextLink href="/cardiometer" passHref>
            <Link _hover={{ color: "green.300" }}>Cardiometer</Link>
          </NextLink>
          <NextLink href="/aichatbot" passHref>
            <Link bg="gold" color="black" px={4} py={2} borderRadius="md">
              AI ChatBot
            </Link>
          </NextLink>
          <NextLink href="/contactus" passHref>
            <Link bg="cyan.500" color="white" px={4} py={2} borderRadius="md">
              Contact Us
            </Link>
          </NextLink>
          <Button size="sm" variant="outline" colorScheme="whiteAlpha">
            Donate
          </Button>
        </VStack>
      </Collapse>
    </Box>
  );
}
