import { motion } from 'framer-motion';

export default function NTDescription4() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About open mic</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Take the stage and let your creativity shine at our Open Mic Night! This event is your opportunity to share your talents with an energetic and supportive audience
              </p>
              <p className="mb-4 text-[18px]">
              Event highlights include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3">
                <li>A platform for all talents - from singing and poetry to storytelling and comedy</li>
                <li>A welcoming and inclusive atmosphere for artists of all skill levels</li>
                <li>An enthusiastic audience ready to cheer on your performance</li>
                <li>Freedom to express yourself in any form of artistic creativity</li>
                <li>A chance to connect with fellow performers and showcase your passion</li>
              </ul>
              <p className='text-[18px]'>
              Join us for a night of inspiration, expression, and unforgettable performances at Open Mic!
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
                <source src="/OMVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}