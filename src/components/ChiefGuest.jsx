import { motion } from 'framer-motion';
import CGP from '../images/PICTURE.jpg'

export default function ChiefGuest() {
  return (
    <section className="py-20 background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text"
        >
          Our Chief Guest
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img 
              src={CGP}
              alt="Chief Guest" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 md:pl-8"
          >
            <h3 className="text-3xl font-bold mb-4 text-zinc-800">Dr. Jane Doe</h3>
            <p className="text-lg text-zinc-700 mb-6">
              Dr. Jane Doe is a renowned expert in both cloud computing and gaming technology. With over 20 years of experience in the tech industry, she has been at the forefront of innovation, leading groundbreaking projects at major tech giants and startups alike.
            </p>
            <p className="text-lg text-zinc-700 mb-6">
              Her work in cloud infrastructure has revolutionized how we think about scalability and efficiency, while her contributions to gaming technology have pushed the boundaries of immersive experiences. Dr. Doe is a frequent keynote speaker at international conferences and has authored several best-selling books on the intersection of cloud computing and gaming.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-poppins shadow-lg border-2 border-zinc-900 px-6 py-2 hover:bg-orange-300 rounded-full font-semibold uppercase transition-all hover:border-orange-300"
            >
              Full Bio
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}