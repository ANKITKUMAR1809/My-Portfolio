import React, { useState, useEffect } from "react";
import me from "../assets/me.jpg";
import { Menu, X, Download, ChevronDown, Terminal, Cpu, Layers, Globe, Shield } from "lucide-react";
import Github from "../assets/github-dark.svg";
import Linkedin from "../assets/linkedin-dark.svg";
import Twitter from "../assets/twitter-dark.svg";
import Yt from "../assets/yt-dark.svg";
import { motion, AnimatePresence } from "framer-motion";
import Education from "../components/Education.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf";
    link.download = "Ankit_Kumar_CV.pdf";
    link.click();
  };

  return (
    <div className="bg-[#0B0B0B] text-[#E5E5E5] selection:bg-[#FF5F1F] selection:text-black min-h-screen">
      {/* Fixed Navbar - Monolith Style */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-2 ${
          isScrolled
            ? "py-4 bg-[#0B0B0B]/90 backdrop-blur-md border-[#FF5F1F]"
            : "py-6 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#FF5F1F] opacity-20 group-hover:opacity-100 transition-opacity blur-[2px]" />
              <div className="relative h-12 w-12 border-2 border-[#FF5F1F] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={me} alt="AK" className="h-full w-full object-cover scale-110" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tighter text-white">ANKIT_KUMAR</h1>
              <div className="text-[10px] font-mono text-[#FF5F1F] tracking-widest animate-pulse">[ SYSTEM_OPERATOR ]</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 font-mono text-xs tracking-[0.2em]">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative group hover:text-[#FF5F1F] transition-colors uppercase"
              >
                <span className="text-[#FF5F1F] mr-2 opacity-50">0{["home", "about", "skills", "projects", "contact"].indexOf(item) + 1}</span>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF5F1F] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 border-2 border-[#1A1A1A] hover:border-[#FF5F1F] transition-colors"
          >
            <Menu size={20} className="text-[#FF5F1F]" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Monolith Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0B0B0B] border-l-4 border-[#FF5F1F] z-[70] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="font-mono text-xs tracking-widest text-[#FF5F1F]">[ MENU_SYSTEM ]</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 border-2 border-[#1A1A1A] hover:border-[#FF5F1F]">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                {["home", "about", "skills", "projects", "contact"].map((item, i) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={handleNavClick}
                    className="text-4xl font-black tracking-tighter hover:text-[#FF5F1F] transition-all group flex items-baseline gap-4"
                  >
                    <span className="text-sm font-mono text-[#FF5F1F] opacity-50">0{i + 1}</span>
                    <span className="uppercase">{item}</span>
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section - Monolith Reveal */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Grid & Noise */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#1A1A1A,transparent)]" />
        </div>

        {/* Floating Social Control Bar */}
        <div className="fixed left-10 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-8">
          <div className="w-[2px] h-20 bg-gradient-to-b from-transparent to-[#FF5F1F]" />
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/ankitkumar02" },
            { icon: Github, href: "https://github.com/ANKITKUMAR1809" },
            { icon: Yt, href: "https://www.youtube.com/@XCodeSyt" },
            { icon: Twitter, href: "https://x.com/AKtheProgrammer" },
          ].map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-2 border-[#1A1A1A] hover:border-[#FF5F1F] hover:-translate-y-1 transition-all group bg-[#0B0B0B]"
            >
              <img src={social.icon} alt="social" className="w-5 h-5 invert group-hover:brightness-125" />
            </a>
          ))}
          <div className="w-[2px] h-20 bg-gradient-to-t from-transparent to-[#FF5F1F]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 border-2 border-[#1A1A1A] px-4 py-2 font-mono text-[10px] tracking-widest uppercase bg-[#0B0B0B]"
              >
                <span className="w-2 h-2 bg-[#FF5F1F] animate-pulse rounded-none" />
                SYSTEM_STATUS: ONLINE_READY_FOR_ENGAGEMENT
              </motion.div>

              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl xs:text-6xl sm:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.8] uppercase text-white"
                >
                  ANKIT<br />
                  <span className="text-transparent border-t-2 sm:border-t-4 border-[#FF5F1F] pt-2 sm:pt-4 -mt-1 sm:-mt-2 inline-block stroke-[#FF5F1F] [-webkit-text-stroke:1px_#FF5F1F] sm:[-webkit-text-stroke:2px_#FF5F1F]">KUMAR</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-2xl text-[#888888] font-mono tracking-tight max-w-xl border-l-4 border-[#FF5F1F] pl-4 sm:pl-6 py-2"
                >
                  FULL_STACK_ARCHITECT // CRAFTING DIGITAL ECOSYSTEMS THAT SCALE
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <button
                  onClick={handleDownloadCV}
                  className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-[#FF5F1F] text-black font-black uppercase tracking-widest text-xs sm:text-sm hover:translate-x-2 transition-transform duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Download size={18} /> DOWNLOAD_CORE_CV
                  </span>
                  <div className="absolute top-1 left-1 w-full h-full border-2 border-white -z-10 group-hover:top-0 group-hover:left-0 transition-all" />
                </button>

                <a
                  href="#projects"
                  className="group px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#1A1A1A] hover:border-[#FF5F1F] font-black uppercase tracking-widest text-xs sm:text-sm transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  INITIATE_PROJECT_VIEW <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Profile Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square max-w-[500px] mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 border-4 border-[#1A1A1A] rotate-3 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border-4 border-[#FF5F1F]/20 -rotate-3 -translate-x-4 -translate-y-4" />
              <div className="relative h-full w-full border-4 border-[#FF5F1F] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 group">
                <img
                  src={me}
                  alt="Ankit Kumar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* HUD Overlay */}
                <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
                <div className="absolute top-6 left-6 font-mono text-[10px] text-[#FF5F1F] bg-black/80 px-2 py-1">SUBJECT_AK_01</div>
                <div className="absolute bottom-6 right-6 font-mono text-[10px] text-[#FF5F1F] bg-black/80 px-2 py-1 tracking-tighter">DATA_ENCRYPTION_ACTIVE</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Monolithic Blocks */}
      <section id="about" className="py-32 bg-[#0B0B0B] border-y-2 border-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-6xl font-black tracking-tighter uppercase leading-[0.8] text-white">
                CORE_<br />ENTITY
              </h2>
              <div className="h-2 w-32 bg-[#FF5F1F]" />
              <p className="font-mono text-sm text-[#888888] tracking-widest uppercase">
                Ankit Kumar // Full Stack Specialist
              </p>
            </div>

            <div className="lg:w-2/3 space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: Terminal, title: "FRONTEND", tech: "React, Next.js, Tailwind" },
                  { icon: Cpu, title: "BACKEND", tech: "Node.js, Express, MongoDB" },
                  { icon: Layers, title: "ARCHITECTURE", tech: "Microservices, REST, GraphQL" },
                  { icon: Shield, title: "DEV_OPS", tech: "Docker, AWS, Git" }
                ].map((item) => (
                  <div key={item.title} className="p-8 border-2 border-[#1A1A1A] hover:border-[#FF5F1F] transition-colors group bg-[#0D0D0D]">
                    <item.icon className="text-[#FF5F1F] mb-6 w-10 h-10 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-black tracking-tight mb-2 text-white">{item.title}</h3>
                    <p className="font-mono text-xs text-[#888888] uppercase">{item.tech}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-[#E5E5E5] text-lg leading-relaxed font-light">
                <p className="border-l-4 border-[#FF5F1F] pl-8">
                  I architect robust digital environments that prioritize performance, security, and scalability. My approach combines industrial-grade code with cutting-edge user experience design.
                </p>
                <p className="opacity-60 pl-8">
                  With over a year of specialized experience in high-load applications, I translate complex requirements into elegant, modular solutions that drive measurable success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
