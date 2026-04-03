import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Users,
  Code,
  Terminal
} from "lucide-react";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "3KAryan Infotech",
      duration: "June 2025 – August 2025",
      location: "Patna, India",
      description: "Developed responsive, SEO-optimized websites and delivered high-quality client projects using the MERN stack.",
      achievements: [
        "Delivered complete websites including 3karyaninfotech.co.in and sanikabag.com",
        "Achieved 90%+ client satisfaction for design quality and timely delivery",
        "Reduced page load speed by up to 50% through optimization",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      status: "COMPLETED"
    },
    {
      id: 2,
      title: "React Developer Intern",
      company: "Next24Tech",
      duration: "May 2024 – July 2024",
      location: "Remote",
      description: "Built and optimized responsive React applications, ensuring fast performance and clean UI.",
      achievements: [
        "Achieved 90% performance ratings for website development",
        "Improved loading speed by 100% through UI and code optimization",
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      status: "ARCHIVED"
    },
    {
      id: 3,
      title: "MERN Stack Developer Intern",
      company: "John Raicker",
      duration: "April 2024 – June 2024",
      location: "Remote",
      description: "Worked on real-time MERN applications, improving backend authentication and overall performance.",
      achievements: [
        "Earned 95% ratings for MERN development quality",
        "Improved backend authentication performance by 100%",
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      status: "ARCHIVED"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-[#0B0B0B] relative overflow-hidden border-b-2 border-[#1A1A1A]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-20 border-l-4 border-[#FF5F1F] pl-6 sm:pl-8">
          <div>
            <div className="font-mono text-[10px] text-[#FF5F1F] tracking-[0.3em] mb-3 sm:mb-4 uppercase">[ MISSION_HISTORY ]</div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
              EXP_LOG
            </h2>
          </div>
          <p className="max-w-md text-[#888888] font-mono text-xs sm:text-sm uppercase tracking-tight">
            Sequential deployment history of full-stack modules and industrial-grade software engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:grid lg:grid-cols-[0.3fr_1fr] border-2 border-[#1A1A1A] hover:border-[#FF5F1F] transition-colors bg-[#0D0D0D]"
            >
              {/* Sidebar Info */}
              <div className="p-6 sm:p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-[#1A1A1A] group-hover:border-[#FF5F1F] transition-colors bg-[#0B0B0B]">
                <div className="font-mono text-[10px] text-[#555] mb-4 sm:mb-6 tracking-widest uppercase">ID_00{exp.id}</div>
                <div className="text-[#FF5F1F] font-black text-lg sm:text-xl mb-1 sm:mb-2 uppercase tracking-tighter">{exp.status}</div>
                <div className="text-[10px] sm:text-xs text-[#888888] font-mono mb-6 sm:mb-8">{exp.duration}</div>
                <div className="flex items-center gap-2 text-[#E5E5E5] font-mono text-[10px] tracking-widest uppercase opacity-60">
                  <MapPin size={12} className="text-[#FF5F1F]" /> {exp.location}
                </div>
              </div>

              {/* Main Content */}
              <div className="p-6 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase mb-1 sm:mb-2 group-hover:text-[#FF5F1F] transition-colors">
                      {exp.title}
                    </h3>
                    <div className="font-mono text-base sm:text-lg text-[#888888] uppercase tracking-tighter">
                      // {exp.company}
                    </div>
                  </div>
                  <button className="w-full sm:w-auto p-3 sm:p-4 border-2 border-[#1A1A1A] group-hover:border-[#FF5F1F] text-[#FF5F1F] hover:bg-[#FF5F1F] hover:text-black transition-all font-mono text-[10px] tracking-widest uppercase">
                    DOC_DETAILS
                  </button>
                </div>

                <p className="text-[#E5E5E5] text-base sm:text-lg font-light leading-relaxed max-w-4xl opacity-80">
                  {exp.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#FF5F1F] tracking-widest uppercase">
                      <Award size={14} /> KEY_OBJECTIVES
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex gap-3 sm:gap-4 text-[10px] sm:text-sm text-[#888888] font-mono leading-tight">
                          <span className="text-[#FF5F1F]">0{i+1}</span>
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-[#FF5F1F] tracking-widest uppercase">
                      <Terminal size={14} /> TECH_STACK
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 sm:px-3 py-1 border border-[#1A1A1A] group-hover:border-[#FF5F1F]/30 text-[9px] sm:text-[10px] font-mono text-[#555] group-hover:text-[#E5E5E5] transition-colors uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#FF5F1F] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* CTA - Monolith Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 border-4 border-[#FF5F1F] bg-[#0D0D0D] relative group overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
                INITIATE_COLLABORATION
              </h3>
              <p className="font-mono text-[#888888] text-sm tracking-tight uppercase">
                Systems stable. Connectivity protocols active. Ready for high-impact software deployment.
              </p>
            </div>
            <a
              href="#contact"
              className="px-12 py-6 bg-[#FF5F1F] text-black font-black uppercase tracking-[0.2em] text-sm hover:scale-105 transition-transform"
            >
              TRANSMIT_REQUEST
            </a>
          </div>
          {/* Background Texture for CTA */}
          <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#FF5F1F_20px,#FF5F1F_40px)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
