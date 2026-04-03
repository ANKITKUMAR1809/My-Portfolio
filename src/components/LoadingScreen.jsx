import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING_CORE_SYSTEMS...");

  const statusMessages = [
    "BOOTING_KERNEL_v1.0.4...",
    "ESTABLISHING_NEURAL_LINK...",
    "LOADING_VISUAL_INTERFACE...",
    "DECRYPTING_PORTFOLIO_DATA...",
    "SYNCING_PROJECT_MODULES...",
    "SYSTEM_STABLE. READY."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 100);

    const statusInterval = setInterval(() => {
      setStatus(statusMessages[Math.floor(Math.random() * (statusMessages.length - 1))]);
    }, 600);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#0B0B0B] flex flex-col items-center justify-center p-6 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Background Scanning Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#333,transparent)]" />
      </div>

      <div className="relative w-full max-w-2xl space-y-12">
        {/* Top Header */}
        <div className="flex justify-between items-end border-b-2 border-[#1A1A1A] pb-4">
          <div className="space-y-1">
            <motion.div
              className="text-[#FF5F1F] font-mono text-xs tracking-widest"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              [ SYSTEM_ACTIVE ]
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
              ANKIT_KUMAR
            </h1>
          </div>
          <div className="text-right font-mono text-xs text-[#888888] space-y-1">
            <div>LC_001.PROTO</div>
            <div className="text-[#FF5F1F]">v.2025.A</div>
          </div>
        </div>

        {/* Status Terminal */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-4 w-1 bg-[#FF5F1F] animate-pulse" />
            <motion.div 
              key={status}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-sm text-[#E5E5E5] tracking-widest"
            >
              {status}
            </motion.div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative h-12 w-full bg-[#1A1A1A] border-2 border-[#222] p-1 overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)]" />
            
            {/* Progress Fill */}
            <motion.div
              className="h-full bg-[#FF5F1F] relative flex items-center justify-end px-4"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] w-1/2 animate-[shimmer_2s_infinite]" />
              
              {progress > 10 && (
                <span className="font-mono text-black font-black text-sm z-10">
                  {progress}%
                </span>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-[#1A1A1A]">
          {[
            { label: "MEMORY", value: "STABLE" },
            { label: "CPU", value: "98.2%" },
            { label: "LINK", value: "ENCRYPTED" },
            { label: "STATUS", value: "0x00A1" }
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="space-y-1"
            >
              <div className="text-[10px] text-[#555] font-mono tracking-widest">{item.label}</div>
              <div className="text-xs text-[#E5E5E5] font-mono font-bold">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Static Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100" />
    </motion.div>
  );
};

export default LoadingScreen;
