// components/UsageSteps.js
import { Box, Heading, OrderedList, ListItem, keyframes } from "@chakra-ui/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-100px); }
  to { opacity: 1; transform: translateX(0); }
`;

const UsageSteps = () => (
  <Box
    p={8}
    bgGradient="linear(to-r, teal.50, teal.200)"
    borderRadius="lg"
    boxShadow="xl"
    backdropFilter="blur(8px)"
    mb={8}
    maxW="container.md"
    mx="auto"
    animation={`${fadeIn} 1s ease-out`}
  >
    <Heading size="lg" mb={6} color="teal.700" animation={`${slideIn} 1.2s ease-in-out`}>
      How to Use CardioQ
    </Heading>
    <OrderedList spacing={4} fontSize="lg" color="gray.700" animation={`${fadeIn} 1.5s ease-out`}>
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
