import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Award, Target, ChevronRight } from "lucide-react";

const Education = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const educationData = [
    { 
      level: "BCA", 
      year: "2019–2023", 
      institution: "K.L.S College, Magadh University",
      description: "Bachelor of Computer Applications – Foundation in programming, algorithms, and software development fundamentals.",
      modules: ["Data Structures", "Web Development", "Database Systems"],
      status: "COMPLETED"
    },
    { 
      level: "MCA", 
      year: "2024–2026", 
      institution: "College of Commerce, Patna – Patliputra University",
      description: "Master of Computer Applications – Advanced studies in software engineering, AI, and enterprise systems.",
      modules: ["Advanced Algorithms", "Cloud Computing", "AI/ML"],
      status: "IN_PROGRESS"
    }
  ];

  return (
    <section id="education" className="py-32 bg-[#0B0B0B] relative overflow-hidden border-b-2 border-[#1A1A1A]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24 border-l-4 border-[#FF5F1F] pl-6 sm:pl-8">
          <div>
            <div className="font-mono text-[10px] text-[#FF5F1F] tracking-[0.3em] mb-3 sm:mb-4 uppercase">[ ACADEMIC_TRACK ]</div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
              EDU_PATH
            </h2>
          </div>
          <p className="max-w-md text-[#888888] font-mono text-xs sm:text-sm uppercase tracking-tight">
            Building the foundation of engineering excellence through rigorous academic progression.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-24">
          {/* Navigation Sidebar */}
          <div className="space-y-6">
            <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase mb-4">SELECT_STATION</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {educationData.map((edu, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`group relative p-4 sm:p-6 border-2 transition-all text-left ${
                    currentStep === index
                      ? 'border-[#FF5F1F] bg-[#0D0D0D]'
                      : 'border-[#1A1A1A] bg-transparent grayscale opacity-50 hover:grayscale-0 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`font-mono text-[10px] mb-1 sm:mb-2 ${currentStep === index ? 'text-[#FF5F1F]' : 'text-[#555]'}`}>
                        STEP_0{index + 1}
                      </div>
                      <div className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase">{edu.level}</div>
                    </div>
                    <ChevronRight size={20} className={currentStep === index ? 'text-[#FF5F1F]' : 'text-[#333]'} />
                  </div>
                  {currentStep === index && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 sm:w-2 h-1/2 bg-[#FF5F1F]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Progress Visualization */}
            <div className="pt-8 sm:pt-12 space-y-3 sm:space-y-4">
              <div className="flex justify-between font-mono text-[10px] text-[#555] uppercase">
                <span>SYSTEM_PROGRESS</span>
                <span>{Math.round(((currentStep + 1) / educationData.length) * 100)}%</span>
              </div>
              <div className="h-1 bg-[#1A1A1A] relative overflow-hidden">
                <motion.div 
                  className="h-full bg-[#FF5F1F]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${((currentStep + 1) / educationData.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Detailed Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#0D0D0D] border-2 border-[#1A1A1A] p-6 sm:p-8 md:p-12 relative overflow-hidden group hover:border-[#FF5F1F]/30 transition-colors"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,#FF5F1F15,transparent)]" />
                
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start mb-8 sm:mb-12">
                  <div className="p-3 sm:p-4 bg-[#0B0B0B] border-2 border-[#1A1A1A] text-[#FF5F1F]">
                    {currentStep === 0 ? <GraduationCap size={28} className="sm:w-8 sm:h-8" /> : <Target size={28} className="sm:w-8 sm:h-8" />}
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
                        {educationData[currentStep].level}
                      </h3>
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#FF5F1F] text-black text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                        {educationData[currentStep].status}
                      </span>
                    </div>
                    <p className="text-[#FF5F1F] font-mono text-base sm:text-lg uppercase tracking-tighter">
                      // {educationData[currentStep].institution}
                    </p>
                    <div className="text-[10px] sm:text-xs text-[#555] font-mono tracking-widest uppercase pt-1 sm:pt-2">
                      PERIOD: {educationData[currentStep].year}
                    </div>
                  </div>
                </div>

                <div className="space-y-8 sm:space-y-12 max-w-4xl">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#555] tracking-widest uppercase">
                      <BookOpen size={14} /> DESCRIPTION_DATA
                    </div>
                    <p className="text-base sm:text-xl text-[#888888] font-light leading-relaxed border-l-2 border-[#1A1A1A] pl-4 sm:pl-8">
                      {educationData[currentStep].description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-[#555] tracking-widest uppercase">
                        <Award size={14} /> CORE_MODULES
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {educationData[currentStep].modules.map((module, i) => (
                          <span key={i} className="px-3 py-1 border border-[#1A1A1A] text-[10px] font-mono text-[#E5E5E5] uppercase bg-[#0B0B0B]">
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industrial Corner Decor */}
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-[#222] uppercase tracking-[0.5em]">
                  SECURE_TRANSMISSION_INITIATED
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
