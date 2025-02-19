import { motion } from 'framer-motion';

export default function NTDescription1() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About Desgin Dash</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Unleash your creativity in this thrilling design competition, where quick thinking and adaptability are key. Participants will face exciting challenges and showcase their design talents under pressure.
              </p>
              <p className="mb-4 text-[18px]">
              Throughout the event, you'll experience:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>On-the-spot design challenges with topics revealed during the competition</li>
                <li>Tasks to create stunning posters, logos, and more within a tight time frame</li>
                <li>Opportunities to showcase your creativity and design skills in a fast-paced environment</li>
                <li>Peer competition to push your creative boundaries and inspire new ideas</li>
                <li>Feedback and recognition for your innovative designs</li>
              </ul>
              <p className='text-[18px]'>
              Whether you're an experienced designer or a passionate creative, Design Dash is the perfect stage to let your ideas shine!
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
                <source src="/DDVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}