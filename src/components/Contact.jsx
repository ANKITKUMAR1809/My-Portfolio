import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/manlgvqq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // Formspree uses this field for reply-to
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message. Please try again or email me directly.");
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ankitkumar1878@gmail.com",
      link: "mailto:ankitkumar1878@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 1234567890", // Replace with your actual phone number
      link: "tel:+911234567890",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Patna, Bihar, India",
      link: "https://maps.google.com/?q=Patna,Bihar,India",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankitkumar02",
      color: "hover:bg-blue-100 hover:text-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/ANKITKUMAR1809",
      color: "hover:bg-gray-100 hover:text-gray-800",
      bgColor: "bg-gray-800"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/@XCodeSyt",
      color: "hover:bg-red-100 hover:text-red-600",
      bgColor: "bg-red-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/AKtheProgrammer",
      color: "hover:bg-sky-100 hover:text-sky-500",
      bgColor: "bg-sky-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-pink-50/10 w-full flex items-center justify-center py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-8">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 md:mb-6">
            Get In Touch
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Let's discuss your next project or just say hello. I'm always open to new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-300 group"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                >
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 truncate">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 truncate">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/30"
            >
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 text-center">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${social.color} border border-gray-100 hover:shadow-lg group`}
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl ${social.bgColor} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon size={16} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm sm:text-base">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-purple-100 shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1 sm:mb-2">24h</div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">Response Time</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-blue-100 shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
                <div className="text-gray-700 font-medium text-sm sm:text-base">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-purple-600 bg-clip-text text-transparent mb-2">
              Send Message
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 sm:py-12"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Send size={24} className="text-white sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm sm:text-base">Thank you for your message. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl sm:hover:shadow-2xl transform hover:scale-105"
                  } text-white shadow-lg text-sm sm:text-base`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs sm:text-sm text-gray-500">
                  I'll respond to your message within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Direct Email CTA */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Prefer Direct Email?
            </h3>
            <p className="text-purple-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Feel free to send me an email directly at{" "}
              <span className="font-semibold text-white">ankitkumar1878@gmail.com</span> 
              {" "}and I'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:ankitkumar1878@gmail.com"
              className="inline-flex items-center gap-2 sm:gap-3 bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-xl sm:hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Send Direct Email
            </a>
          </div>
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-pink-200/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-200/15 rounded-full blur-xl sm:blur-2xl"></div>
      </div>
    </section>
  );
};

export default Contact;