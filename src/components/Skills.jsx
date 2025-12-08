import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillsData = {
    frontend: [
      {
        name: "HTML5",
        level: 95,
        color: "from-orange-500 to-red-500",
        icon: "🛠️",
      },
      {
        name: "CSS3",
        level: 75,
        color: "from-blue-500 to-purple-500",
        icon: "🎨",
      },
      {
        name: "JavaScript",
        level: 75,
        color: "from-yellow-400 to-yellow-600",
        icon: "⚡",
      },
      {
        name: "React",
        level: 80,
        color: "from-cyan-500 to-blue-500",
        icon: "⚛️",
      },
      {
        name: "Next.js",
        level: 20,
        color: "from-gray-800 to-gray-600",
        icon: "▲",
      },
      {
        name: "Tailwind CSS",
        level: 84,
        color: "from-teal-400 to-cyan-500",
        icon: "💨",
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: 60,
        color: "from-green-500 to-emerald-500",
        icon: "🟢",
      },
      {
        name: "Express",
        level: 50,
        color: "from-gray-600 to-gray-400",
        icon: "🚂",
      },
      {
        name: "MongoDB",
        level: 50,
        color: "from-green-600 to-green-400",
        icon: "🍃",
      },
      {
        name: "PostgreSQL",
        level: 10,
        color: "from-blue-600 to-blue-400",
        icon: "🐘",
      },
      {
        name: "Python",
        level: 30,
        color: "from-blue-400 to-cyan-300",
        icon: "🐍",
      },
      {
        name: "REST API",
        level: 75,
        color: "from-purple-500 to-pink-500",
        icon: "🔗",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        level: 75,
        color: "from-orange-500 to-red-500",
        icon: "📚",
      },
      {
        name: "VS Code",
        level: 82,
        color: "from-blue-500 to-purple-500",
        icon: "💻",
      },
      
      {
        name: "Docker",
        level: 30,
        color: "from-blue-400 to-cyan-400",
        icon: "🐳",
      },
      {
        name: "AWS",
        level: 10,
        color: "from-orange-400 to-yellow-500",
        icon: "☁️",
      },
    ],
  };

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
      y: 20,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  const categories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: "💻",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "tools",
      name: "Tools & Tech",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-pink-50/10 w-full flex items-center justify-center py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mastering modern technologies to build exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Categories Navigation */}
          <motion.div
            className="w-full lg:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30 sticky top-24">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
                Categories
              </h3>

              <div className="space-y-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                      activeCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                        : "bg-white/50 text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105 border border-gray-100"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <span className="font-semibold text-lg">
                      {category.name}
                    </span>
                    {activeCategory === category.id && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Overall Proficiency */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {Math.round(
                      skillsData[activeCategory].reduce(
                        (acc, skill) => acc + skill.level,
                        0
                      ) / skillsData[activeCategory].length
                    )}
                    %
                  </div>
                  <div className="text-sm text-gray-600">
                    Average Proficiency
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
              {/* Category Header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                key={`header-${activeCategory}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`p-3 rounded-2xl bg-gradient-to-r ${
                    categories.find((cat) => cat.id === activeCategory)?.color
                  }`}
                >
                  <span className="text-2xl text-white">
                    {categories.find((cat) => cat.id === activeCategory)?.icon}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent">
                    {categories.find((cat) => cat.id === activeCategory)?.name}{" "}
                    Skills
                  </h2>
                  <p className="text-gray-600">
                    {skillsData[activeCategory].length} technologies mastered
                  </p>
                </div>
              </motion.div>

              {/* Skills Grid with AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  className="grid md:grid-cols-2 gap-6"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={containerVariants}
                >
                  {skillsData[activeCategory].map((skill, index) => (
                    <motion.div
                      key={`${activeCategory}-${skill.name}`}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                      }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg`}
                          >
                            <span className="text-white text-lg">
                              {skill.icon}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {skill.name}
                          </h3>
                        </div>
                        <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {skill.level}%
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg relative overflow-hidden`}
                          variants={progressVariants}
                          initial="hidden"
                          animate="visible"
                          custom={skill.level}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-2 h-2 rounded-full ${
                                star <= Math.ceil(skill.level / 20)
                                  ? `bg-gradient-to-r ${skill.color}`
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                          {skill.level >= 90
                            ? "Expert"
                            : skill.level >= 80
                            ? "Advanced"
                            : skill.level >= 70
                            ? "Intermediate"
                            : "Beginner"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Additional Info */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center border border-blue-100 shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {Object.values(skillsData).flat().length}
                </div>
                <div className="text-gray-700 font-medium">Total Skills</div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  {Math.round(
                    Object.values(skillsData)
                      .flat()
                      .reduce((acc, skill) => acc + skill.level, 0) /
                      Object.values(skillsData).flat().length
                  )}
                  %
                </div>
                <div className="text-gray-700 font-medium">Overall Mastery</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {Object.keys(skillsData).length}
                </div>
                <div className="text-gray-700 font-medium">Categories</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-200/15 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Skills;
