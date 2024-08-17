import React from "react";
import { Box, Text, Link, Head, Button, VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Women = dynamic(() => import("../components/Women"), { ssr: false });
const Children = dynamic(() => import("../components/Children"), {
  ssr: false,
});
const Feedbacks = dynamic(() => import("../components/Feedbacks"), {
  ssr: false,
});
const Navbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});
const WC = dynamic(() => import("../components/W&C"), {
  ssr: false,
});

const WomenChildren = () => {
  return (
    <>
      <Navbar />
      <WC />
      <Women />
      <Children />
      <Feedbacks />
      <Footer />
    </>
  );
};

export default WomenChildren;
