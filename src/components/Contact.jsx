import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Youtube, Twitter, Terminal, Shield, Globe } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, title: "CORE_EMAIL", value: "ankitkumar1878@gmail.com", link: "mailto:ankitkumar1878@gmail.com" },
    { icon: Phone, title: "VOICE_LINK", value: "+91 8102761121", link: "tel:+918102761121" },
    { icon: MapPin, title: "LOC_COORDS", value: "Patna, Bihar, India", link: "#" }
  ];

  return (
    <section id="contact" className="py-32 bg-[#0B0B0B] relative overflow-hidden border-b-2 border-[#1A1A1A]">
      {/* Background Static Noise */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24 border-l-4 border-[#FF5F1F] pl-6 sm:pl-8">
          <div>
            <div className="font-mono text-[10px] text-[#FF5F1F] tracking-[0.3em] mb-3 sm:mb-4 uppercase">[ COMMS_INTERFACE ]</div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase text-white leading-none">
              CONTACT_LINK
            </h2>
          </div>
          <p className="max-w-md text-[#888888] font-mono text-xs sm:text-sm uppercase tracking-tight">
            Establish a secure connection for project collaboration or technical inquiries.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-32">
          {/* Contact Infrastructure */}
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase">ACCESS_CHANNELS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="group flex items-center gap-4 sm:gap-6 p-6 sm:p-8 border-2 border-[#1A1A1A] bg-[#0D0D0D] hover:border-[#FF5F1F] transition-all"
                  >
                    <div className="p-3 sm:p-4 bg-[#0B0B0B] border-2 border-[#1A1A1A] group-hover:border-[#FF5F1F] text-[#FF5F1F] transition-colors">
                      <item.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] text-[#555] tracking-widest uppercase mb-1">{item.title}</div>
                      <div className="text-lg sm:text-xl font-black text-white uppercase tracking-tighter break-all">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Comms Security Stat */}
            <div className="p-6 sm:p-8 border-2 border-[#1A1A1A] bg-[#0B0B0B] relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <Shield className="text-[#FF5F1F]" size={18} className="sm:w-5 sm:h-5" />
                <span className="font-mono text-[10px] text-[#E5E5E5] tracking-widest uppercase">ENCRYPTION_STATUS</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase mb-2">RSA_4096_ACTIVE</div>
              <div className="h-1 w-full bg-[#1A1A1A]">
                <div className="h-full w-full bg-[#FF5F1F]/20 animate-pulse" />
              </div>
              <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-[#222]">SECURE_NODE_01</div>
            </div>
          </div>

          {/* Contact Terminal */}
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -top-4 left-4 sm:left-8 font-mono text-[10px] text-[#FF5F1F] bg-[#0B0B0B] px-3 sm:px-4 py-1 sm:py-2 z-20 border-2 border-[#FF5F1F]">
              MESSAGE_TERMINAL_v4.0
            </div>
            
            <div className="bg-[#0D0D0D] border-4 border-[#1A1A1A] p-6 sm:p-12 relative group hover:border-[#FF5F1F]/30 transition-colors">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 sm:py-20 space-y-6 sm:space-y-8"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#FF5F1F] flex items-center justify-center mx-auto bg-[#0B0B0B]">
                      <Send size={32} className="text-[#FF5F1F] animate-bounce sm:w-10 sm:h-10" />
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase mb-2">TRANSMISSION_SUCCESS</h3>
                      <p className="font-mono text-[#888888] text-xs sm:text-sm uppercase tracking-tight">Data packets successfully routed. Awaiting response.</p>
                    </div>
                    <button onClick={() => setIsSubmitted(false)} className="font-mono text-[#FF5F1F] hover:underline uppercase text-[10px] tracking-widest">
                      INITIATE_NEW_STREAM
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-[#555] uppercase tracking-widest">SENDER_NAME</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-[#0B0B0B] border-2 border-[#1A1A1A] p-3 sm:p-4 text-white font-mono text-sm focus:border-[#FF5F1F] outline-none transition-colors"
                          placeholder="INPUT_NAME_HERE"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-mono text-[10px] text-[#555] uppercase tracking-widest">SENDER_EMAIL</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#0B0B0B] border-2 border-[#1A1A1A] p-3 sm:p-4 text-white font-mono text-sm focus:border-[#FF5F1F] outline-none transition-colors"
                          placeholder="NAME@DOMAIN.COM"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-[#555] uppercase tracking-widest">STREAM_SUBJECT</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-[#0B0B0B] border-2 border-[#1A1A1A] p-3 sm:p-4 text-white font-mono text-sm focus:border-[#FF5F1F] outline-none transition-colors"
                        placeholder="COLLAB_REQUEST / TECH_QUERY"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-[10px] text-[#555] uppercase tracking-widest">DATA_PAYLOAD</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#0B0B0B] border-2 border-[#1A1A1A] p-3 sm:p-4 text-white font-mono text-sm focus:border-[#FF5F1F] outline-none transition-colors resize-none"
                        placeholder="ENTER_DETAILED_MESSAGE_PACKETS..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full p-6 sm:p-8 bg-[#FF5F1F] text-black font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 sm:gap-4 relative group overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3 sm:gap-4">
                        {isSubmitting ? "PROCESSING..." : "TRANSMIT_DATA"} <Send size={18} className="sm:w-5 sm:h-5" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
