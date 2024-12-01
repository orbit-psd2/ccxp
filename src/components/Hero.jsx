import { motion } from 'framer-motion';
import CCXP from '../images/CCXPMAIN.png'
import { Link } from 'react-router-dom';

const Shape = ({ className, whileHover }) => (
  <motion.div
    className={`absolute ${className}`}
    whileHover={whileHover}
    transition={{ duration: 0.3 }}
  />
);

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: "radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;"
      }} />
      
      {/* Decorative shapes */}
      <Shape 
        className="w-[100px] h-[100px] bg-orange-300 rounded-full top-20 left-20 opacity-50 cursor-pointer max-sm:hidden"
        whileHover={{ scale: 1.2, rotate: 90 }}
      />
      <Shape 
        className="w-[100px] h-[100px] bg-purple-300 rounded-md top-40 right-20 opacity-50 cursor-pointer max-sm:hidden"
        whileHover={{ scale: 1.2, rotate: -45 }}
      />
      <Shape 
        className="w-[110px] h-[110px] bg-blue-300 rounded-lg bottom-20 left-40 opacity-50 cursor-pointer max-sm:hidden"
        whileHover={{ scale: 1.2, skew: 10 }}
      />
      <Shape 
        className="w-[120px] h-[120px] bg-yellow-300 rounded-full bottom-40 right-40 opacity-50 cursor-pointer max-sm:hidden"
        whileHover={{ scale: 1.2, y: -20 }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{scale: 1.1}}
          transition={{ delay: 0.2, type: "spring" }}
          className="flex justify-center cursor-pointer"
        >
          <img src={CCXP} alt="Logo" width={300} height={300} />
        </motion.div>
        
        <motion.h1 
          className="text-6xl md:text-6xl font-bold bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className='font-audiowide tracking-wider max-sm:text-[45px]'>CLOUDCON</span> <span className='max-sm:text-[48px]'>X</span> <span className='font-audiowide tracking-wider max-sm:text-[45px]'>PULSE'25</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl font-semibold font-poppins bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-violet-400  to-blue-950 bg-clip-text text-transparent mb-5 max-sm:text-[25px]"
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
          <motion.a 
            href="#events" 
            className="border-2 border-zinc-800 hover:bg-slate-900 hover:text-white shadow-lg text-black px-8 py-3 rounded-full text-lg font-semibold transition-all hover:scale-105 inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to='/events'>Explore Events</Link>
          </motion.a>
        </motion.div>
      </motion.div>

    </div>
  );
}