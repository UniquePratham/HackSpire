// components/UsageSteps.js
import { Box, Heading, OrderedList, ListItem } from "@chakra-ui/react";

const UsageSteps = () => (
  <Box
    p={8}
    bgGradient="linear(to-r, teal.50, teal.200)"
    borderRadius="lg"
    boxShadow="md"
    backdropFilter="blur(8px)"
    mb={8}
    maxW="container.md"
    mx="auto"
  >
    <Heading size="lg" mb={6}>
      How to Use CardioQ
    </Heading>
    <OrderedList spacing={4} fontSize="lg">
      <ListItem>
        Wear the device on your wrist or chest before going to sleep.
      </ListItem>
      <ListItem>
        Ensure the device is properly secured and comfortable.
      </ListItem>
      <ListItem>
        Sync the device with your mobile app to start tracking.
      </ListItem>
      <ListItem>
        Review your heartbeat fluctuation reports in the morning.
      </ListItem>
      <ListItem>
        Receive alerts for any major fluctuations directly to your phone.
      </ListItem>
    </OrderedList>
  </Box>
);

export default UsageSteps;
