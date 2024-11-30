import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 py-4 ${
        scrolled ? '' : 'background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="md:text-[22px] font-bold text-zinc-800 max-sm:text-[17px] max-md:text-[22px]"><Link to='/'>CloudCon X Pulse'25</Link></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-zinc-800 hover:text-orange-400 font-outfit uppercase transition-colors font-semibold text-[18px]"><Link to='/'>Home</Link></a>
            <a href="#events" className="text-zinc-800 hover:text-purple-500  font-outfit uppercase transition-colors font-semibold text-[18px]"><Link to='/events'>Events</Link></a>
            <a href="#schedule" className="text-zinc-800 hover:text-orange-400 font-outfit uppercase transition-colors font-semibold text-[18px]">Sponsors</a>
            <a href="#sponsors" className="text-zinc-800 hover:text-purple-500 font-outfit uppercase transition-colors font-semibold text-[18px]">Contact</a>
          </div>
          
          <button className="font-poppins shadow-lg border-2 border-zinc-900 px-5 py-2 hover:bg-orange-300 rounded-full font-semibold uppercase transition-all hover:scale-105  hover:border-orange-300 max-sm:px-3 max-sm:py-1 max-sm:text-[12px] max-md:px-6 max-md:py-2 max-md:text-[15px]  xl:px-6 xl:py-[9px]">
            Register Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}