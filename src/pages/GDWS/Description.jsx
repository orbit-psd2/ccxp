import { motion } from 'framer-motion';

export default function TDescription1() {
  return (
    <section className="py-20 background: radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;">
      <div className="container mx-auto px-7">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About the Workshop</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Join us for an immersive workshop on Game Development, designed for beginners and enthusiasts alike. This hands-on session will guide you through the essential concepts of game design, development, and deployment.
              </p>
              <p className="mb-4 text-[18px]">
                Throughout the workshop, you'll explore:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-3 text-[18px] font-medium text-justify">
                <li>Fundamental principles of game design and development</li>
                <li>Introduction to popular game engines like Unity and Unreal Engine</li>
                <li>Basics of coding for game mechanics and interactivity</li>
                <li>3D modeling, animation, and sound design for creating engaging experiences</li>
                <li>Step-by-step guidance in building a simple, playable game</li>
                <li>Industry-standard tools and techniques used in game creation</li>
              </ul>
              <p className='text-[18px] text-justify'>
              Whether you're looking to develop your own games or gain a deeper understanding of the gaming industry, this workshop offers the perfect foundation to jumpstart your journey in game development.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/GDWSVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}