import { motion } from 'framer-motion';

export default function ManiaDesc() {
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800 uppercase">About Game mania</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4 text-[18px] text-justify">
              Game Mania is an adrenaline-fueled, 8-hour game jam where creativity knows no bounds! Participants are free to create any kind of game, using any tools, assets, and ideas they desire. There’s no theme to restrict your imagination—just bring your best ideas to life and showcase your game development skills. Whether you want to explore new mechanics, test out an art style, or create the next gaming sensation, the only limit is the clock. Ready to take on the challenge?
              </p>
              <p className="mb-4 text-[18px]">
              Event highlights include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-[18px] font-medium space-y-3 text-justify">
                <li>Game development from provided assets to spark creativity and innovation</li>
                <li>A focus on sustainability and environmental themes to inspire impactful storytelling</li>
                <li>Opportunities to showcase skills in programming, design, and narrative building</li>
                <li>Fast-paced game jam environment to test your ability to work under pressure</li>
                <li>Recognition for the most innovative and engaging game aligned with the theme</li>
              </ul>
              <p className='text-[18px]'>
              Whether you’re an aspiring developer or a seasoned creator, Game Mania is your platform to innovate, collaborate, and shine in the world of game development!
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
                <source src="/H1VID.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}