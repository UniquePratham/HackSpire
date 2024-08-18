// pages/cardiometer.js
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import DeviceIntro from "../components/DeviceIntro";
import UsageSteps from "../components/UsageSteps";

const CardiometerPage = () => (
  <Box>
    <Navbar />
    <Box p={4} bg="gray.50" minH="100vh" width="100%">
      <DeviceIntro />
      <UsageSteps />
    </Box>
  </Box>
);

export default CardiometerPage;
