import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Stack,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const Cart = ({ cartItems, removeFromCart, updateItemQuantity }) => {
  return (
    <Box
      bgImage={{
        base: "url('Images/medicine_cart_bg_mob.jpg')",
        md: "url('Images/medicine_cart_bg.jpg')",
      }}
      bgSize="cover"
      bgPosition="center"
      p={8}
      minH="100vh"
    >
      <Box
        maxW="800px"
        mx="auto"
        bg="white"
        p={6}
        borderRadius="md"
        boxShadow="lg"
        bgColor="rgba(255, 255, 255, 0.5)"
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Your Cart
        </Text>
        <Stack spacing={4}>
          {cartItems.length === 0 ? (
            <Text>Your cart is empty.</Text>
          ) : (
            cartItems.map((item, index) => (
              <Flex
                key={index}
                align="center"
                justify="space-between"
                p={4}
                borderWidth={1}
                borderRadius="md"
                boxShadow="sm"
                bgColor="rgba(255, 70, 255, 0.8)"
              >
                <Flex align="center">
                  <Image
                    src={
                      item.imageUrl ||
                      `https://via.placeholder.com/100?text=${encodeURIComponent(
                        item.name || "Medicine"
                      )}`
                    }
                    alt={item.name}
                    boxSize="100px"
                    objectFit="contain"
                    mr={4}
                  />
                  <Box>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text color="gray.500">Price: ₹{item.price}</Text>
                    <NumberInput
                      min={1}
                      value={item.quantity}
                      onChange={(value) =>
                        updateItemQuantity(item.name, parseInt(value))
                      }
                      maxW="100px"
                      mr="2rem"
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Text fontWeight="bold" color="purple.600">
                      Total: ₹{item.price * item.quantity}
                    </Text>
                  </Box>
                </Flex>
                <Button colorScheme="red" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
              </Flex>
            ))
          )}
        </Stack>
        {cartItems.length > 0 && (
          <Box mt={8} textAlign="right">
            <Text fontSize="xl" fontWeight="bold">
              Total Price: ₹
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </Text>
            <Button mt={4} colorScheme="purple" size="lg">
              Proceed to Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
