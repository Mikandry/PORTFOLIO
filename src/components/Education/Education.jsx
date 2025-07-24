import React from 'react';
import { FaLaravel, FaPhp, FaReact, FaBook, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Education() {
  const educationItems = [
    {
      title: "University Degree",
      institution: "IS-INFO",
      year: "2018",
      description: "Track: Programming",
      icon: <FaGraduationCap className="text-emerald-400" />
    },
    {
      title: "Licence",
      institution: "IS-IESI",
      year: "2014",
      description: "Track: Programming and Computer Science",
      icon: <FaBook className="text-emerald-400" />
    },
    {
      title: "Diploma",
      institution: "IS-IESI",
      year: "2011",
      description: "Studied Telecommunications",
      icon: <FaBook className="text-emerald-400" />
    }
  ];

  const skills = [
    {
      name: "Laravel 11",
      level: "Junior",
      percentage: 60,
      description: "Laravel is my preferred PHP framework, used for building scalable web applications with elegant syntax.",
      icon: <FaLaravel className="text-emerald-400" />
    },
    {
      name: "PHP",
      level: "Proficient",
      percentage: 80,
      description: "PHP is a server-side scripting language I use extensively for back-end development. I'm highly proficient with it, especially for web applications.",
      icon: <FaPhp className="text-emerald-400" />
    },
    {
      name: "React.js",
      level: "Intermediate",
      percentage: 50,
      description: "React.js is a JavaScript library I use for building dynamic UIs. Although I'm still learning, I have experience building simple apps.",
      icon: <FaReact className="text-emerald-400" />
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Education Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">ACADEMIC BACKGROUND</h2>
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              My Education
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400 transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                      <span className="text-emerald-400 font-medium">{item.institution}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-300">{item.year}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">TECHNICAL EXPERTISE</h2>
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Skills & Technologies
            </h1>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-emerald-400 transition-all duration-300"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    {skill.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center gap-2">
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <span className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-2 mb-4">{skill.description}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2.5 rounded-full" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-400">Beginner</span>
                      <span className="text-xs text-gray-400">Expert</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;