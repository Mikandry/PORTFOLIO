import React from 'react';
import { FiHome, FiUser, FiBriefcase, FiSmile, FiAward, FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaEnvelope, FaChartLine, FaLaptopCode, FaGraduationCap, FaLanguage, FaUsers, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Professional() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Profile */}
        <motion.div 
          className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden mb-8 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-b from-emerald-500 to-emerald-600 p-8 flex flex-col items-center justify-center text-white">
              <div className="w-40 h-40 rounded-full bg-gray-800 mb-6 overflow-hidden shadow-lg border-4 border-emerald-400">
                <div className="flex items-center justify-center h-full bg-gray-700 text-emerald-400">
                  <img 
                    src="/images/myname.jpeg" 
                    alt="Users" 
                    className="rounded-full object-cover"
                    />

                </div>
              </div>
              <h1 className="text-2xl font-bold mb-2 text-center">Professional Profile</h1>
              <p className="text-emerald-100 text-center mb-6">10+ years in Public Sector | IT | Statistics | Education</p>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/in/andryramaroson" 
                  className="text-white hover:text-emerald-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="https://github.com/Mikandry" 
                  className="text-white hover:text-emerald-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="mikandry7@gmail.com" 
                  className="text-white hover:text-emerald-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaEnvelope className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="/welcome" 
                  className="text-white hover:text-emerald-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiSmile className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="/home" 
                  className="text-white hover:text-emerald-200 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiAward className="text-2xl" />
                </motion.a>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                Experienced public sector professional with expertise in IT, statistics, and education administration. 
                Passionate about digital transformation, data-driven decision making, and community education initiatives.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaChartLine className="text-emerald-400 text-2xl mr-3" />
                  <div>
                    <p className="font-semibold text-white">Statistics</p>
                    <p className="text-sm text-gray-300">Data Analysis & Reporting</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaLaptopCode className="text-emerald-400 text-2xl mr-3" />
                  <div>
                    <p className="font-semibold text-white">IT Development</p>
                    <p className="text-sm text-gray-300">Software Solutions</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaGraduationCap className="text-emerald-400 text-2xl mr-3" />
                  <div>
                    <p className="font-semibold text-white">Education</p>
                    <p className="text-sm text-gray-300">Administration</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaCertificate className="text-emerald-400 text-2xl mr-3" />
                  <div>
                    <p className="font-semibold text-white">Certifications</p>
                    <p className="text-sm text-gray-300">Public Management</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                <FaLaptopCode className="text-emerald-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Work Experience</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Ministry of Education</h3>
                <p className="text-emerald-400 text-sm mb-2">2015 – Present</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
                  <li><span className="font-medium text-white">Statistician</span> (2016–Present)</li>
                  <li><span className="font-medium text-white">IT Helper</span> (2015–2016)</li>
                  <li>Administrative Staff – Exam Planning & Data Management</li>
                </ul>
              </div>
              
              <div className="pl-2">
                <h3 className="font-semibold text-white mb-2">Key Achievements:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
                  <li>Digitized manual processes, improving efficiency by 40%</li>
                  <li>Created statistical databases serving 500+ users</li>
                  <li>Supervised national exam planning for 100,000+ students</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                <FaGraduationCap className="text-emerald-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">Master's Degree</h3>
                <p className="text-emerald-400 text-sm mb-1">2018</p>
                <p className="text-gray-300">Software Development</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Licence</h3>
                <p className="text-emerald-400 text-sm mb-1">2014</p>
                <p className="text-gray-300">Electronics & Software Development</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Professional Certificates</h3>
                <p className="text-emerald-400 text-sm mb-1">ENAM – École Nationale d'Administration de Madagascar</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4 mt-1">
                  <li>Audit Opérationnel</li>
                  <li>Marché Public (Public Procurement)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills & Languages */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                <FaLanguage className="text-emerald-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Language Proficiency</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-white">French</span>
                  <span className="text-sm text-emerald-400">B1/B2</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Alliance Française</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-white">English</span>
                  <span className="text-sm text-emerald-400">C1/C2</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">English Teaching Program (ETP)</p>
              </div>
            </div>
          </motion.div>

          {/* Leadership & Volunteering */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-500/20 p-3 rounded-lg mr-4">
                <FaUsers className="text-emerald-400 text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white">Leadership & Community</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-white">YOUTH AFRICAN LEADERSHIP INITIATIVE YALI Dakar</h3>
                <p className="text-emerald-400 text-sm mb-2">2021</p>
                <p className="text-gray-300 mb-2">Public Management and Leadership</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
                  <li>Completed online leadership training</li>
                  <li>Active member of the YALI Alumni Network</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white">Volunteering</h3>
                <p className="text-gray-300">Taught digital literacy in local communities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}