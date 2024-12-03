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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About Cloud Innovators</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
                Cloud Innovators is an exciting MCQ quiz competition designed to test and showcase your knowledge of cloud computing. This event challenges participants to demonstrate their understanding of cloud technologies, services, and best practices in a fast-paced, competitive environment.
              </p>
              <p className="mb-4 text-[18px]">
                Throughout the competition, you'll be tested on:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>Cloud service models (IaaS, PaaS, SaaS)</li>
                <li>Major cloud providers and their services</li>
                <li>Cloud security and compliance</li>
                <li>Serverless computing and microservices</li>
                <li>Cloud networking and storage solutions</li>
                <li>DevOps and cloud integration</li>
              </ul>
              <p className='text-[18px]'>
                Perfect for cloud enthusiasts, students, and professionals looking to prove their expertise. Participants will not only compete for prizes but also gain valuable insights into the latest trends in cloud computing.
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