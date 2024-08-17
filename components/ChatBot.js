import { Box, Button, Stack, Text, Input, Flex, IconButton, Icon, Wrap, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  
  // Function to handle text suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  // Function to clear the input
  const clearInput = () => {
    setInputValue("");
  };

  return (
    <Box
      height="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={1000}
      p={5}
      overflow="hidden"
    >
      <Box
        width={{ base: "90%", md: "85%", lg: "80%" }}
        bg="white"
        borderRadius="md"
        p={8}
        boxShadow="lg"
        display="flex"
        flexDirection="column"
      >
        {/* Chatbot Header */}
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold" color="teal.600">
            Doctor AI Bot
          </Text>
          <IconButton
            icon={<CloseIcon />}
            size="sm"
            colorScheme="teal"
            onClick={clearInput}
            aria-label="Clear Input"
          />
        </Flex>

        {/* Suggestions Section */}
        <Text fontSize="lg" fontWeight="medium" mb={4} textAlign="center">
          You might want to know
        </Text>
        
        {/* Message Suggestions */}
        <Wrap spacing={3} mb={6} justify="center">
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("I have fever and headaches")}
            >
              I have fever and headaches
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("What are the symptoms of COVID-19?")}
            >
              What are the symptoms of COVID-19?
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("How do I prevent the common cold?")}
            >
              How do I prevent the common cold?
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("Can you provide tips for healthy eating?")}
            >
              Can you provide tips for healthy eating?
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("How can I improve my sleep quality?")}
            >
              How can I improve my sleep quality?
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("What exercises are good for lower back pain?")}
            >
              What exercises are good for lower back pain?
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("Do you have tips for managing stress?")}
            >
              Do you have tips for managing stress?
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              variant="outline"
              size="md"
              onClick={() => handleSuggestionClick("How do I boost my immune system?")}
            >
              How do I boost my immune system?
            </Button>
          </WrapItem>
        </Wrap>

        {/* Chat Input */}
        <Flex>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            size="lg"
            bg="gray.100"
            borderRadius="md"
          />
          <Button
            ml={4}
            colorScheme="teal"
            size="lg"
            onClick={() => alert(`Message sent: ${inputValue}`)}
          >
            <Icon as={FaPaperPlane} color="white" />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ChatBot;
