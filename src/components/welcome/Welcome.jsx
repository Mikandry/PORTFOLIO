import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Replace with your actual photo path
import backgroundImage from '/images/mikaPro.jpeg';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div 
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // Changed to focus on top of image
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Explore my professional journey and Technology development
        </motion.p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            onClick={() => navigate('/home')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Developer Portfolio
          </motion.button>
          
          <motion.button
            onClick={() => navigate('/professional')}
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Professional Profile
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Welcome;