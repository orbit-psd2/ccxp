import { motion } from 'framer-motion';

export default function TDescription3() {
  return (
    <section className="py-20" style={{
      background: "radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;"
    }}>
      <div className="container mx-auto px-7">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About Code Computing</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Join us for an adrenaline-pumping programming event, designed to challenge and elevate your coding skills. This competition will test your problem-solving abilities, speed, and efficiency under pressure.
              </p>
              <p className="mb-4 text-[18px]">
              Throughout the challenge, you'll engage with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>Diverse programming problems across various domains</li>
                <li>Real-time coding sessions with a strict time limit to solve complex challenges</li>
                <li>Techniques for optimizing code to achieve efficient and scalable solutions</li>
                <li>Peer-to-peer competition to benchmark your skills against fellow enthusiasts</li>
                <li>Insightful discussions and debriefing to enhance your problem-solving approach</li>
              </ul>
              <p className='text-[18px]'>
              Whether you're a seasoned coder or a budding programmer, this event provides the perfect platform to push your limits and showcase your competitive edge in programming!
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
                <source src="/CCCPVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}