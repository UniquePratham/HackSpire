// components/UsageSteps.js
import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  keyframes,
  Stack,
  Image,
} from "@chakra-ui/react";

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
    p={10}
    bgGradient="linear(to-b, gray.800, black)"
    borderRadius="xl"
    boxShadow="dark-lg"
    backdropFilter="blur(10px)"
    mb={16}
    maxW="container.lg"
    mx="auto"
    animation={`${fadeIn} 1s ease-out`}
  >
    <Stack spacing={8}>
      <Heading
        size="lg"
        mb={6}
        color="teal.400"
        animation={`${slideIn} 1.2s ease-in-out`}
      >
        How to Use CardioQ
      </Heading>
      <OrderedList
        spacing={5}
        fontSize="lg"
        color="gray.300"
        animation={`${fadeIn} 1.5s ease-out`}
      >
        <ListItem>
          Wear CardioQ on your wrist or chest before sleep. Ensure it's secured
          comfortably.
        </ListItem>
        <ListItem>
          Sync it with the app via Bluetooth to enable real-time data tracking.
        </ListItem>
        <ListItem>
          Start tracking your heartbeat fluctuations as you rest. Feel at ease,
          knowing CardioQ watches over you.
        </ListItem>
        <ListItem>
          In the morning, review your personalized report with insights and
          advice on your heart's health.
        </ListItem>
        <ListItem>
          Receive alerts for any unusual heartbeat patterns that require your
          attention.
        </ListItem>
      </OrderedList>
      <Image
        src="https://cdn.dribbble.com/users/1355613/screenshots/6936873/media/79fb7e2b0b8dd6fd2dbf276c10b19d47.png"
        alt="CardioQ Usage"
        boxSize={{ base: "100%", md: "80%" }}
        borderRadius="xl"
        objectFit="cover"
        shadow="2xl"
        mx="auto"
      />
    </Stack>
  </Box>
);

export default UsageSteps;
