// components/DeviceIntro.js
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";

const DeviceIntro = () => (
  <Box
    p={10}
    bgGradient="linear(to-r, teal.100, teal.300)"
    borderRadius="lg"
    boxShadow="xl"
    backdropFilter="blur(10px)"
    mb={12}
    width="100%"
    mx="auto"
    textAlign="center"
  >
    <Stack spacing={8} width="100%">
      <Heading size="2xl" color="teal.800">
        Introducing Our IoT Device, CardioQ
      </Heading>
      <Text fontSize="xl" color="gray.700">
        CardioQ is a cutting-edge, lightweight wearable device designed to
        monitor your heartbeat fluctuations during sleep. Its advanced sensors
        collect detailed reports of your heart rate variations, providing
        real-time feedback on any significant fluctuations. Track your heart
        health effortlessly and stay informed about your cardiac well-being
        anytime, anywhere.
      </Text>
      <Image
        src="/images/cardioq-device.png"
        alt="CardioQ Device"
        boxSize={useBreakpointValue({ base: "100%", md: "80%" })}
        objectFit="contain"
        borderRadius="md"
        mx="auto"
        shadow="md"
      />
      <Text fontSize="lg" color="gray.600">
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
