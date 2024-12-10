import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

export default function TRules2() {
  const rules = [
    "Round one is quiz (based on ipl) to filter all the teams and top 10 teams to go into auction",
    "Before auction date player sets will be released with base price to study the auction tactics as only those players will be used in auction",
    "The auction starts from the given set of players already given with different sets",
    "the winners will be selected based on the team balance,form of the players and the common stats as the playing 11 will be the final team",
    "Must have 5 bowling option, a wicketkeeper and must have at least one allrounder (only 4 foreign players)",
  ];

  return (
    <section className="py-14" style={{
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
                <AlertCircle className="w-7 h-7 mr-2 text-orange-500" />
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