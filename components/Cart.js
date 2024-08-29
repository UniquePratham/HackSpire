import { Box, Text, Button, VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";

const Cart = ({ cartItems, removeItem }) => {
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleCheckout = () => {
    setCheckoutMessage("Thank you for your purchase!");
  };

  return (
    <Box p={5} background="gray.50" minHeight="100vh">
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Cart
      </Text>
      <VStack spacing={4}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <HStack key={index} w="100%" p={4} borderRadius="md" boxShadow="md" bg="white">
              <Text fontSize="lg" flex={1}>
                {item.openfda?.brand_name || "Unknown Medicine"}
              </Text>
              <Text fontWeight="bold" color="green.500">
                $10.99
              </Text>
              <Button colorScheme="red" onClick={() => removeItem(index)}>
                Remove
              </Button>
            </HStack>
          ))
        ) : (
          <Text>Your cart is empty</Text>
        )}
      </VStack>
      {cartItems.length > 0 && (
        <Button
          mt={5}
          colorScheme="teal"
          size="lg"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      )}
      {checkoutMessage && <Text mt={5} color="green.500">{checkoutMessage}</Text>}
    </Box>
  );
};

export default Cart;
