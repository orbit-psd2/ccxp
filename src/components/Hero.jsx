import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import backgroundVideo from '/hero.mp4';


const AnimatedDigit = ({ value }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
    className="backdrop-blur-md bg-gray-200/30 text-white font-bold rounded-lg p-2 m-1 w-16 h-16 flex items-center justify-center text-2xl shadow-lg"
  >
    {value}
  </motion.div>
);

const Timer = () => {
  const eventDate = new Date('2025-01-30T00:00:00');

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-white text-4xl font-bold">Event has started!</span>;
    } else {
      return (
        <div className="flex flex-col items-center">
          {/* Timer boxes */}
          <div className="flex gap-9 max-sm:gap-5">
            <AnimatedDigit value={days} />
            <AnimatedDigit value={hours} />
            <AnimatedDigit value={minutes} />
            <AnimatedDigit value={seconds} />
          </div>

          {/* Labels */}
          <div className="flex text-gray-200 mt-4 gap-8 max-sm:gap-3 text-[15px] uppercase font-semibold">
            <span className="w-20 max-sm:w-17 text-center">Days</span>
            <span className="w-20 max-sm:w-17 text-center">Hours</span>
            <span className="w-20 max-sm:w-17 text-center">Minutes</span>
            <span className="w-20 max-sm:w-17 text-center">Seconds</span>
          </div>
        </div>
      );
    }
  };


  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Countdown date={eventDate} renderer={renderer} />
    </motion.div>
  );
};

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down the video
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0, type: "spring" }}
          className="mb-4"
        >
          <motion.h2 
            className="text-4xl md:text-[40px] font-bold text-white mt-[100px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            SRM INSTITUTE OF SCIENCE AND TECHNOLOGY
          </motion.h2>
          <motion.h3 
            className="text-2xl md:text-[30px] mt-4 font-poppins font-semibold text-gray-200 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            RAMAPURAM
          </motion.h3>
          <motion.p 
            className="text-lg md:text-xl font-medium text-gray-300 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            presents
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{scale: 1.1}}
          transition={{ delay: 0, type: "spring" }}
          className="flex justify-center cursor-pointer mt-[-18px]"
        >
          <img src= '/glow2.png' alt="CloudCon x Pulse Logo" width={550} height={550} />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className='font-audiowide fire-text hover:opacity-90 transition-opacity duration-500 tracking-wider max-sm:text-[45px]'>CLOUDCON X PULSE'25</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl font-semibold font-right tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-400 mb-[20px] max-sm:text-[25px] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          30 - 31  January 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-[30px]"
        >
          <Timer />
        </motion.div>

        <motion.p 
          className="text-xl md:text-3xl font-titillium uppercase font-semibold text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          A Fusion of Cloud Excellence and Gaming Brilliance
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link to='/events'>
          <motion.a 
            href="#events" 
            className="border-2 border-white hover:bg-white hover:text-black shadow-lg text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 inline-block mb-[100px]"
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => 
              window.scrollTo(0,0)
            }
          >
            Explore Events
          </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}