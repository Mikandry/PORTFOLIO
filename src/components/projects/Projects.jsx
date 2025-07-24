import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };

  const projects = [
    {
      title: 'HotelBooking (PHP)',
      image: '/images/booking.png',
      description: 'The HotelBooking project is a platform where clients can easily book rooms at various hotels. It allows hotels to list their rooms and details on the platform, and customers can browse the options and make bookings online.',
      link: 'https://github.com/Mikandry/hotelbookingPhp',
      tags: ['PHP', 'MySQL', 'Bootstrap']
    },
    {
      title: 'Gestion des Dimes et Offrandes (PHP)',
      image: '/images/offrandes.png',
      description: 'This project helps church treasure manage and control the collection of tithes and offerings. It allows tracking donations and printing receipts for transparency.',
      tags: ['PHP', 'JavaScript', 'jQuery']
    },
    {
      title: 'OnlineHealthCare (LARAVEL 11)',
      image: '/images/OnlineHealthCare.png',
      description: 'This is a platform for booking doctor appointments online, allowing patients to check availability and schedule their visits accordingly.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      title: 'Ecommerce (LARAVEL 12)',
      image: '/images/ecommerce.png',
      description: 'This is a platform where we can buy everything available there, precisly I built it for Malagasy production, where tourist and foreigner can check products from Madagascar as a souvenir or for food.',
      tags: ['Laravel', 'MySQL', 'Tailwind CSS']
    },
  ];

  const cardVariants = {
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
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm md:text-base font-semibold text-emerald-400 mb-2">PORTFOLIO</h2>
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            My Creative Projects
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <Slider {...sliderSettings}>
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="px-2 sm:px-4"
                variants={cardVariants}
              >
                <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-emerald-400 transition-all duration-300 h-full flex flex-col group">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white">{project.title}</h2>
                    <div className="flex space-x-2">
                      {project.tags?.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-gray-700 group-hover:bg-emerald-900/50 text-xs text-emerald-300 rounded-full transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                          whileHover={{ scale: 1.03 }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      </a>
                    ) : (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                        whileHover={{ scale: 1.03 }}
                      />
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                  
                  {project.link && (
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;