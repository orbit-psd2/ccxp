import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react';
import { useState } from 'react';

export default function NTOverview6() {
  
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfrnNwd3tj85Gk0p_CNoF5gCu9aA2Rl90y_QioqZ8yh5j514g/viewform";
  const handleRegister = () => {
    window.open(formLink, '_blank');
  };
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-[130px] pb-[230px] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl max-sm:text-2xl max-sm:mb-[50px] md:text-5xl font-bold mb-[60px] uppercase">
          Connectionz - Find the Key Answers by brainstorming
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">30-01-2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">HI-TECH HALL</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">10:00 AM - 3:40PM</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium mt-5 font-pridi">Registration Fee: ₹ 50/-</span>
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
                    Jason J Samuels - 78010 21178
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                     J Swethaa - 87780 00392
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                     R Sri Aravindan - 7558157945
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium font-pridi mb-3 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  Faculty Co-ordinators
                </h3>
                <ul className="space-y-2 text-xl font-pridi">
                  <li>Dr J Jean Justus,Asst. Prof/CSE</li>
                  <li>Ms Chandrakala S,Asst. Prof/CSE</li>
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
        </motion.div>
      </div>
    </div>
  );
}