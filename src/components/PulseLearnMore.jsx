import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/MGT.png'

const PulseLearnMore = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "img1",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Learn More About <span className='font-audiowide tracking-wider uppercase'>Pulse</span></h1>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold uppercase text-gray-800 mb-4">What is Pulse?</h2>
            <p className="text-gray-600 mb-6">
              Pulse is an exciting tech festival that celebrates innovation, creativity, and the latest advancements in technology. As part of the CloudCon X Pulse'25 event, Pulse focuses on a wide range of tech-related activities, workshops, and competitions designed to inspire and challenge participants.
            </p>

            <h3 className="text-xl uppercase font-semibold text-gray-800 mb-3">Key Features of Pulse:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Engaging tech workshops and seminars</li>
              <li>Competitive coding challenges</li>
              <li>Game development competitions</li>
              <li>Interactive tech demos and exhibitions</li>
              <li>Networking events with tech enthusiasts</li>
            </ul>

            <h3 className="text-xl font-semibold uppercase text-gray-800 mb-3">Why Participate in Pulse?</h3>
            <p className="text-gray-600 mb-6">
              Pulse offers a dynamic environment for tech enthusiasts to showcase their skills, learn new technologies, and connect with peers in the industry. Whether you're interested in coding, game development, or exploring the latest tech trends, Pulse provides a platform for growth and innovation.
            </p>

            <div className="mt-8">
              <Link 
                to="/events"
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center group hover:bg-purple-700 transition-colors"
              >
                Discover Pulse Events
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">Pulse Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Pulse event ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedImage(src)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged Pulse event" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default PulseLearnMore;