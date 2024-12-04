import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CloudConLearnMore = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Learn More About <span className='font-audiowide uppercase tracking-wider'>CloudCon</span></h1>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold uppercase text-gray-800 mb-4">What is CloudCon?</h2>
            <p className="text-gray-600 mb-6">
              CloudCon is an innovative cloud computing conference that brings together industry experts, developers, and enthusiasts to explore the latest trends and technologies in cloud computing. This event is part of the larger CloudCon X Pulse'25 initiative, focusing on the intersection of cloud technologies and modern development practices.
            </p>

            <h3 className="text-xl font-semibold uppercase text-gray-800 mb-3">Key Features of CloudCon:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Expert-led workshops on cloud technologies</li>
              <li>Hands-on sessions with popular cloud platforms</li>
              <li>Networking opportunities with industry professionals</li>
              <li>Cloud computing hackathon</li>
              <li>Presentations on cutting-edge cloud innovations</li>
            </ul>

            <h3 className="text-xl font-semibold uppercase text-gray-800 mb-3">Why Attend CloudCon?</h3>
            <p className="text-gray-600 mb-6">
              CloudCon offers a unique opportunity to gain in-depth knowledge about cloud computing, learn from industry leaders, and connect with like-minded individuals. Whether you're a seasoned professional or just starting your journey in cloud technologies, CloudCon has something valuable to offer.
            </p>

            <div className="mt-8">
              <Link 
                to="/events"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center group hover:bg-indigo-700 transition-colors"
              >
                Explore CloudCon Events
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">CloudCon Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`CloudCon event ${index + 1}`}
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
          <img src={selectedImage} alt="Enlarged CloudCon event" className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  );
};

export default CloudConLearnMore;