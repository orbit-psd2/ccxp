import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react';
import { useState } from 'react';

export default function ManiaOverview() {
  const [showForm , setShowForm] = useState(false)

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSftd1RkBYsnvZwE8zpeKyrKF0lWz7xl-w4P6tyfLRfj3Erklg/viewform?embedded=true";
  const handleRegister = () => {
    setShowForm(true)
  };
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-[130px] pb-[191px] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl max-sm:text-2xl md:text-5xl font-bold mb-[60px] uppercase">
          Game Mania - The Game Jam
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">23-01-2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">MLCP LAB 3</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">9:00 AM</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium mt-5 font-pridi">FREE REGISTRATION</span>
              </div>
            </div>

            <div className="space-y-9">
              <div>
                <h3 className="text-2xl font-medium mb-3 flex items-center font-pridi">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  Student Co-ordinators
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    Karthik - 8072843147
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    Chandrasekar - 7092201730
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium font-pridi mb-3 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  Faculty Co-ordinators
                </h3>
                <ul className="space-y-2 text-xl font-pridi">
                  <li>Dr. Rajaratna</li>
                  <li>Dr. Gangadevei</li>
                </ul>
              </div>
            </div>
          </div>

          <motion.button onClick={handleRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 font-poppins py-3 rounded-full tracking-widest font-semibold text-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            REGISTER
          </motion.button>

          {showForm && (
            <div className="mt-12 overflow-hidden">
              <iframe
                src={formLink}
                width="640"
                height="1014"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="w-full max-w-4xl mx-auto"
                style={{
                  overflow: 'hidden',
                  scrollbarWidth: 'none', // Firefox
                  WebkitOverflowScrolling: 'none', // Safari
                  '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Edge, Safari
                }}
              >
                Loading…
              </iframe>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}