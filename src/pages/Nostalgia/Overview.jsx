import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react';

export default function NTOverview7() {
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfxdmmBV4KZbxvcCfB8uEu1l2-n3nrDPSk8Y1AFSjrPOt1k_A/viewform?embedded=true";

  const handleRegister = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/221304/pexels-photo-221304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto px-6 py-[130px] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-[60px] uppercase">
            Nostalgia - To Bring your Childhood Back
          </h1>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">30-01-2025</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">BMS 901, 902</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-7 h-7 text-blue-400" />
                <span className="text-2xl font-pridi">10:00 AM</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-medium mt-5 font-pridi">
                  Registration Fee: ₹ 50/-
                </span>
              </div>
            </div>

            {/* Coordinators */}
            <div className="space-y-9">
              <div>
                <h3 className="text-2xl font-medium mb-3 flex items-center font-pridi">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  Student Co-ordinators
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    Prashanth - 9514300687
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    Hari Prasath - 8825511405
                  </li>
                  <li className="flex items-center font-pridi text-xl">
                    <Phone className="w-5 h-5 mr-2 text-blue-400" />
                    Tamizh Selvi - 6369238242
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium font-pridi mb-3 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-400" />
                  Faculty Co-ordinators
                </h3>
                <ul className="space-y-2 text-xl font-pridi">
                  <li>Dr. Tamilselvi</li>
                  <li>Mrs. Ramaprabha</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <motion.button
            onClick={handleRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 font-poppins py-3 rounded-full tracking-widest font-semibold text-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            REGISTER
          </motion.button>

          {/* Google Form Section */}
          {showForm && (
            <div className="mt-12">
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
