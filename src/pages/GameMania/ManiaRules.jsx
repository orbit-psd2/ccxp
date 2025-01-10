import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

export default function ManiaRules() {
  const rules = [
    "Participants must bring their own laptops, chargers, and any necessary hardware or software tools",
    "All projects must be built during the hackathon timeframe unless specified otherwise",
    "Teams must adhere to the themes and problem statements provided",
    "Disruptive behavior or unsportsmanlike conduct will lead to disqualification",
    "Ensure your development environment is set up before the hackathon begins to avoid delay",
    "Decisions made by judges and organizers are final and binding",
  ];

  return (
    <section className="py-16" style={{
      background: "radial-gradient(at 69% 63%, #f5eee6 0px, transparent 50%), radial-gradient(at 47.99568981959902% 77.37499872843424%, #e7ebea 0px, transparent 50%), radial-gradient(at 85.81896568166798% 63.62499872843424%, #f3d7ca 0px, transparent 50%), radial-gradient(at 0% 32.37499872843424%, #a9c5e6 0px, transparent 50%), #f5eee6;"
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

          <div className="grid md:grid-cols-1 gap-12">
            <div>
              <h3 className="text-3xl max-sm:text-[22px] font-semibold mb-6 flex items-center text-center uppercase text-gray-800">
                <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
                Rules and Regulations
              </h3>
              <ul className="space-y-4 text-[20px] max-sm:text-[16px] text-justify">
                {rules.map((rule, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-12 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-orange-800 text-center">
              Note: Failure to comply with any of these rules may result in disqualification without refund.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}