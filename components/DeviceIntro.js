/* eslint-disable react/no-unescaped-entities */
// components/DeviceIntro.js
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  useBreakpointValue,
  keyframes,
} from "@chakra-ui/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-100px); }
  to { opacity: 1; transform: translateX(0); }
`;

const zoomIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const DeviceIntro = () => (
  <Box
    p={10}
    bgGradient="linear(to-r, teal.100, teal.300)"
    borderRadius="lg"
    boxShadow="2xl"
    backdropFilter="blur(10px)"
    mb={12}
    width="100%"
    mx="auto"
    textAlign="center"
    animation={`${fadeIn} 1s ease-out`}
  >
    <Stack spacing={8} width="100%" animation={`${slideIn} 1.2s ease-in-out`}>
      <Heading size="2xl" color="teal.800" animation={`${zoomIn} 1.5s ease-in-out`}>
        Introducing Our IoT Device, CardioQ
      </Heading>
      <Text fontSize="xl" color="gray.700" animation={`${fadeIn} 1.5s ease-out`}>
        CardioQ is a cutting-edge, lightweight wearable device designed to
        monitor your heartbeat fluctuations during sleep. Its advanced sensors
        collect detailed reports of your heart rate variations, providing
        real-time feedback on any significant fluctuations. Track your heart
        health effortlessly and stay informed about your cardiac well-being
        anytime, anywhere.
      </Text>
      <Image
        // src="/images/cardioq-device.png"
        src="https://sumatosoft.com/wp-content/uploads/2023/09/IoT-devices-in-healthcare-1200x900.png"
        alt="CardioQ Device"
        boxSize={useBreakpointValue({ base: "100%", md: "80%" })}
        objectFit="contain"
        borderRadius="md"
        mx="auto"
        shadow="xl"
        height="180px"
        width="auto"
        animation={`${zoomIn} 2s ease`}
      />
      <Text fontSize="lg" color="gray.600" animation={`${fadeIn} 1.8s ease-out`}>
        The CardioQ device is designed for comfort and accuracy. Its sleek,
        ergonomic design ensures a snug fit on your wrist or chest, while its
        lightweight build means you'll hardly notice you're wearing it. With
        easy synchronization with our mobile app, monitoring your heart health
        has never been easier.
      </Text>
    </Stack>
  </Box>
);

export default DeviceIntro;
