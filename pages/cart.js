import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CartWheel = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (router.query.cartItems) {
      setCartItems(JSON.parse(router.query.cartItems));
    }
  }, [router.query.cartItems]);

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.name !== item.name));
  };

  const updateItemQuantity = (itemName, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Box>
      <Navbar />
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateItemQuantity={updateItemQuantity}
      />
      <Footer />
    </Box>
  );
};

export default CartWheel;
