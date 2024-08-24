import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Switch,
  Textarea,
  VStack,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

const Form = () => {
  // Define dark colors
  const formBg = useColorModeValue("gray.800", "gray.700");
  const inputBg = useColorModeValue("gray.900", "gray.800");
  const inputBorder = useColorModeValue("gray.600", "gray.500");

  return (
    <Box bg={formBg} p={8} borderRadius="lg" maxW="600px" mx="auto" mt={8}>
      <VStack spacing={6}>
        {/* Name Input */}
        <FormControl id="name" isRequired>
          <FormLabel color="whiteAlpha.900">Full Name</FormLabel>
          <Input
            type="text"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
          />
        </FormControl>

        {/* Email Input */}
        <FormControl id="email" isRequired>
          <FormLabel color="whiteAlpha.900">Email Address</FormLabel>
          <Input
            type="email"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
          />
        </FormControl>

        {/* Password Input */}
        <FormControl id="password" isRequired>
          <FormLabel color="whiteAlpha.900">Password</FormLabel>
          <Input
            type="password"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
          />
        </FormControl>

        {/* Date Picker */}
        <FormControl id="dob" isRequired>
          <FormLabel color="whiteAlpha.900">Date of Birth</FormLabel>
          <Input
            type="date"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
          />
        </FormControl>

        {/* Phone Number Input */}
        <FormControl id="phone">
          <FormLabel color="whiteAlpha.900">Phone Number</FormLabel>
          <Input
            type="tel"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
          />
        </FormControl>

        {/* Gender Selection */}
        <FormControl id="gender">
          <FormLabel color="whiteAlpha.900">Gender</FormLabel>
          <Select
            placeholder="Select option"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>

        {/* Text Area Input */}
        <FormControl id="about">
          <FormLabel color="whiteAlpha.900">Tell us about yourself</FormLabel>
          <Textarea
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
            placeholder="Brief description..."
          />
        </FormControl>

        {/* Switch Input */}
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="newsletter" mb="0" color="whiteAlpha.900">
            Subscribe to our newsletter
          </FormLabel>
          <Switch id="newsletter" colorScheme="teal" />
        </FormControl>

        {/* Range Input */}
        <FormControl id="satisfaction">
          <FormLabel color="whiteAlpha.900">Satisfaction Level</FormLabel>
          <Input
            type="range"
            bg={inputBg}
            color="whiteAlpha.900"
            borderColor={inputBorder}
            focusBorderColor="teal.500"
            min="0"
            max="10"
          />
        </FormControl>

        {/* Buttons */}
        <HStack spacing={4} width="100%" justify="flex-end">
          <Button colorScheme="gray" variant="outline">
            Reset
          </Button>
          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Form;
