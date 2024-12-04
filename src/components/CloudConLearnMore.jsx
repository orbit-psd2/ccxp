import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/gamejam.png'

export default function CloudConLearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Learn More About <span className='font-audiowide tracking-wider uppercase'>CloudCon</span></h1>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is <span className='font-audiowide tracking-wider uppercase'>CloudCon?</span></h2>
            <p className="text-gray-600 mb-6">
              CloudCon is an innovative cloud computing conference that brings together industry experts, developers, and enthusiasts to explore the latest trends and technologies in cloud computing. This event is part of the larger CloudCon X Pulse'25 initiative, focusing on the intersection of cloud technologies and modern development practices.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features of <span className='font-audiowide tracking-wider uppercase'>CloudCon</span></h3>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Expert-led workshops on cloud technologies</li>
              <li>Hands-on sessions with popular cloud platforms</li>
              <li>Networking opportunities with industry professionals</li>
              <li>Cloud computing hackathon</li>
              <li>Presentations on cutting-edge cloud innovations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Attend <span className='font-audiowide tracking-wider uppercase'>CloudCon?</span></h3>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4"><span className='font-audiowide tracking-wider uppercase'>CloudCon</span> Gallery</h2>
            <div className="grid md:grid-cols-1 gap-4 space-x-5 space-y-4">
              <img src={img1} alt="CloudCon Workshop" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="CloudCon Keynote" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="CloudCon Networking" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="CloudCon Hackathon" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="CloudCon Exhibition" className="w-full h-[400px] object-cover rounded-lg" />
              <img src="/placeholder.svg?height=200&width=300" alt="CloudCon Panel Discussion" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}