import { motion } from 'framer-motion';

export default function NTDescription5() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About GameOn Bidz</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Experience the thrill of the IPL auction in this exciting team-based event! Step into the role of an IPL team owner, strategize with your teammates, and compete to build the ultimate dream team.
              </p>
              <p className="mb-4 text-[18px]">
              Event highlights include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>Team-based gameplay with groups of three participants</li>
                <li>Realistic auction simulation to bid on players and form your team</li>
                <li>Budget management to make smart, strategic decisions</li>
                <li>A test of cricket knowledge and analytical skills to outsmart your rivals</li>
                <li>A fun and competitive atmosphere that brings cricket and strategy together</li>
              </ul>
              <p className='text-[18px] text-justify'>
              Whether you're a cricket enthusiast or a strategic mastermind, GameOn Bidz is your chance to showcase your skills and assemble a championship-worthy team!
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
                <source src="/GOBVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}