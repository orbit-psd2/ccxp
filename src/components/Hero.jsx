import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import CCXP from '../images/CCXPMAIN.png'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 
      background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;
    " />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center"
        >
          <img src={CCXP} alt="Logo" width={300} height={300} />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-6xl font-bold bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className='font-audiowide tracking-wider'>CLOUDCON</span> <span className='font-audiowide tracking-wider'>PULSE'25</span>
        </motion.h1>
        
        
        <motion.p 
          className="text-xl md:text-3xl font-semibold font-poppins bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-400  to-blue-950 bg-clip-text text-transparent mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          30-31 January 2025
        </motion.p>

        <motion.p 
          className="text-xl md:text-3xl font-semibold text-black mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A Fusion of Cloud Excellence and Gaming Brilliance
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a 
            href="#events" 
            className="border-2 border-zinc-800 hover:bg-slate-900 hover:text-white shadow-lg text-black px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-block mb-6"
          >
            Explore Events
          </a>
        </motion.div>
      </motion.div>

    </div>
  );
}