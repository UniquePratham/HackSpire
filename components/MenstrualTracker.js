import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Input,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaCalendarAlt, FaBell, FaPlus } from "react-icons/fa";

const MenstrualTracker = () => {
  const [startDate, setStartDate] = useState("");
  const [nextCycleDate, setNextCycleDate] = useState("");
  const [notificationGranted, setNotificationGranted] = useState(false);

  useEffect(() => {
    const savedDate = localStorage.getItem("menstrualStartDate");
    if (savedDate) {
      setStartDate(savedDate);
      calculateNextCycle(new Date(savedDate));
    }
  }, []);

  useEffect(() => {
    if (nextCycleDate && notificationGranted) {
      scheduleNotifications(new Date(nextCycleDate));
    }
  }, [nextCycleDate, notificationGranted]);

  const handleStartDateChange = (e) => {
    const newDate = e.target.value;
    setStartDate(newDate);
    localStorage.setItem("menstrualStartDate", newDate);
    calculateNextCycle(new Date(newDate));
  };

  const calculateNextCycle = (date) => {
    const nextCycle = new Date(date);
    nextCycle.setDate(date.getDate() + 28); // Assuming a 28-day cycle
    setNextCycleDate(nextCycle.toDateString());
  };

  const requestNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      setNotificationGranted(permission === "granted");
    });
  };

  const scheduleNotifications = (nextCycleDate) => {
    const currentDate = new Date();
    const fiveDaysBefore = new Date(nextCycleDate);
    fiveDaysBefore.setDate(nextCycleDate.getDate() - 5);

    if (currentDate >= fiveDaysBefore && currentDate <= nextCycleDate) {
      sendNotification("Reminder: Your cycle is approaching in 5 days!");
      dailyNotificationReminder(nextCycleDate);
    } else {
      const timeUntilFirstNotification =
        fiveDaysBefore.getTime() - currentDate.getTime();
      setTimeout(() => {
        sendNotification("Reminder: Your cycle is approaching in 5 days!");
        dailyNotificationReminder(nextCycleDate);
      }, timeUntilFirstNotification);
    }
  };

  const dailyNotificationReminder = (nextCycleDate) => {
    const currentDate = new Date();
    const daysUntilNextCycle =
      (nextCycleDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24);

    if (daysUntilNextCycle > 0) {
      const interval = setInterval(() => {
        const daysLeft = Math.ceil(
          (nextCycleDate.getTime() - new Date().getTime()) /
            (1000 * 60 * 60 * 24)
        );
        if (daysLeft > 0) {
          sendNotification(`Reminder: Your cycle starts in ${daysLeft} days!`);
        } else {
          clearInterval(interval); // Stop the reminders on the day of the cycle
        }
      }, 24 * 60 * 60 * 1000); // Repeat every 24 hours
    }
  };

  const sendNotification = (message) => {
    if (notificationGranted && message) {
      new Notification("Cycle Reminder", {
        body: message,
      });
    }
  };

  return (
    <Box p={8} bg="pink.100" borderRadius="lg" textAlign="center">
      {/* Slogan Section */}
      <Heading mb={4} color="pink.700">
        Embrace Your Cycle with Confidence
      </Heading>
      <Text fontSize="lg" color="pink.800" mb={6}>
        Track your menstrual cycle effortlessly and stay prepared with timely
        notifications.
      </Text>

      {/* Image Section */}
      <Box
        mb={6}
        position="relative"
        height="50vh"
        width="95vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="https://img.freepik.com/free-vector/menstrual-calendar-concept-illustration_23-2148649657.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
          alt="Menstrual Calendar"
          layout="fill"
          objectFit="contain"
          style={{ borderRadius: "8px" }}
        />
      </Box>

      {/* Icon Symbols Section */}
      <HStack spacing={8} mb={6} justify="center">
        <Box>
          <Icon as={FaCalendarAlt} boxSize={6} color="pink.600" />
          <Text fontSize="lg" color="pink.800">
            Track Your Cycle
          </Text>
        </Box>
        <Box>
          <Icon as={FaBell} boxSize={6} color="pink.600" />
          <Text fontSize="lg" color="pink.800">
            Set Reminders
          </Text>
        </Box>
        <Box>
          <Icon as={FaPlus} boxSize={6} color="pink.600" />
          <Text fontSize="lg" color="pink.800">
            Add New Dates
          </Text>
        </Box>
      </HStack>

      {/* Main Content */}
      <VStack spacing={4} mt={6}>
        <Text fontSize="lg" color="pink.800">
          Enter the start date of your current menstrual cycle:
        </Text>
        <Input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          bg="white"
          color="gray.700"
          width="30vw"
        />
        {nextCycleDate && (
          <Text fontSize="lg" color="pink.800">
            Your next cycle is expected to start on {nextCycleDate}.
          </Text>
        )}
        <Button colorScheme="pink" onClick={requestNotificationPermission}>
          Enable Notifications
        </Button>
      </VStack>
    </Box>
  );
};

export default MenstrualTracker;
