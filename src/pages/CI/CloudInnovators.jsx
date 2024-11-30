import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User } from 'lucide-react';

export default function CloudInnovatorsOverview() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-[130px] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            CLOUD INNOVATORS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span className="text-xl">25-03-2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span className="text-xl">SEMINAR HALL 1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-blue-400" />
                <span className="text-xl">10:00 AM</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl font-semibold">Registration Fee: ₹ 50/-</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-400" />
                  Student Co-ordinators
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-400" />
                    Aditya Kumar - 9876543212
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-400" />
                    Sneha Gupta - 9876543213
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-400" />
                  Faculty Co-ordinators
                </h3>
                <ul className="space-y-2">
                  <li>Dr. Rajesh Verma, Prof/CSE</li>
                  <li>Ms. Anjali Singh, Asst.Prof/CSE</li>
                </ul>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            REGISTER
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}