import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Twitter, Mail, MapPin, Cpu, Shield } from "lucide-react";

const Footer = () => {
  const socials = [
    { id: 1, icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/ankitkumar02" },
    { id: 2, icon: <Github size={18} />, link: "https://github.com/ANKITKUMAR1809" },
    { id: 3, icon: <Youtube size={18} />, link: "https://www.youtube.com/@XCodeSyt" },
    { id: 4, icon: <Twitter size={18} />, link: "https://x.com/AKtheProgrammer" },
    { id: 5, icon: <Mail size={18} />, link: "mailto:ankitkumar1878@gmail.com" },
  ];

  return (
    <footer className="w-full bg-[#0B0B0B] border-t-4 border-[#1A1A1A] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,#FF5F1F_20px,#FF5F1F_40px)]" />
      
      <div className="max-w-[1400px] mx-auto px-6 py-12 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 sm:gap-20 items-start">
          
          {/* Branding & Status */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 sm:space-y-4 border-l-4 border-[#FF5F1F] pl-6 sm:pl-8">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase">
                ANKIT_KUMAR
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#888888] uppercase tracking-tight max-w-md">
                Full stack architect specialized in industrial-grade digital ecosystems and high-performance software modules.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
              <div className="flex items-center gap-3 font-mono text-[8px] sm:text-[10px] text-[#555] uppercase tracking-widest bg-[#0D0D0D] p-3 sm:p-4 border-2 border-[#1A1A1A]">
                <Cpu size={12} className="text-[#FF5F1F] sm:w-3.5 sm:h-3.5" /> 
                SYSTEM_NODE: PATNA_IN_01
              </div>
              <div className="flex items-center gap-3 font-mono text-[8px] sm:text-[10px] text-[#555] uppercase tracking-widest bg-[#0D0D0D] p-3 sm:p-4 border-2 border-[#1A1A1A]">
                <Shield size={12} className="text-[#FF5F1F] sm:w-3.5 sm:h-3.5" /> 
                ENCRYPTION: RSA_4096
              </div>
            </div>
          </div>

          {/* Connect & Links */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase text-left lg:text-left">EXTERN_CONNECTS</div>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-start lg:justify-start">
                {socials.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 sm:p-5 border-2 border-[#1A1A1A] bg-[#0D0D0D] text-[#888888] hover:text-[#FF5F1F] hover:border-[#FF5F1F] transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 border-2 border-[#1A1A1A] bg-[#0D0D0D] text-left lg:text-left relative group overflow-hidden">
              <div className="relative z-10">
                <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase mb-2">AVAILABILITY_STATUS</div>
                <div className="text-[#FF5F1F] font-black text-lg sm:text-xl tracking-tighter uppercase">READY_FOR_DEPLOYMENT</div>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 opacity-10 bg-[radial-gradient(circle_at_top_right,#FF5F1F,transparent)]" />
            </div>
          </div>
        </div>

        {/* Industrial Divider */}
        <div className="w-full h-[2px] bg-[#1A1A1A] my-12 sm:my-16 relative overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#FF5F1F]/30 to-transparent"
          />
        </div>

        {/* Legal & Versioning */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[8px] sm:text-[10px] text-[#555] tracking-widest uppercase text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} AK_SYSTEMS_GLOBAL</span>
            <span className="hidden sm:inline text-[#1A1A1A]">|</span>
            <span>ALL_RIGHTS_RESERVED</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="text-[#FF5F1F]">v.2.0.5_STABLE</span>
            <span className="hidden sm:inline text-[#1A1A1A]">|</span>
            <span>BUILD_3920_ALPHA</span>
          </div>
        </div>
      </div>
      
      {/* Footer Industrial Corner Decor */}
      <div className="absolute bottom-4 right-4 font-mono text-[8px] text-[#222] uppercase tracking-[1em] pointer-events-none">
        SECURE_LOGOUT_SUCCESSFUL
      </div>
    </footer>
  );
};

export default Footer;
