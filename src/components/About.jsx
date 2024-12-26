import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-17 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-titillium font-bold text-center mb-16 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className='uppercase'>CloudCon x Pulse</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* CloudCon Section */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4 text-zinc-800 font-audiowide tracking-wider uppercase">CloudCon</h3>
              <p className="text-lg text-zinc-700 mb-6 text-justify">
                CloudCon is the premier cloud computing event, bringing together industry leaders, innovators, and enthusiasts. Dive into the world of cutting-edge cloud technologies, serverless architectures, and DevOps practices. Experience hands-on workshops, insightful talks, and networking opportunities that will elevate your cloud expertise.
              </p>
              <Link to='/cclearnmore' onClick={() => {
            window.scrollTo(0, 0);
          }}>
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="font-poppins shadow-lg border-2 border-zinc-900 px-6 py-2 hover:bg-orange-300 rounded-full font-semibold uppercase transition-all hover:border-orange-300"
              >
                Learn More
              </motion.button>
              </Link>
              
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/cc-video-main.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Pulse Section */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4 text-zinc-800 font-audiowide uppercase tracking-wider">Pulse</h3>
              <p className="text-lg text-zinc-700 mb-6 text-justify">
                Pulse is the heartbeat of gaming technology innovation. From immersive VR experiences to AI-driven game design, Pulse showcases the future of interactive entertainment. Join us for thrilling esports tournaments, game development workshops, and discussions on the latest trends shaping the gaming industry.
              </p>
              <Link to='/pulselearnmore' onClick={() => {
            window.scrollTo(0, 0);
          }}>
              <motion.button 
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className="font-poppins shadow-lg border-2 border-zinc-900 px-6 py-2 hover:bg-purple-400 rounded-full font-semibold uppercase transition-all hover:border-purple-400"
              >
                Discover More
              </motion.button>
              </Link>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <video 
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/pulse.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}