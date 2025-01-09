import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarTeam() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-50 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 py-4 ${
        scrolled ? '' : 'background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="md:text-[22px] font-bold font-audiowide tracking-widest nav-text text-zinc-800 max-sm:text-[17px] max-md:text-[22px] uppercase max-sm:pt-[12px]"><Link to='/'>CloudCon X Pulse'25</Link></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a className={`${scrolled ? 'text-zinc-800' : 'text-black'} tracking-wider hover:text-orange-500 duration-300 font-faculty uppercase transition-colors font-semibold text-[18px]`}><Link to='/' onClick={() => {
              window.scrollTo(0, 0);
            }}>Home</Link></a>
            <a className={`${scrolled ? 'text-zinc-800' : 'text-black'} tracking-wider hover:text-purple-500 duration-300 font-faculty uppercase transition-colors font-semibold text-[18px]`}><Link to='/events' onClick={() => {
              window.scrollTo(0, 0);
            }}>Events</Link></a>
            <a className={`${scrolled ? 'text-zinc-800' : 'text-black'} tracking-wider hover:text-orange-500 duration-300 font-faculty uppercase transition-colors font-semibold text-[18px]`}><Link to='/contact' onClick={() => {
              window.scrollTo(0, 0);
            }}>Contact</Link></a>
            {/*<a className={`${scrolled ? 'text-zinc-800' : 'text-black'} tracking-wider hover:text-purple-500 duration-300 font-faculty uppercase transition-colors font-semibold text-[18px]`}><Link to='/team' onClick={() => {
              window.scrollTo(0, 0);
            }}>Team</Link></a>*/}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-zinc-800 focus:outline-none">
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-around"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className={`w-full h-0.5 ${scrolled ? 'bg-zinc-800' : 'bg-black'} block`}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className={`w-full h-0.5 ${scrolled ? 'bg-zinc-800' : 'bg-black'} block`}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className={`w-full h-0.5 ${scrolled ? 'bg-zinc-800' : 'bg-black'} block`}
                ></motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50 md:hidden"
          >
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 text-zinc-800 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-12">
              <Link to='/' className="text-zinc-800 hover:text-orange-400 font-outfit uppercase transition-colors font-semibold text-[18px]" onClick={toggleMenu}>Home</Link>
              <Link to='/events' className="text-zinc-800 hover:text-purple-500 font-outfit uppercase transition-colors font-semibold text-[18px]" onClick={toggleMenu}>Events</Link>
              <Link to='/contact' className="text-zinc-800 hover:text-orange-400 font-outfit uppercase transition-colors font-semibold text-[18px]" onClick={toggleMenu}>Contact</Link>
              {/*<Link to='/contact' className="text-zinc-800 hover:text-orange-400 font-outfit uppercase transition-colors font-semibold text-[18px]" onClick={toggleMenu}>Team</Link>*/}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}