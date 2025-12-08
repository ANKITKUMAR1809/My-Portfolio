import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const socials = [
    {
      id: 1,
      icon: <Linkedin size={22} />,
      link: "https://www.linkedin.com/in/ankitkumar02",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: <Github size={22} />,
      link: "https://github.com/ANKITKUMAR1809",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <Youtube size={22} />,
      link: "https://www.youtube.com/@XCodeSyt",
      label: "YouTube",
    },
    {
      id: 4,
      icon: <Twitter size={22} />,
      link: "https://x.com/AKtheProgrammer",
      label: "Twitter",
    },
    {
      id: 5,
      icon: <Mail size={22} />,
      link: "mailto:ankitkumar1878@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ankit Kumar
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              MERN Stack Developer • Frontend Developer • React Specialist
            </p>

            <div className="flex items-center gap-2 text-gray-600 mt-3">
              <MapPin size={18} />
              <span>Patna, Bihar, India</span>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socials.map((social) => (
              <motion.a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-2xl"
                whileHover={{ scale: 1.15, y: -3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-purple-200 via-gray-200 to-pink-200 my-10"></div>

        {/* Bottom Section */}
        <motion.div
          className="text-center text-gray-600 text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-600">Ankit Kumar</span>.  
          All Rights Reserved.
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
