// src/components/LoadingScreen.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-900 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Container */}
      <div className="text-center space-y-6 sm:space-y-8 max-w-2xl w-full">
        
        {/* Animated Background Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-full blur-xl" />
        </motion.div>

        {/* Glowing Logo Text */}
        <div className="relative">
          <motion.h1
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              filter: "blur(8px)" 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              filter: "blur(0px)" 
            }}
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
              Ankit
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 dark:from-purple-500 dark:via-blue-400 dark:to-cyan-400">
              Kumar
            </span>
          </motion.h1>

          {/* Subtle Glow Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-2xl rounded-full scale-110"
          />
        </div>

        {/* Subtitle with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 1,
            ease: "easeOut"
          }}
          className="space-y-4"
        >
          <motion.p
            className="text-sm xs:text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 tracking-wide uppercase"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Initializing Portfolio System
          </motion.p>

          {/* Dots Animation */}
          <motion.div className="flex justify-center space-x-1">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="w-1 h-1 xs:w-1.5 xs:h-1.5 bg-cyan-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: dot * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Loading Bar */}
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* Background Track */}
          <div className="w-full h-2 sm:h-2.5 bg-slate-200/80 dark:bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Animated Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "reverse"
              }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 100] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 -z-10 bg-cyan-400/20 blur-lg"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Loading...
          </motion.span>
        </motion.div>

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="pt-6 sm:pt-8 border-t border-slate-200/50 dark:border-slate-700/50"
        >
          <p className="text-xs xs:text-sm text-slate-500 dark:text-slate-400 tracking-wide font-light">
            © 2025 Ankit Kumar • Crafted with React ⚡ & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;