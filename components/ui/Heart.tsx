"use client";

import { motion } from "framer-motion";

export const Heart = ({ active }) => (
  <motion.span
    animate={{ scale: active ? 1.4 : 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 12 }}
  >
    {active ? "❤️" : "🤍"}
  </motion.span>
);
