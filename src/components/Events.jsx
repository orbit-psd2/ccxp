import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GameMania from '../images/GameManiaMain.jpg'
import GameOnBidz from '../images/GameOnBidz.jpg'
import OpenMic from '../images/OpenMIc.jpg'
import Nostalgia from '../images/Nostalgia.jpg'
import Connectionz from '../images/Connectionz.jpg'
import GameDevWorkshop from '../images/GameDevWorkshop.jpg'
import C101 from '../images/c101.png'
import CodeComputing from '../images/codecomputing.png'
import Cloudathon from '../images/cloudathon.png'
import DesginDash from '../images/dd.png'
import FaceOff from '../images/fo.png'
import WOTV from '../images/wotv.png'

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
    <section className="pb-[100px] pt-[100px] px-4" style={{
      background: "radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;"
    }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Hackathons */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-titillium font-bold text-center mb-16 tracking-wider bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text uppercase"
          style={{
            WebkitTextStroke: '2px #8B4513', // Stroke width and color for WebKit browsers
            textStroke: '1px #8B4513',      // Fallback for other browsers
          }}
        >
          Hackathons
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {/*HACKATHON 1*/}  
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={GameMania}
                alt="A DAY WITH CLOUD-WORKSHOP"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Game Mania - The Game Jam</h3>
              <p className="text-zinc-700 mb-6 text-justify">Join the ultimate Game Jam! Collaborate, innovate, and race against the clock to create unique games. Challenge your creativity and coding skills in this fast-paced, fun-filled competition!</p>
              <Link to='/hackathon1'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          {/*HACKATHON 2*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={Cloudathon} 
                alt="CLOUD INNOVATORS"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Cloudathon: The Ultimate Cloud Computing Hackathon</h3>
              <p className="text-zinc-700 mb-6 text-justify">Dive into the world of cloud computing in this ultimate hackathon! Collaborate, innovate, and build cutting-edge cloud-based solutions in a competitive, high-energy environment.</p>
              <Link to='/hackathon2'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Events */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-titillium font-bold text-center tracking-wider mb-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text uppercase"
          style={{
            WebkitTextStroke: '2px #6A1B9A', // Deep Violet
            textStroke: '2px #6A1B9A',
          }}

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
                src={GameDevWorkshop} 
                alt="A DAY WITH CLOUD-WORKSHOP"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Workshop on Game Development</h3>
              <p className="text-zinc-700 mb-6 text-justify">Embark on an exciting journey into Game Development with our workshop: Introduction to Game Development, Setting Up the Development Environment, Creating Your First Game, Exploring Game Mechanics, and an interactive Q&A Session.</p>
              <Link to='/gdws'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={C101} 
                alt="CLOUD INNOVATORS"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Cloud 101 (Workshop on Cloud Computing)</h3>
              <p className="text-zinc-700 mb-6 text-justify">Explore the fundamentals of cloud computing, set up your environment, deploy web applications, and gain hands-on experience in this comprehensive workshop!</p>
              <Link to='/c101'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={CodeComputing} 
                alt="GAME DEV CHALLENGE"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Code-Computing: The Competitive Programming Challenge</h3>
              <p className="text-zinc-700 mb-6 text-justify">Dive into the world of competitive programming, explore advanced algorithms, solve real-time challenges, and enhance your problem-solving expertise!</p>
              <Link to='/cccp'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Non-Technical Events */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-titillium font-bold tracking-wider text-center mb-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text uppercase"
          style={{
            WebkitTextStroke: '2px #8B4513', // Stroke width and color for WebKit browsers
            textStroke: '1px #8B4513',      // Fallback for other browsers
          }}
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
                src={DesginDash} 
                alt="GAMING TOURNAMENT"
                className="w-full h-full object-cover transform hover:scale-110 cursor-pointer transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Design Dash: The Ultimate Creative Design Challenge</h3>
              <p className="text-zinc-700 mb-6 text-justify">Unleash your creativity in this ultimate design challenge. Collaborate, innovate, and bring your ideas to life with exciting design tasks!</p>
              <Link to='/dd'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={FaceOff} 
                alt="TECH TREASURE HUNT"
                className="w-full h-full object-cover transform hover:scale-110 cursor-pointer transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Face Off: The Competitive Gaming Showdown</h3>
              <p className="text-zinc-700 mb-6 text-justify">Gear up for an electrifying gaming showdown! Compete head-to-head, showcase your skills, and emerge as the ultimate gaming champion!</p>
              <Link to='/fo'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={WOTV} 
                alt="DIGITAL ART SHOWCASE"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">What's on TV: The Ultimate Team Communication Challenge</h3>
              <p className="text-zinc-700 mb-6 text-justify">Test your team's communication and creativity in this ultimate challenge. Decode, convey, and collaborate to claim victory!</p>
              <Link to='/wotv'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={OpenMic} 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Open Mic - Express your own unique skills and talents
              </h3>
              <p className="text-zinc-700 mb-6 text-justify">Step into the spotlight and showcase your unique skills and talents. Let your creativity and passion shine!</p>
              <Link to='/om'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={GameOnBidz} 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">GameOn Bidz - IPL Auction</h3>
              <p className="text-zinc-700 mb-6 text-justify">Experience the thrill of the IPL auction! Bid, strategize, and build your dream team in this exciting fantasy challenge.</p>
              <Link to='/gob'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={Connectionz}
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Connectionz - Find the Key Answers by brainstorming</h3>
              <p className="text-zinc-700 mb-6 text-justify">Engage in a brainstorming session to unlock key answers. Collaborate, think critically, and connect the dots to solve the challenge!</p>
              <Link to='/cz'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src={Nostalgia} 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Nostalgia - To Bring your Childhood Back </h3>
              <p className="text-zinc-700 mb-6 text-justify">Relive the magic of your childhood! Join us for a fun-filled experience that brings back cherished memories and classic moments.</p>
              <Link to='/nostalgia'
              onClick={() => {
                window.scrollTo(0, 0);
              }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2 rounded-full font-semibold inline-flex items-center group"
              >
                VIEW
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}