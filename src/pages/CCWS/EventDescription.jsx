import { motion } from 'framer-motion';

export default function EventDescription() {
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
              <p className="mb-4 text-[18px]">
                Join us for an immersive day-long workshop on cloud computing fundamentals and practical applications. This hands-on session will guide you through the essentials of cloud technology, from basic concepts to deploying your first application.
              </p>
              <p className="mb-4 text-[18px]">
                Throughout the workshop, you'll learn:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium">
                <li>Cloud computing fundamentals and architecture</li>
                <li>Setting up your cloud development environment</li>
                <li>Deploying web applications to the cloud</li>
                <li>Best practices for cloud security and optimization</li>
                <li>Real-world case studies and practical examples</li>
              </ul>
              <p className='text-[18px] '>
                Perfect for beginners and intermediate developers looking to enhance their cloud computing skills. All participants will receive hands-on experience with industry-standard tools and platforms.
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