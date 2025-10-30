// src/components/LoadingScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-white  to-gray-200 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Glowing Logo Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
      >
        Ankit Kumar
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-3 text-gray-400 tracking-wider text-sm uppercase"
      >
        Initializing Portfolio System...
      </motion.p>

      {/* Futuristic Loading Bar */}
      <motion.div
        className="w-56 h-1.5 mt-8 bg-gray-800 overflow-hidden rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Small footer text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-10 text-xs text-gray-600 tracking-widest"
      >
        © 2025 Ankit Kumar | Powered by React ⚡
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
