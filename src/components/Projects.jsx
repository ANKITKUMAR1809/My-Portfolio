import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentProject, setCurrentProject] = useState(0);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projectsData = [
    {
      id: 1,
      title: "Prime Watch – E-commerce Platform",
      description:
        "Premium watch store with WhatsApp ordering, admin dashboard, and product catalog.",
      longDescription:
        "A complete e-commerce system for premium watches featuring integrated product catalog, WhatsApp-based ordering, and a powerful admin dashboard to manage products (add/edit/delete). Includes server-side filtering, lazy-loaded routes, and optimized navigation for scalable performance.",
      image: "⌚",
      technologies: [
        "MERN",
        "Cloudinary",
        "React Router",
        "Framer Motion",
        "Express",
        "MongoDB",
      ],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },

    {
      id: 2,
      title: "IMS – Inventory Management System",
      description:
        "Full-stock and sales tracking system with real-time validation and role-based access.",
      longDescription:
        "A full-stack inventory management system featuring role-based admin access, CRUD operations, product tracking, sales logging, and real-time low-stock alerts. Includes optimized database structure and real-time validations with secure dashboards.",
      image: "📦",
      technologies: ["MERN", "GitHub", "Express", "MongoDB", "JWT"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },

    {
      id: 3,
      title: "Maa Foundation – NGO Website",
      description:
        "Donation platform supporting women's initiatives with a simple lightweight backend.",
      longDescription:
        "A fast and modern NGO donation platform built using the MERN stack. Collects donor data securely without login, includes optimized forms, lightweight backend, and responsive design to support women's empowerment initiatives.",
      image: "🌍",
      technologies: ["MERN", "React", "Node.js", "MongoDB"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },

    {
      id: 4,
      title: "AS Mall – E-commerce UI/UX",
      description:
        "Clean and modern UI for an e-commerce store with cart management.",
      longDescription:
        "A beautifully designed e-commerce UI with auto-remove cart items when quantity becomes zero, improved user experience flows, product listing, and responsive layouts. Built with React and FakeStore API for structured data rendering.",
      image: "🛍️",
      technologies: ["React", "FakeStore API", "Tailwind CSS"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", name: "All Projects", count: projectsData.length },
    {
      id: "frontend",
      name: "Frontend",
      count: projectsData.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      count: projectsData.filter((p) => p.category === "backend").length,
    },
    {
      id: "fullstack",
      name: "Full Stack",
      count: projectsData.filter((p) => p.category === "fullstack").length,
    },
  ];
  // Update filtered projects when activeFilter changes
  useEffect(() => {
    const newFilteredProjects =
      activeFilter === "all"
        ? projectsData
        : projectsData.filter((project) => project.category === activeFilter);

    setFilteredProjects(newFilteredProjects);
    setCurrentProject(0); // Reset to first project when filter changes
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-pink-50/10 w-full flex items-center justify-center py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 md:mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey through code - from innovative ideas to fully
            functional applications
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 group ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                  : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105 border border-gray-100"
              }`}
            >
              <span>{filter.name}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {filter.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          key={`carousel-${activeFilter}`} // Add key to force re-render
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
                {activeFilter === "all"
                  ? "Featured Project"
                  : `${
                      activeFilter.charAt(0).toUpperCase() +
                      activeFilter.slice(1)
                    } Projects`}
              </h2>
              {filteredProjects.length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    className="p-3 rounded-2xl bg-white border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 group"
                  >
                    <ArrowLeft
                      size={20}
                      className="text-gray-600 group-hover:text-purple-600"
                    />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-3 rounded-2xl bg-white border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 group"
                  >
                    <ArrowRight
                      size={20}
                      className="text-gray-600 group-hover:text-purple-600"
                    />
                  </button>
                </div>
              )}
            </div>

            {filteredProjects.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeFilter}-${currentProject}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Project Image/Icon */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center text-6xl md:text-8xl shadow-2xl border border-white/50">
                        {filteredProjects[currentProject]?.image}
                      </div>
                      {filteredProjects[currentProject]?.featured && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                          Featured
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-2">
                        {filteredProjects[currentProject]?.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {filteredProjects[currentProject]?.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[currentProject]?.technologies.map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-2xl text-sm font-medium border border-purple-100 shadow-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={filteredProjects[currentProject]?.liveUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={filteredProjects[currentProject]?.githubUrl}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-500">
                  There are no projects in this category yet.
                </p>
              </div>
            )}

            {/* Carousel Indicators */}
            {filteredProjects.length > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProject(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProject
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          key={`grid-${activeFilter}`} // Add key to force re-render
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
            {activeFilter === "all"
              ? "All Projects"
              : `${
                  activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)
                } Projects`}
          </h2>

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-white/50">
                      {project.image}
                    </div>
                    {project.featured && (
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-xs font-medium border border-purple-100"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 pt-2">
                      <a
                        href={project.liveUrl}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white/50 rounded-3xl border border-white/30">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                No Projects Available
              </h3>
              <p className="text-gray-500">
                Check back soon for new projects in this category!
              </p>
            </div>
          )}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/30 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {projectsData.length}+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/30 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {projectsData.filter((p) => p.featured).length}
            </div>
            <div className="text-gray-600 font-medium">Featured Projects</div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/30 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {
                Array.from(new Set(projectsData.flatMap((p) => p.technologies)))
                  .length
              }
              +
            </div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>

          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/30 shadow-lg">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute top-40 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200/15 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Projects;
