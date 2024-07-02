import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiAlertCircle, FiX } from "react-icons/fi";

const StackedNotifications = ({ notification, removeNotif }) => {
  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => {
        removeNotif();
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [notification, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: 15, scale: 0.9, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -25, scale: 0.9, opacity: 0 }}
      transition={{ type: "spring" }}
      className="p-4 w-80 flex items-start rounded-lg gap-2 text-sm font-medium shadow-lg text-white bg-violet-600 fixed z-50 bottom-4 right-4"
    >
      <FiAlertCircle className="text-3xl absolute -top-4 -left-4 p-2 rounded-full bg-white text-violet-600 shadow" />
      <span>{notification.text}</span>
      <button onClick={removeNotif} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default StackedNotifications;
