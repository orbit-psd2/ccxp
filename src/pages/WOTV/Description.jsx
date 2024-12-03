import { motion } from 'framer-motion';

export default function NTDescription3() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About What's on TV</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Get ready for a fun-filled event that puts your team's communication and creativity to the test! Teams of two will navigate a series of entertaining scenarios, relying on collaboration and quick thinking to win
              </p>
              <p className="mb-4 text-[18px]">
              Event highlights include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>Dynamic team-based gameplay with one player blindfolded and the other giving clues</li>
                <li>Creative enactments to describe scenes or shows from the TV screen</li>
                <li>Test of communication skills to deliver and interpret hints effectively</li>
                <li>Entertaining and unpredictable scenarios that challenge your teamwork under pressure</li>
                <li>A thrilling experience to bond, laugh, and showcase your collaborative talents</li>
              </ul>
              <p className='text-[18px] text-justify'>
              Join the excitement and see how well you and your partner can sync in What's on TV!
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
                <source src="/WOTVVID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}