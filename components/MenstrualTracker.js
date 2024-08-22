import React, { useState, useEffect } from "react";
import { Box, Heading, Button, Text, Input, VStack } from "@chakra-ui/react";

const MenstrualTracker = () => {
  const [startDate, setStartDate] = useState("");
  const [nextCycleDate, setNextCycleDate] = useState("");
  const [notificationGranted, setNotificationGranted] = useState(false);

  // Load stored date on mount
  useEffect(() => {
    const savedDate = localStorage.getItem("menstrualStartDate");
    if (savedDate) {
      setStartDate(savedDate);
      calculateNextCycle(new Date(savedDate));
    }
  }, []);

  // Save date to local storage and calculate next cycle
  const handleStartDateChange = (e) => {
    const newDate = e.target.value;
    setStartDate(newDate);
    localStorage.setItem("menstrualStartDate", newDate);
    calculateNextCycle(new Date(newDate));
  };

  // Calculate the next cycle date based on a 28-day cycle
  const calculateNextCycle = (date) => {
    const nextCycle = new Date(date);
    nextCycle.setDate(date.getDate() + 28);
    setNextCycleDate(nextCycle.toDateString());
  };

  // Request notification permission
  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      setNotificationGranted(permission === "granted");
    });
  };

  // Send notification
  const sendNotification = () => {
    if (notificationGranted && nextCycleDate) {
      new Notification("Cycle Reminder", {
        body: `Your next menstrual cycle starts on ${nextCycleDate}`,
      });
    }
  };

  return (
    <Box p={8} bg="pink.100" borderRadius="lg" textAlign="center">
      <Heading mb={4} color="pink.700">
        Menstrual Cycle Tracker
      </Heading>
      <VStack spacing={4}>
        <Text fontSize="lg" color="pink.800">
          Enter the start date of your current menstrual cycle:
        </Text>
        <Input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          bg="white"
          color="gray.700"
        />
        {nextCycleDate && (
          <Text fontSize="lg" color="pink.800">
            Your next cycle is expected to start on {nextCycleDate}.
          </Text>
        )}
        <Button colorScheme="pink" onClick={requestNotificationPermission}>
          Enable Notifications
        </Button>
        {notificationGranted && (
          <Button colorScheme="teal" onClick={sendNotification}>
            Test Notification
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default MenstrualTracker;
