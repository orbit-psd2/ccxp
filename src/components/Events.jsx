import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GameMania from '../images/GameManiaMain.jpg'
import GameOnBidz from '../images/GameOnBidz.jpg'
import OpenMic from '../images/OpenMIc.jpg'
import Nostalgia from '../images/Nostalgia.jpg'
import Connectionz from '../images/Connectionz.jpg'
import GameDevWorkshop from '../images/GameDevWorkshop.jpg'


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
          className="text-4xl md:text-5xl font-titillium font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text uppercase"
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
            {/*TECHNICAL EVENT 1*/}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Workshop on Game Development</h3>
              <p className="text-zinc-700 mb-6 text-justify">Embark on an exciting journey into Game Development with our workshop: Introduction to Game Development, Setting Up the Development Environment, Creating Your First Game, Exploring Game Mechanics, and an interactive Q&A Session.</p>
              <Link to='/gdws'>
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

          {/*TECHNICAL EVENT 2*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://www.ingenious.co.uk/wp-content/uploads/2023/08/What-is-Cloud-Computing-and-How-Can-it-Benefit-Our-Company-1024x512.jpeg" 
                alt="CLOUD INNOVATORS"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Cloud 101 (Workshop on Cloud Computing)</h3>
              <p className="text-zinc-700 mb-6 text-justify">Cloud 101 - Explore the fundamentals of cloud computing, set up your environment, deploy web applications, and gain hands-on experience in this comprehensive workshop!</p>
              <Link to='/c101'>
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

          {/*TECHNICAL EVENT 3*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="GAME DEV CHALLENGE"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Code-Computing: The Competitive Programming Challenge</h3>
              <p className="text-zinc-700 mb-6 text-justify">Dive into the world of competitive programming, explore advanced algorithms, solve real-time challenges, and enhance your problem-solving expertise!</p>
              <Link to='/cccp'>
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

        {/* NON-TECHNICAL EVENTS*/}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-titillium font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text uppercase"
        >
          Non-Technical Events
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/*NON TECHNICAL EVENT 1*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="GAMING TOURNAMENT"
                className="w-full h-full object-cover transform hover:scale-110 cursor-pointer transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Design Dash: The Ultimate Creative Design Challenge</h3>
              <p className="text-zinc-700 mb-6 text-justify">Unleash your creativity in this ultimate design challenge. Collaborate, innovate, and bring your ideas to life with exciting design tasks!</p>
              <Link to='/dd'>
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

          {/*NON TECHNICAL EVENT 2*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="TECH TREASURE HUNT"
                className="w-full h-full object-cover transform hover:scale-110 cursor-pointer transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Face Off: The Competitive Gaming Showdown</h3>
              <p className="text-zinc-700 mb-6 text-justify">Gear up for an electrifying gaming showdown! Compete head-to-head, showcase your skills, and emerge as the ultimate gaming champion!</p>
              <Link to='/fo'>
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

          {/*NON TECHNICAL EVENT 3*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="DIGITAL ART SHOWCASE"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">What's on TV: The Ultimate Team Communication Challenge</h3>
              <p className="text-zinc-700 mb-6 text-justify">Test your team's communication and creativity in this ultimate challenge. Decode, convey, and collaborate to claim victory!</p>
              <Link to='/wotv'>
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

          {/*NON TECHNICAL EVENT 4*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src= {OpenMic} 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Open Mic - Express your own unique skills and talents
              </h3>
              <p className="text-zinc-700 mb-6 text-justify">Step into the spotlight and showcase your unique skills and talents. Let your creativity and passion shine!</p>
              <Link to='/om'>
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

          {/*NON TECHNICAL EVENT 5*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src= {GameOnBidz} 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">GameOn Bidz - IPL Auction</h3>
              <p className="text-zinc-700 mb-6 text-justify">Experience the thrill of the IPL auction! Bid, strategize, and build your dream team in this exciting fantasy challenge.</p>
              <Link to='/gob'>
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

          {/*NON TECHNICAL EVENT 6*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src= {Connectionz}
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Connectionz - Find the Key Answers by brainstorming</h3>
              <p className="text-zinc-700 mb-6 text-justify">Engage in a brainstorming session to unlock key answers. Collaborate, think critically, and connect the dots to solve the challenge!</p>
              <Link to='/cz'>
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

          {/*NON TECHNICAL EVENT 7*/}
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 overflow-hidden">
              <img 
                src= {Nostalgia} 
                alt="TECH QUIZ"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform cursor-pointer duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Nostalgia - To Bring your Childhood Back </h3>
              <p className="text-zinc-700 mb-6 text-justify">Relive the magic of your childhood! Join us for a fun-filled experience that brings back cherished memories and classic moments.</p>
              <Link to='/nostalgia'>
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

        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-titillium font-bold text-center mt-16 mb-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text uppercase"
        >
          Hacktahons
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">

          {/*HACKATHON 1*/}  
          <motion.div variants={cardVariants} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow       duration-300">
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
              <Link to='/hackathon1'>
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
                src="https://media.licdn.com/dms/image/v2/D5612AQEqJqAHMdW2_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708394467259?e=1738800000&v=beta&t=NW2bd1TtjnpLWDCOrkCRVTsUM2JXOHjzW0CqqKGTPXM" 
                alt="CLOUD INNOVATORS"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-zinc-800 mb-3 uppercase">Cloudathon: The Ultimate Cloud Computing Hackathon</h3>
              <p className="text-zinc-700 mb-6 text-justify">Dive into the world of cloud computing in this ultimate hackathon! Collaborate, innovate, and build cutting-edge cloud-based solutions in a competitive, high-energy environment.</p>
              <Link to='/hackathon2'>
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

        {/*END OF EVENTS ggs */}
        </motion.div>

        
      </div>
    </section>
  );
}