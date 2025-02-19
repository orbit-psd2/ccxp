import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react';
import { useState } from 'react';

export default function TOverview1() {

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfxdmmBV4KZbxvcCfB8uEu1l2-n3nrDPSk8Y1AFSjrPOt1k_A/viewform";
  const handleRegister = () => {
    window.open(formLink, '_blank');
  };
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-10 py-[129px] text-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl max-sm:text-2xl md:text-5xl font-bold mb-[80px] max-sm:mb-[50px] uppercase">
          Workshop on Game Development
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-7 h-7 text-orange-400" />
                <span className="text-2xl font-pridi">31-01-2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-7 h-7 text-orange-400" />
                <span className="text-2xl font-pridi">MLCP LAB 2</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-7 h-7 text-orange-400" />
                <span className="text-2xl font-pridi">9:00 AM</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium font-pridi mt-5">Registration Fee: ₹ 50/-</span>
              </div>
            </div>

            <div className="space-y-9">
              <div>
                <h3 className="text-2xl font-medium font-pridi mb-3 flex items-center">
                  <User className="w-6 h-6 mr-2 text-orange-400" />
                  Student Co-ordinators
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-orange-400" />
                    Vansh Jain - 93988 53269
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-orange-400" />
                    Rajeev Suri Anand - 80561 51489
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-orange-400" />
                    Nakka Vinayak Sai - 63822 34979
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 flex items-center font-pridi">
                  <User className="w-6 h-6 mr-2 text-orange-400" />
                  Faculty Co-ordinators
                </h3>
                <ul className="space-y-2 text-xl font-pridi">
                  <li>Ms S Sridevi,Asst. Prof/CSE</li>
                  <li>Ms R Sujeetha,Asst. Prof/CSE</li>
                </ul>
              </div>
            </div>
          </div>

          <motion.button onClick={handleRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 tracking-widest rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            REGISTER
          </motion.button>

        </motion.div>
      </div>
    </div>
  );
}