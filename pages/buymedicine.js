import { useState } from "react";
import SponsoredMedicines from "../components/SponsoredMedicines";
import Cart from "../components/Cart";
import { Box, Flex, Button } from "@chakra-ui/react";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <Flex justify="space-between" p={5} background="blue.600" color="white">
        <Button colorScheme="teal" onClick={() => setShowCart(false)}>Medicines</Button>
        <Button colorScheme="teal" onClick={() => setShowCart(true)}>Cart ({cartItems.length})</Button>
      </Flex>
      
      {showCart ? (
        <Cart cartItems={cartItems} removeItem={removeItemFromCart} />
      ) : (
        <SponsoredMedicines addItemToCart={addItemToCart} />
      )}
    </Box>
  );
}
