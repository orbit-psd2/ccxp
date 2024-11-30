import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Events() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-[100px] px-4" style={{
      background: "radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;"
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Technical Events */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text"
        >
          Technical Events
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop" 
                alt="A DAY WITH CLOUD-WORKSHOP"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">A DAY WITH CLOUD-WORKSHOP</h3>
              <p className="text-zinc-600 mb-6">Embark on a journey into Cloud Computing with our workshop: Introduction, Setting Up Environment, Deploying Web Apps, and Q&A</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                <Link to='/ccws'>VIEW</Link>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop" 
                alt="CLOUD INNOVATORS"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">CLOUD INNOVATORS</h3>
              <p className="text-zinc-600 mb-6">Immerse yourself in Cloud Computing with our dynamic MCQ quiz, designed to test fundamental knowledge.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                <Link to='/ci'>VIEW</Link>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2940&auto=format&fit=crop" 
                alt="GAME DEV CHALLENGE"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">GAME DEV CHALLENGE</h3>
              <p className="text-zinc-600 mb-6">Create an innovative game in 48 hours using cloud-based development tools and platforms.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop" 
                alt="CLOUD SECURITY HACKATHON"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">CLOUD SECURITY HACKATHON</h3>
              <p className="text-zinc-600 mb-6">Test your skills in identifying and fixing security vulnerabilities in cloud infrastructure.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Non-Technical Events */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text"
        >
          Non-Technical Events
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2940&auto=format&fit=crop" 
                alt="GAMING TOURNAMENT"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">GAMING TOURNAMENT</h3>
              <p className="text-zinc-600 mb-6">Compete in our flagship esports tournament featuring popular titles and exciting prizes.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1496989981497-27d69cdad83e?q=80&w=2944&auto=format&fit=crop" 
                alt="TECH TREASURE HUNT"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">TECH TREASURE HUNT</h3>
              <p className="text-zinc-600 mb-6">Navigate through an exciting treasure hunt with tech-themed clues and challenges.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1701127871438-af582cdd8c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="DIGITAL ART SHOWCASE"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">DIGITAL ART SHOWCASE</h3>
              <p className="text-zinc-600 mb-6">Exhibition of digital artworks created by talented artists using cutting-edge tools.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop" 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3">TECH QUIZ</h3>
              <p className="text-zinc-600 mb-6">Test your knowledge of technology, gaming, and pop culture in this engaging quiz competition.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}