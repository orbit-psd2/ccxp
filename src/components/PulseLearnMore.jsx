import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/gamejam.png'

export default function PulseLearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-[80px] mt-[40px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Learn More About <span className='font-audiowide tracking-wider uppercase'>Pulse</span></h1>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">What is <span className='font-audiowide tracking-wider uppercase'>Pulse</span>?</h2>
            <p className="text-gray-600 mb-6">
              Pulse is an exciting tech festival that celebrates innovation, creativity, and the latest advancements in technology. As part of the CloudCon X Pulse'25 event, Pulse focuses on a wide range of tech-related activities, workshops, and competitions designed to inspire and challenge participants.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Key Features of <span className='font-audiowide tracking-wider uppercase'>Pulse</span>:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Engaging tech workshops and seminars</li>
              <li>Competitive coding challenges</li>
              <li>Game development competitions</li>
              <li>Interactive tech demos and exhibitions</li>
              <li>Networking events with tech enthusiasts</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 uppercase">Why Participate in <span className='font-audiowide tracking-wider uppercase'>Pulse?</span></h3>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 uppercase"><span className='font-audiowide tracking-wider uppercase'>Pulse</span> Gallery</h2>
            <div className="grid md:grid-cols-1 gap-6 space-y-4 space-x-5">
              <img src={img1} alt="Pulse Coding Challenge" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="Pulse Game Dev Competition" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="Pulse Tech Workshop" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="Pulse Innovation Showcase" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="Pulse Networking Event" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="Pulse Keynote Speaker" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}