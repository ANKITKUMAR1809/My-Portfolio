import React, { useState } from "react";
import me from "../assets/me.jpg";
import mypic from "../assets/nav.jpg";
import { Menu, X } from "lucide-react";
import Github from '../assets/github-dark.svg';
import Linkedin from '../assets/linkedin-dark.svg';
import Twitter from '../assets/twitter-dark.svg';
import Yt from '../assets/yt-dark.svg';


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="py-4 md:px-6 pl-2 pr-4 bg-cover bg-center shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-20 w-20 rounded-full overflow-hidden">
              <img src={me} alt="Ankit Kumar Profile Photo" />
            </div>
            <div>
              <h1 className="md:text-2xl font-semibold">ANKIT KUMAR</h1>
            </div>
          </div>
          <div className="gap-5 md:flex hidden font-semibold text-lg">
            <a href="#home" className="hover:border-b-4 hover:border-[#7843E9] transition-all" >Home</a>
            <a href="#about" className="hover:border-b-4 hover:border-[#7843E9] transition-all" >About</a>
            <a href="#skills" className="hover:border-b-4 hover:border-[#7843E9] transition-all" >Skills</a>
            <a href="#projects" className="hover:border-b-4 hover:border-[#7843E9] transition-all"  >Projects</a>
            <a href="#contact" className="hover:border-b-4 hover:border-[#7843E9] transition-all"  >Contact</a>
          </div>
          <div className="pr-2 md:hidden">
            <Menu size={26} onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Section */}
      <section
        className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 text-white md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 p-6">
          <div className="self-end">
            <X size={26} onClick={() => setIsMenuOpen(false)} />
          </div>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </section>
{/*  section 1 header  */}
      <section
        style={{
          backgroundImage: `url(${mypic})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
        className="bg-cover relative bg-center min-h-screen flex items-center justify-center"
      >
        <div className="w-auto h-60 bg-white absolute top-40 left-0 drop-shadow-lg flex flex-col justify-around" >
          <div className="p-2">
            <a href="www.linkedin.com/in/ankitkumar02">
              <img src={Linkedin} alt="linkedin" width={30} height={40} />
            </a>
          </div>
          <div className="p-2">
            <a href="https://github.com/ANKITKUMAR1809">
              <img src={Github} alt="github" width={30} height={40} />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.youtube.com/@XCodeSyt">
              <img src={Yt} alt="youtube " width={30} height={40} />
            </a>
          </div>
          <div className="p-2">
            <a href="https://x.com/AKtheProgrammer">
              <img src={Twitter} alt="twitter" width={30} height={40} />
            </a>
          </div>


        </div>
        <div className="text-center text-black p-4  rounded-lg ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hey, I'm ANKIT KUMAR
          </h1>
          <p className="text-lg md:text-xl w-3/6 mx-auto py-6">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product.
          </p>

          <button className="text-xl text-white bg-[#7843E9] rounded-md py-2 px-8 mt-4 font-semibold hover:bg-[#5a2ebc] transition duration-300">
            PROJECTS
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
