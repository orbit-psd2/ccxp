import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recz from '../C101/RecCZZ.jpg'
import recgdws from '../CZZ/RecGDWS.jpg'

const EventCard = ({ title, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 ${isHovered ? 'transform scale-100' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-[220px] object-cover" />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2 text-gray-800 uppercase">{title}</h4>
        <p className="text-[16px] text-gray-600 mb-4">{description}</p>
        <Link 
          to={link}
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center group"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          View
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
};

const RecommendedEventsCZ = () => {
  return (
    <div className="rounded-lg p-6 mb-6 background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 uppercase">Recommended Events</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <EventCard 
          title="Face Off: The Competitive Gaming Showdown"
          description="Gear up for an electrifying gaming showdown! Compete head-to-head, showcase your skills, and emerge as the ultimate gaming champion!"
          image= ""
          link="/fo"
        />
        <EventCard 
          title="Code-Computing - Programming Challenge"
          description="Step into the spotlight and showcase your unique skills and talents. Let your creativity and passion shine!"
          image= {recz}
          link="/cz"
        />
        <EventCard 
          title="Workshop on Game Development"
          description="Embark on an exciting journey into Game Development with our workshop: Introduction to Game Development, Setting Up the Development Environment, Creating Your First Game, Exploring Game Mechanics, and an interactive Q&A Session."
          image= {recgdws}
          link="/gdws"
        />
      </div>
    </div>
  );
};

export default RecommendedEventsCZ;