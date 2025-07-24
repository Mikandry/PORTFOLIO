import React from 'react';
import { FaLaravel, FaPhp, FaReact } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiMysql,
  SiGithub,
  SiVuedotjs
} from 'react-icons/si';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

function About() {
  const educationItems = [
    {
      title: "University Degree",
      institution: "IS-INFO",
      year: "2018",
      detail: "Master II - Software Program",
      icon: "🎓"
    },
    {
      title: "Licence",
      institution: "IS-IESI",
      year: "2014",
      detail: "Electronics and Computer Science",
      icon: "📚"
    },
    {
      title: "Early Studies",
      institution: "IS-IESI",
      year: "2011",
      detail: "Telecommunications",
      icon: "📡"
    }
  ];

  const frontendSkills = [
    { icon: <SiJavascript size={24} className="text-yellow-400" />, name: "JavaScript", level: 40 },
    { icon: <FaReact size={24} className="text-cyan-400" />, name: "React", level: 75 },
    { icon: <SiHtml5 size={24} className="text-orange-500" />, name: "HTML5", level: 96 },
    { icon: <SiCss3 size={24} className="text-blue-500" />, name: "CSS3", level: 80 },
    { icon: <SiSass size={24} className="text-pink-500" />, name: "SASS", level: 80 },
    { icon: <SiTailwindcss size={24} className="text-cyan-300" />, name: "Tailwind", level: 80 }
  ];

  const backendSkills = [
    { icon: <FaPhp size={24} className="text-purple-400" />, name: "PHP", level: 80 },
    { icon: <FaLaravel size={24} className="text-red-500" />, name: "Laravel", level: 75 },
    { icon: <SiMysql size={24} className="text-blue-400" />, name: "MySQL", level: 80 }
  ];

  const tools = [
    { icon: <SiGithub size={24} className="text-white" />, name: "GitHub" },
    { icon: <VscVscode size={24} className="text-blue-400" />, name: "VS Code" },
    { icon: <SiVuedotjs size={24} className="text-emerald-400" />, name: "VB.net" }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">PROFESSIONAL PROFILE</h2>
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-4">
              Based in <span className="text-emerald-400 font-semibold">Madagascar</span>, East Africa
            </p>
            <p className="text-lg text-gray-400">
              An island nation in the Indian Ocean with a growing tech community and unique perspective on digital solutions.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block">
              Education & Background
            </h2>
            
            <motion.ul 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {educationItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="bg-gray-800/50 hover:bg-gray-700/50 p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 shadow-lg"
                  variants={fadeInVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-700 rounded-lg text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-400">{item.title}</h3>
                      <p className="text-gray-300">
                        <span className="font-semibold">{item.institution}</span>, {item.year}
                      </p>
                      <p className="text-gray-400 mt-1">{item.detail}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <img 
                src="/images/3D.jpeg"
                alt="3D Illustration"
                className="relative w-full rounded-2xl border-2 border-gray-700 group-hover:border-emerald-400 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 inline-block">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Front-end */}
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 shadow-lg"
              variants={fadeInVariants}
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                <FaReact className="text-cyan-400" />
                Front-end Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {frontendSkills.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-emerald-400 transition-all hover:scale-[1.02]"
                    variants={fadeInVariants}
                  >
                    {tech.icon}
                    <span className="text-white flex-1">{tech.name}</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"  
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Back-end */}
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 shadow-lg"
              variants={fadeInVariants}
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                <FaLaravel className="text-red-400" />
                Back-end Development
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {backendSkills.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-emerald-400 transition-all hover:scale-[1.02]"
                    variants={fadeInVariants}
                  >
                    {tech.icon}
                    <span className="text-white flex-1">{tech.name}</span>
                    <div className="w-16 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"  
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 shadow-lg md:col-span-2"
              variants={fadeInVariants}
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                <VscVscode className="text-blue-400" />
                Development Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tools.map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-emerald-400 transition-all hover:scale-[1.02]"
                    variants={fadeInVariants}
                  >
                    {tech.icon}
                    <span className="text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;