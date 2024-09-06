import { useState } from "react";
import SponsoredMedicines from "@/components/SponsoredMedicines";
import { Button, Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const BuyMedicinePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.name === item.name);
      if (existingItem) {
        return prevItems.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <SponsoredMedicines
          addItemToCart={addItemToCart}
          cartItems={cartItems}
          numberofCartItems={cartItems.length}
        />
      </div>
      <Footer />
    </>
  );
};

export default BuyMedicinePage;
