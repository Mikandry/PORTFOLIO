import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaServer
} from 'react-icons/fa';
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiMail,
  FiSmile,
  FiAward
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import About from '../About/About';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import './Home.css';

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const navLinks = [
    { icon: <FiHome />, label: 'Home', section: 'home' },
    { icon: <FiUser />, label: 'About', section: 'about' },
    { icon: <FiBriefcase />, label: 'Projects', section: 'projects' },
    { icon: <FiSmile />, label: 'Home page', section: 'welcome', isRoute: true },
    { icon: <FiAward />, label: 'Professional page', section: 'professional', isRoute: true },
    { icon: <FiMail />, label: 'Contact', section: 'contact' }
  ];

  return (
    <div className="portfolio-container">
      {/* Sidebar */}
      <motion.nav
        className="sidebar-nav"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="profile-card">
          <div
            className="profile-pic-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`profile-image ${isHovered ? 'image-secondary' : 'image-primary'}`}
              style={{ backgroundImage: "url('/images/mikaCode1.jpeg')" }}
            />
            <div
              className={`profile-image ${!isHovered ? 'image-secondary' : 'image-primary'}`}
              style={{ backgroundImage: "url('/images/mikaCode2.jpeg')" }}
            />
          </div>
          <h2>Andry Ramaroson</h2>
          <p>Back End Developer, junior Front End</p>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <button
              key={link.section}
              className={`nav-link ${activeSection === link.section ? 'active' : ''}`}
              onClick={() => {
                if (link.isRoute) {
                  navigate(`/${link.section}`);
                } else {
                  document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(link.section);
                }
              }}
            >
              <span className="nav-icon">{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ))}
        </div>

        <div className="contact-links">
          <h3>Connect With Me</h3>
          <div className="contact-icons">
            {[
              { icon: <FaEnvelope />, href: "mailto:mikandry7@gmail.com", color: "#EA4335" },
              { icon: <FaPhone />, href: "tel:+261340604716", color: "#34A853" },
              { icon: <FaWhatsapp />, href: "https://wa.me/+261346100842", color: "#25D366" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/andryramaroson", color: "#0A66C2" },
              { icon: <FaGithub />, href: "https://github.com/Mikandry", color: "#181717" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                style={{ backgroundColor: item.color }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header */}
      <div className="mobile-header">
        <button className="hamburger" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          ☰
        </button>
        {showMobileMenu && (
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => {
                  if (link.isRoute) {
                    navigate(`/${link.section}`);
                  } else {
                    document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
                    setShowMobileMenu(false);
                    setActiveSection(link.section);
                  }
                }}
                className="mobile-nav-link"
              >
                {link.icon} {link.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="main-content">
        <section id="home" className="section home-section">
          <motion.div variants={itemVariants} className="intro-text">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Andry</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
              Back End Developer <span className="text-white">|</span> Junior Front End
            </h2>
            <motion.p
              className="text-lg md:text-xl text-black-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.02 }}
            >
              I build digital experiences that are fast, accessible, and visually appealing.
              Specializing in Laravel and PHP with growing expertise in modern frontend technologies.
            </motion.p>
          </motion.div>
        </section>

        <section id="about" className="section"><About /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="contact" className="section"><Contact /></section>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="skills-card">
          <h3>Technical Skills</h3>
          <div className="skills-list">
            {[
              { icon: <FaServer />, name: "Backend", skills: ["LARAVEL", "PHP"] },
              { icon: <FaCode />, name: "Frontend", skills: ["React.js", "JavaScript", "HTML/CSS", "Tailwind"] },
              { name: "Database", skills: ["MySQL"] },
              { name: "Other", skills: ["Git", "Vbnet"] }
            ].map((category, index) => (
              <div key={index} className="skill-category">
                {category.icon && <div className="skill-icon">{category.icon}</div>}
                <h4>{category.name}</h4>
                <div className="skill-tags">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            {[
              "Completed Project OnlineHospitalrendezVous",
              "Learned New Framework",
              "Learned new current changes from AI",
              "Updated Portfolio"
            ].map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        <div className="availability">
          <h3>Availability</h3>
          <div className="availability-status">
            <div className="status-indicator available"></div>
            <span>Open for freelance work</span>
          </div>
          <p>Quick learner, eager for challenges. Thrives under pressure.</p>
        </div>
      </aside>
    </div>
  );
}

export default Home;
