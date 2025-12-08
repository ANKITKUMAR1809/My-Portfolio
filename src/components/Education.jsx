import React, { useState } from "react";
import { motion } from "framer-motion";

const Education = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const educationData = [
    { 
      level: "BCA", 
      year: "2019–2023", 
      institution: "K.L.S College, Magadh University",
      description: "Bachelor of Computer Applications – Foundation in programming, algorithms, and software development fundamentals."
    },
    { 
      level: "MCA", 
      year: "2024–2026", 
      institution: "College of Commerce, Patna – Patliputra University",
      description: "Master of Computer Applications – Advanced studies in software engineering, AI, and enterprise systems."
    }
  ];

  return (
    <section 
      id="education" 
      className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-pink-50/10 w-full flex items-center justify-center py-12 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building expertise through structured academic progression
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-between">
          {/* Timeline & Controls */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            {/* Progress Bar */}
            <div className="w-full max-w-xs mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>BCA</span>
                <span>MCA</span>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(currentStep / (educationData.length - 1)) * 100}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>

            {/* Degree Toggles */}
            <div className="flex flex-col w-full max-w-xs gap-3">
              {educationData.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full py-4 px-6 text-left rounded-xl transition-all duration-300 flex items-center gap-4 ${
                    currentStep === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-white/50'
                  }`}
                  whileHover={{ scale: currentStep !== index ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">
                    {index === 0 ? '🎓' : '🚀'}
                  </span>
                  <div>
                    <div className="font-semibold">{_.level}</div>
                    <div className="text-xs opacity-90">{_.year}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <motion.div 
            className="w-full lg:w-2/3"
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-white/40">
              <div className="flex items-start gap-5 mb-6">
                <div className={`p-3 rounded-xl ${
                  currentStep === 0 
                    ? 'bg-gradient-to-r from-blue-100 to-purple-100' 
                    : 'bg-gradient-to-r from-purple-100 to-pink-100'
                }`}>
                  <span className="text-2xl">
                    {currentStep === 0 ? '🎓' : '🚀'}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                    {educationData[currentStep].level}
                  </h2>
                  <p className="text-lg text-gray-700 font-medium mt-1">
                    {educationData[currentStep].year}
                  </p>
                </div>
              </div>

              <p className="text-gray-800 font-medium mb-3">
                {educationData[currentStep].institution}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {educationData[currentStep].description}
              </p>

              {/* Decorative Bottom Accent */}
              <div className="mt-6 pt-4 border-t border-gray-100/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    Step {currentStep + 1} of {educationData.length}
                  </span>
                </div>
                <div className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {Math.round(((currentStep + 1) / educationData.length) * 100)}% Complete
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Blobs (Optional) */}
        <div className="hidden lg:block absolute top-20 left-10 w-24 h-24 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Education;