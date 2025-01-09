import React from 'react';
import { motion } from 'framer-motion';

// Assuming you have these images in your project


const teamMembers = [
  {
    name: "Person 1",
    role: "President",
    description: "The mastermind behind the event's logistics and planning.",
    image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Person 2",
    role: "Technical Lead",
    description: "Ensuring smooth execution of all technical aspects of the event.",
    image: "https://plus.unsplash.com/premium_photo-1734093340226-811584a17683?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Person 3",
    role: "Event Coordinator",
    description: "Spreading the word and building excitement for CloudCon x Pulse.",
    image: '/ECPIC.png'
  },
  {
    name: "Person 4",
    role: "Speaker Coordinator",
    description: "Curating an impressive lineup of industry experts and thought leaders.",
    image: "https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Person 5",
    role: "Volunteer Manager",
    description: "Organizing and leading our dedicated team of volunteers.",
    image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Person 6",
    role: "Sponsorship Director",
    description: "Securing partnerships to make CloudCon x Pulse a reality.",
    image: "https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const TeamPage = () => {
  return (
    <div className="background:radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6; min-h-screen py-12 pt-[100px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center mb-6 text-gray-800 uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet the Team Behind 
        </motion.h1>
        <motion.h1 
          className="text-4xl font-bold text-center mb-12 text-gray-800 uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className='font-audiowide uppercase tracking-widest'>CloudCon x Pulse</span>
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h2>
                <h3 className="text-lg font-semibold text-indigo-600 mb-3">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;

