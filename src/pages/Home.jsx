import React, { useState, useEffect } from "react";
import me from "../assets/me.jpg";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import Github from "../assets/github-dark.svg";
import Linkedin from "../assets/linkedin-dark.svg";
import Twitter from "../assets/twitter-dark.svg";
import Yt from "../assets/yt-dark.svg";
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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleDownloadCV = () => {
    // Add your CV download logic here
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf";
    link.download = "Ankit_Kumar_CV.pdf";
    link.click();
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
            : "py-4 sm:py-6 bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div
                className={`rounded-full overflow-hidden border-2 border-white shadow-lg transition-all duration-300 ${
                  isScrolled
                    ? "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                    : "h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
                }`}
              >
                <img
                  src={me}
                  alt="Ankit Kumar Profile Photo"
                  className="w-full h-full object-contain scale-110"
                />
              </div>
              <div className="hidden sm:block">
                <h1
                  className={`font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                    isScrolled
                      ? "text-lg sm:text-xl md:text-xl"
                      : "text-xl sm:text-2xl md:text-2xl"
                  }`}
                >
                  ANKIT KUMAR
                </h1>
                <p
                  className={`text-gray-500 transition-all duration-300 text-xs sm:text-sm ${
                    isScrolled ? "hidden" : "block"
                  }`}
                >
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-gray-700">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="relative group hover:text-purple-600 transition-all duration-300 capitalize py-2 text-sm xl:text-base"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-purple-50 transition-colors duration-300"
                aria-label="Open menu"
              >
                <Menu
                  size={20}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-xs bg-white/95 backdrop-blur-lg text-gray-800 lg:hidden transition-transform duration-300 ease-in-out z-50 shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X
                size={20}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1 p-4 sm:p-6 flex-1">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleNavClick}
                className="text-lg font-medium py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 capitalize border border-transparent hover:border-purple-100"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="p-4 sm:p-6 border-t border-gray-100">
            <div className="flex justify-center gap-4 sm:gap-6">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ankitkumar02",
                  alt: "linkedin",
                },
                {
                  icon: Github,
                  href: "https://github.com/ANKITKUMAR1809",
                  alt: "github",
                },
                {
                  icon: Yt,
                  href: "https://www.youtube.com/@XCodeSyt",
                  alt: "youtube",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/AKtheProgrammer",
                  alt: "twitter",
                },
              ].map((social) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-50 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-around pt-24 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/20"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-200/40 to-pink-200/30 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-20 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-2xl sm:blur-3xl"></div>

        {/* Social Media Sidebar */}
        <div className="fixed left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center">
          <div className="bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 py-3 sm:py-4 space-y-1 sm:space-y-2">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/ankitkumar02",
                alt: "linkedin",
              },
              {
                icon: Github,
                href: "https://github.com/ANKITKUMAR1809",
                alt: "github",
              },
              {
                icon: Yt,
                href: "https://www.youtube.com/@XCodeSyt",
                alt: "youtube",
              },
              {
                icon: Twitter,
                href: "https://x.com/AKtheProgrammer",
                alt: "twitter",
              },
            ].map((social, index) => (
              <div
                key={social.alt}
                className="px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    width={20}
                    height={20}
                    className="group-hover:scale-110 transition-transform duration-300 group-hover:filter group-hover:brightness-125"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-left space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 shadow-lg border border-gray-100">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Available for new projects
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Hey, I'm
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ANKIT KUMAR
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
                  A{" "}
                  <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Result-Oriented Web Developer
                  </span>{" "}
                  crafting exceptional digital experiences that drive product
                  success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 sm:px-8 font-semibold hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base"
                >
                  <Download size={18} className="sm:w-5 sm:h-5" />
                  Download CV
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <a
                  href="#projects"
                  className="group border-2 border-gray-200 text-gray-700 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 sm:px-8 font-semibold hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  View My Work
                  <ChevronDown
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:animate-bounce"
                  />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-cyan-400/10 rounded-2xl sm:rounded-3xl transform rotate-3 sm:rotate-6 blur-sm"></div>
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-cyan-200/20 rounded-2xl sm:rounded-3xl transform -rotate-2 sm:-rotate-3 blur-sm"></div>

                {/* Main image container */}
                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden">
                  <img
                    src={me}
                    alt="Ankit Kumar - Full Stack Developer"
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] object-scale-down"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 p-3 sm:p-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">
                      1+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Years Exp
                    </div>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-100 p-3 sm:p-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-pink-600">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="animate-bounce inline-block">
            <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-gray-300 rounded-full flex justify-center hover:border-purple-400 transition-colors">
              <div className="w-1 h-2 sm:h-3 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"></div>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 lg:py-20 xl:py-24 bg-white">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6">
              About Me
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-purple-100">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">
                      Frontend
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      React, Next.js, Tailwind
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-blue-100">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                      Backend
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      Node.js, Express, MongoDB
                    </div>
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-6 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-green-100">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                      Tools
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      Git, Docker, AWS
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
                Crafting Digital Excellence
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern
                web technologies. I specialize in creating responsive,
                performant, and user-friendly applications that deliver
                exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With a strong foundation in both frontend and backend
                development, I bring ideas to life through clean code,
                innovative solutions, and attention to detail.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 pt-4 sm:pt-5 md:pt-6">
                <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                    100%
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-600">
                    24/7
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    Support Ready
                  </div>
                </div>
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
      <Footer/>
    </>
  );
};

export default Home;
