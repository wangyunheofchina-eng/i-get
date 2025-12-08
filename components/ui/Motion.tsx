"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export const Pop = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 260, damping: 16 }}
  >
    {children}
  </motion.div>
);

export const FadeList = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: 0.08 }
      }
    }}
  >
    {children}
  </motion.div>
);

export const FadeItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 8 },
      show: { opacity: 1, y: 0 }
    }}
  >
    {children}
  </motion.div>
);
