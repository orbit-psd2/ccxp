import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-[100px] px-4 sm:px-6 lg:px-8" style={{
        background: "radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;"
      }}>
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center uppercase mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <motion.div 
            className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-8">
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <p className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">SRM Institute Of Science And Technology, Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-blue-500" />
                  <span className="text-gray-700">+91 74491 16322, +91 70922 01730</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-blue-500" />
                  <span className="text-gray-700">support@cloudconxpulse.in</span>
                </p>
                <p className="flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-blue-500" />
                  <span className="text-gray-700">January 30 - 31 (9:00 AM - 5:00 PM)</span>
                </p>
              </div>
            </div>
            <div className="h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.7254963344235!2d80.17816267484251!3d13.032254087288674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d11f9ca625%3A0xf77d1733be7b5b74!2sSRM%20Institute%20Of%20Science%20And%20Technology!5e1!3m2!1sen!2sin!4v1733068022013!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}