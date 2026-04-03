import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Box, Layout, Database, Settings, ChevronRight } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsData = {
    frontend: [
      { name: "React / Next.js", level: 85, icon: <Layout size={18} /> },
      { name: "TypeScript / JS", level: 90, icon: <Settings size={18} /> },
      { name: "Tailwind CSS", level: 95, icon: <Box size={18} /> },
      { name: "Framer Motion", level: 80, icon: <Settings size={18} /> },
    ],
    backend: [
      { name: "Node.js / Express", level: 85, icon: <Cpu size={18} /> },
      { name: "MongoDB / SQL", level: 80, icon: <Database size={18} /> },
      { name: "REST / GraphQL", level: 90, icon: <Settings size={18} /> },
      { name: "Python", level: 70, icon: <Terminal size={18} /> },
    ],
    tools: [
      { name: "Git / GitHub", level: 95, icon: <Settings size={18} /> },
      { name: "Docker / AWS", level: 60, icon: <Box size={18} /> },
      { name: "VS Code / Linux", level: 90, icon: <Terminal size={18} /> },
      { name: "Postman / CI-CD", level: 75, icon: <Settings size={18} /> },
    ],
  };

  const categories = [
    { id: "frontend", name: "FRONT_END", icon: <Layout size={20} /> },
    { id: "backend", name: "BACK_END", icon: <Database size={20} /> },
    { id: "tools", name: "CORE_TOOLS", icon: <Settings size={20} /> },
  ];

  return (
    <section id="skills" className="py-32 bg-[#0B0B0B] relative overflow-hidden border-b-2 border-[#1A1A1A]">
      {/* Background Matrix Effect (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-mono text-[10px] text-[#FF5F1F] leading-none select-none break-all">
        {Array(50).fill(0).map((_, i) => (
          <div key={i} className="whitespace-nowrap translate-x-[-10%] animate-[shimmer_20s_infinite_linear]">
            INITIALIZING_SKILL_MATRIX_v2.0_LOAD_SEQUENCE_0x00FF_REACTIVE_CORE_STABLE_
          </div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24 border-l-4 border-[#FF5F1F] pl-6 sm:pl-8">
          <div>
            <div className="font-mono text-[10px] text-[#FF5F1F] tracking-[0.3em] mb-3 sm:mb-4 uppercase">[ CAPABILITY_MATRIX ]</div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
              TECH_ARSENAL
            </h2>
          </div>
          <p className="max-w-md text-[#888888] font-mono text-xs sm:text-sm uppercase tracking-tight">
            High-performance technical modules maintained at peak operational capacity.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[0.4fr_1fr] gap-12 lg:gap-24">
          {/* Category Selector */}
          <div className="space-y-6">
            <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase mb-4">ACCESS_DOMAIN</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative p-6 sm:p-8 border-2 transition-all text-left overflow-hidden ${
                    activeCategory === cat.id
                      ? 'border-[#FF5F1F] bg-[#0D0D0D]'
                      : 'border-[#1A1A1A] bg-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-center gap-2 sm:gap-4">
                      <div className={activeCategory === cat.id ? 'text-[#FF5F1F]' : 'text-[#888888]'}>
                        {cat.icon}
                      </div>
                      <span className="text-sm sm:text-xl lg:text-2xl font-black tracking-tighter text-white uppercase text-center sm:text-left">{cat.name}</span>
                    </div>
                    <ChevronRight size={20} className={`hidden sm:block ${activeCategory === cat.id ? 'text-[#FF5F1F]' : 'text-[#333]'}`} />
                  </div>
                  {activeCategory === cat.id && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute inset-0 bg-[#FF5F1F]/5 pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Performance Stat */}
            <div className="pt-8 sm:pt-12 p-6 sm:p-8 border-2 border-[#1A1A1A] bg-[#0B0B0B] group">
              <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase mb-4 sm:mb-6">OVERALL_EFFICIENCY</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase">
                  {Math.round(
                    skillsData[activeCategory].reduce((acc, s) => acc + s.level, 0) / 
                    skillsData[activeCategory].length
                  )}
                </span>
                <span className="text-[#FF5F1F] font-mono font-black text-xl sm:text-2xl">%</span>
              </div>
              <div className="mt-4 h-1 w-full bg-[#1A1A1A]">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  className="h-full bg-[#FF5F1F]"
                />
              </div>
            </div>
          </div>

          {/* Skills Visualization */}
          <div className="relative min-h-[400px] sm:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              >
                {skillsData[activeCategory].map((skill, i) => (
                  <div 
                    key={skill.name}
                    className="p-6 sm:p-8 border-2 border-[#1A1A1A] bg-[#0D0D0D] group hover:border-[#FF5F1F] transition-all relative overflow-hidden"
                  >
                    {/* Background Index */}
                    <div className="absolute top-2 right-4 font-mono text-[10px] text-[#1A1A1A] group-hover:text-[#FF5F1F]/20 transition-colors">
                      MODULE_0{i+1}
                    </div>

                    <div className="flex items-center gap-4 mb-8 sm:mb-10">
                      <div className="p-2 sm:p-3 bg-[#0B0B0B] border-2 border-[#1A1A1A] group-hover:border-[#FF5F1F] text-[#FF5F1F] transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase">
                        {skill.name}
                      </h3>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-end font-mono text-[10px] tracking-widest uppercase">
                        <span className="text-[#555] group-hover:text-[#888888]">MASTERY_LEVEL</span>
                        <span className="text-white group-hover:text-[#FF5F1F]">{skill.level}%</span>
                      </div>
                      
                      {/* Industrial Progress Bar */}
                      <div className="h-4 bg-[#0B0B0B] border-2 border-[#1A1A1A] p-1 flex gap-0.5 sm:gap-1 group-hover:border-[#FF5F1F]/30">
                        {Array(20).fill(0).map((_, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: idx < (skill.level / 5) ? 1 : 0.1 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`flex-1 h-full ${idx < (skill.level / 5) ? 'bg-[#FF5F1F]' : 'bg-[#1A1A1A]'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Industrial Texture */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 opacity-5 group-hover:opacity-20 transition-opacity bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#FF5F1F_4px,#FF5F1F_8px)]" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Terminal Overlay Decor */}
            <div className="absolute -bottom-10 left-0 right-0 font-mono text-[10px] text-[#1A1A1A] uppercase tracking-[0.5em] flex justify-between">
              <span>SCANNING_MODULES_COMPLETE</span>
              <span>PARSING_SUCCESSFUL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
