import { motion } from 'framer-motion';

export default function TDescription2() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About Cloud 101</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Dive into the fundamentals of cloud computing with Cloud 101, an engaging workshop designed to introduce participants to the transformative world of cloud technologies. Whether you're a beginner or looking to solidify your basics, this workshop will provide a comprehensive understanding of core cloud concepts and practices.
              </p>
              <p className="mb-4 text-[18px]">
              In this workshop, you'll explore:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>The evolution and importance of cloud computing</li>
                <li>Cloud service models (IaaS, PaaS, SaaS)</li>
                <li>Introduction to major cloud providers (AWS, Azure, GCP)</li>
                <li>Basics of cloud security and compliance</li>
                <li>Real-world applications and industry use cases</li>
                <li>DevOps and cloud integration</li>
              </ul>
              <p className='text-[18px]'>
              Perfect for students, tech enthusiasts, and professionals, Cloud 101 is a stepping stone to mastering the skills needed in today's cloud-driven world. Participants will walk away with practical knowledge, resources, and inspiration to further explore this dynamic field.
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
                <source src="/C101VID2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}