import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft, Terminal, Layout, Database, Box } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentProject, setCurrentProject] = useState(0);

  const projectsData = [
    {
      id: 1,
      title: "PRIME_WATCH",
      type: "E_COMM_STATION",
      description: "Premium watch store with WhatsApp ordering, admin dashboard, and product catalog.",
      longDescription: "A complete e-commerce system for premium watches featuring integrated product catalog, WhatsApp-based ordering, and a powerful admin dashboard. Optimized for scalable performance and high-load traffic.",
      image: "⌚",
      technologies: ["MERN", "Cloudinary", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl: "primewatch.in",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "IMS_MODULE",
      type: "INVENTORY_SYNC",
      description: "Full-stock and sales tracking system with real-time validation and role-based access.",
      longDescription: "A full-stack inventory management system featuring role-based admin access, CRUD operations, product tracking, and real-time low-stock alerts. Built for industrial efficiency.",
      image: "📦",
      technologies: ["MERN", "JWT", "Express", "MongoDB"],
      category: "fullstack",
      liveUrl: "ims.ankitkumar.fun",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "KIEC_CORE",
      type: "FRONT_VISUALIZER",
      description: "A modern, fast, and fully responsive frontend website built with clean UI.",
      longDescription: "KIEC is a high-performance frontend visualizer designed with optimized rendering, clean layout, and fluid user interactions. Follows strict architectural standards.",
      image: "🌐",
      technologies: ["React", "Tailwind", "JS"],
      category: "frontend",
      liveUrl: "https://kiec.ankitkumar.fun",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  return (
    <section id="projects" className="py-32 bg-[#0B0B0B] relative overflow-hidden border-b-2 border-[#1A1A1A]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24 border-l-4 border-[#FF5F1F] pl-6 sm:pl-8">
          <div>
            <div className="font-mono text-[10px] text-[#FF5F1F] tracking-[0.3em] mb-3 sm:mb-4 uppercase">[ PROJECT_RESOURCES ]</div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
              PROJ_DEP
            </h2>
          </div>
          <p className="max-w-md text-[#888888] font-mono text-xs sm:text-sm uppercase tracking-tight">
            Industrial deployment logs of scalable digital architecture and high-performance modules.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-12 sm:mb-16">
          {["all", "frontend", "fullstack"].map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setCurrentProject(0); }}
              className={`flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 border-2 font-mono text-[10px] sm:text-xs tracking-widest uppercase transition-all ${
                activeFilter === filter 
                  ? "border-[#FF5F1F] bg-[#FF5F1F] text-black font-black" 
                  : "border-[#1A1A1A] text-[#555] hover:text-white hover:border-[#333]"
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Hero Project Carousel */}
        <div className="relative mb-24 sm:mb-32 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredProjects[currentProject]?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr] border-4 border-[#1A1A1A] bg-[#0D0D0D] overflow-hidden hover:border-[#FF5F1F] transition-colors"
            >
              {/* Image / Icon Visualization */}
              <div className="relative h-[250px] sm:h-[400px] lg:h-[600px] bg-[#0B0B0B] flex items-center justify-center overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#1A1A1A] group-hover:border-[#FF5F1F] transition-colors">
                <div className="text-[100px] sm:text-[150px] md:text-[250px] opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  {filteredProjects[currentProject]?.image}
                </div>
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 font-mono text-[8px] sm:text-[10px] text-[#FF5F1F] tracking-widest uppercase bg-black/80 px-2 sm:px-4 py-1 sm:py-2">
                  REF_ID: PROJ_00{filteredProjects[currentProject]?.id}
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 font-mono text-[8px] sm:text-[10px] text-[#FF5F1F] tracking-widest uppercase bg-black/80 px-2 sm:px-4 py-1 sm:py-2 border border-[#FF5F1F]/20">
                  STATUS: DEPLOYED_STABLE
                </div>
              </div>

              {/* Project Metadata */}
              <div className="p-6 sm:p-10 md:p-12 space-y-8 sm:space-y-12">
                <div className="space-y-2 sm:space-y-4">
                  <div className="text-[#FF5F1F] font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase">
                    // {filteredProjects[currentProject]?.type}
                  </div>
                  <h3 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
                    {filteredProjects[currentProject]?.title}
                  </h3>
                </div>

                <p className="text-[#E5E5E5] text-base sm:text-xl font-light leading-relaxed opacity-70 border-l-2 sm:border-l-4 border-[#FF5F1F] pl-4 sm:pl-8">
                  {filteredProjects[currentProject]?.longDescription}
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase">MODULE_STACK</div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {filteredProjects[currentProject]?.technologies.map(tech => (
                      <span key={tech} className="px-2 sm:px-4 py-1 sm:py-2 border-2 border-[#1A1A1A] font-mono text-[10px] sm:text-xs text-[#888888] uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-8">
                  <a href={filteredProjects[currentProject]?.liveUrl} className="flex-1 p-4 sm:p-6 bg-[#FF5F1F] text-black font-black uppercase tracking-[0.2em] text-xs sm:text-sm text-center hover:scale-105 transition-transform">
                    INITIATE_LIVE
                  </a>
                  <a href={filteredProjects[currentProject]?.githubUrl} className="p-4 sm:p-6 border-4 border-[#1A1A1A] hover:border-[#FF5F1F] transition-colors text-white flex justify-center items-center">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="absolute -bottom-6 sm:-bottom-8 right-0 flex gap-2 sm:gap-4">
            <button onClick={prevProject} className="p-4 sm:p-6 bg-[#0B0B0B] border-2 border-[#1A1A1A] hover:border-[#FF5F1F] text-white transition-all">
              <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button onClick={nextProject} className="p-4 sm:p-6 bg-[#0B0B0B] border-2 border-[#1A1A1A] hover:border-[#FF5F1F] text-white transition-all">
              <ArrowRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Project Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {[
            { label: "MODULES_DEPLOYED", value: "12+" },
            { label: "SYSTEM_UPTIME", value: "99.9%" },
            { label: "CORE_TECHS", value: "08" },
            { label: "CLIENT_SUCCESS", value: "100%" }
          ].map((stat, i) => (
            <div key={i} className="p-4 sm:p-8 border-2 border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#FF5F1F]/30 transition-colors text-center sm:text-left">
              <div className="font-mono text-[8px] sm:text-[10px] text-[#555] tracking-widest uppercase mb-2 sm:mb-4">{stat.label}</div>
              <div className="text-2xl sm:text-4xl font-black text-white">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
