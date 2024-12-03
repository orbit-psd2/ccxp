import { motion } from 'framer-motion';

export default function CloudDesc() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About Cloudathon</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Join the 8-hour innovation sprint where cloud computing meets Web3! Cloudathon 2025 brings together the brightest minds to develop transformative solutions in a dynamic, fast-paced setting
              </p>
              <p className="mb-4 text-[18px]">
              Event highlights include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>Hackathon with a focus on cloud technologies and Web3 integration</li>
                <li>Opportunities to build solutions using decentralized applications and blockchain</li>
                <li>Mentorship from industry experts and faculty to guide your project</li>
                <li>Pre-event selection process to identify the best teams for the in-person hackathon</li>
                <li>Evaluation based on innovation, technical execution, and impact</li>
              </ul>
              <p className='text-[18px]'>
              Compete, create, and collaborate to make a difference in Cloudathon 2025!
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
                <source src="/CCWSVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}