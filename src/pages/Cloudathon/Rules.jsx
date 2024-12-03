import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

export default function CloudRules() {
  const rules = [
    "Registration is mandatory for all participants",
    "Participants must bring their own laptops with working internet connection",
    "Basic knowledge of cloud computing is required",
    "The quiz will be conducted in three rounds: Preliminary, Semi-Final, and Final",
    "Use of external resources during the quiz is strictly prohibited",
    "Participants must be present 15 minutes before the start of each round",
    "The decision of the quiz master and judges will be final",
    "Prizes will be awarded to the top 3 performers of the final round"
  ];

  const requirements = [
    "Laptop with stable internet connection",
    "Basic understanding of cloud computing concepts",
    "Knowledge of major cloud service providers",
    "Familiarity with cloud deployment models and service types"
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
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Rules & Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
                <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
                Rules and Regulations
              </h3>
              <ul className="space-y-4 text-[18px] text-justify">
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

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center text-gray-800">
                <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
                Requirements
              </h3>
              <ul className="space-y-4 text-[18px] text-justify">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <Check className="w-5 h-5 mr-2 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{requirement}</span>
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