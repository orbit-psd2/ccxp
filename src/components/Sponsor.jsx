import { motion } from 'framer-motion';
import SP from '../images/Sponsor.jpg'

const sponsors = [
  { name: 'Chan Originals', tier: 'Platinum', logo: [SP] },
  { name: 'CloudSys', tier: 'Gold', logo: 'https://via.placeholder.com/150?text=CloudSys' },
  { name: 'GameStudio', tier: 'Gold', logo: 'https://via.placeholder.com/150?text=GameStudio' },
  { name: 'DevTools', tier: 'Silver', logo: 'https://via.placeholder.com/150?text=DevTools' },
];

export default function Sponsors() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="sponsors" className="py-10 background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 uppercase bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          Our Sponsors
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 w-full aspect-square flex items-center justify-center">
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{sponsor.name}</h3>
              <p className={`text-sm font-medium ${
                sponsor.tier === 'Platinum' ? 'text-purple-600' :
                sponsor.tier === 'Gold' ? 'text-yellow-600' :
                sponsor.tier === 'Silver' ? 'text-gray-600' :
                'text-orange-600'
              }`}>
                {sponsor.tier} Sponsor
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 mb-6">Interested in becoming a sponsor?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Become a Sponsor
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}