import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Users,
  Code,
} from "lucide-react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const experienceData = {
    professional: [
      {
        id: 1,
        title: "Full Stack Developer",
        company: "3KAryan Infotech",
        type: "Full-time",
        duration: "June 2025 – August 2025",
        location: "Patna, India",
        description:
          "Developed responsive, SEO-optimized websites and delivered high-quality client projects using the MERN stack.",
        achievements: [
          "Delivered complete websites including 3karyaninfotech.co.in and sanikabag.com",
          "Achieved 90%+ client satisfaction for design quality and timely delivery",
          "Reduced page load speed by up to 50% through optimization",
          "Implemented best practices in React, Tailwind, Node.js, Express, and MongoDB",
          "Ensured scalable architecture and smooth production deployment",
        ],
        technologies: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "Tailwind CSS",
          "Framer Motion",
        ],
        icon: "🚀",
        color: "from-purple-500 to-pink-500",
      },

      {
        id: 2,
        title: "React Developer Intern",
        company: "Next24Tech",
        type: "Internship",
        duration: "May 2024 – July 2024",
        location: "Remote",
        description:
          "Built and optimized responsive React applications, ensuring fast performance and clean UI.",
        achievements: [
          "Achieved 90% performance ratings for website development",
          "Improved loading speed by 100% through UI and code optimization",
          "Developed reusable React components for scalable applications",
        ],
        technologies: ["React", "JavaScript", "Tailwind CSS"],
        icon: "💻",
        color: "from-blue-500 to-cyan-500",
      },

      {
        id: 3,
        title: "MERN Stack Developer Intern",
        company: "John Raicker",
        type: "Internship",
        duration: "April 2024 – June 2024",
        location: "Remote",
        description:
          "Worked on real-time MERN applications, improving backend authentication and overall performance.",
        achievements: [
          "Earned 95% ratings for MERN development quality",
          "Improved backend authentication performance by 100%",
          "Built real-time application features increasing client satisfaction",
        ],
        technologies: ["MongoDB", "Express", "React", "Node.js"],
        icon: "🧩",
        color: "from-green-500 to-emerald-500",
      },

      {
        id: 4,
        title: "Web Development Intern",
        company: "BoostStar Experts",
        type: "Internship",
        duration: "Feb 2024 – April 2024",
        location: "Remote",
        description:
          "Developed MERN-based client projects and resolved real-time development issues.",
        achievements: [
          "Received 95% ratings for client project delivery",
          "Handled end-to-end development for MERN projects",
          "Resolved real-time web development and performance issues",
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        icon: "🎓",
        color: "from-teal-500 to-blue-500",
      },
    ],
  };

  const stats = [
    {
      icon: Briefcase,
      value: "1+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      value: "10+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      value: "10+",
      label: "Happy Clients",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <section
      id="experience"
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
            My Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From passionate beginner to professional developer - documenting my
            growth through code and innovation
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 text-center border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon size={28} className="text-white" />
              </div>

              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 to-pink-200 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experienceData.professional.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-xl z-10 hidden lg:block"></div>

                {/* Card */}
                <motion.div
                  className={`bg-white/80 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300 w-full lg:w-5/6 ${
                    index % 2 === 0
                      ? "lg:mr-auto lg:ml-8"
                      : "lg:ml-auto lg:mr-8"
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${experience.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {experience.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Title */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
                            {experience.title}
                          </h3>

                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-lg font-semibold text-gray-800">
                              {experience.company}
                            </span>

                            <span className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100">
                              {experience.type}
                            </span>
                          </div>
                        </div>

                        <a
                          href="#"
                          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:shadow-lg transition-all duration-300 group self-start"
                        >
                          <ExternalLink size={16} />
                          View
                        </a>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span className="text-sm md:text-base">
                            {experience.duration}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          <span className="text-sm md:text-base">
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Award size={20} className="text-purple-600" />
                          Key Achievements
                        </h4>

                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          Technologies Used
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-medium border border-purple-100 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h3>

            <p className="text-purple-100 mb-6 max-w-2xl mx-auto text-lg">
              Let's bring your next project to life with professional expertise
              and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Briefcase size={20} />
                Start a Project
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Code size={20} />
                View My Work
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative Background */}
        <div className="absolute top-40 left-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-200/15 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Experience;
