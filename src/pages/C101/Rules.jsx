import { motion } from 'framer-motion';
import { AlertCircle, Check } from 'lucide-react';

export default function TRules2() {
  const rules = [
    "Participants must bring their own laptops and have a valid debit or credit card for registration purposes",
    "Internet connectivity must be arranged by participants as the college does not provide internet access",
    "Only essential resources should be created during workshop exercises to avoid unnecessary costs and optimize operations",
    "Punctuality is mandatory; participants must arrive on time to ensure a smooth workshop experience",
    "Efficient resource management during AWS exercises is critical to ensure optimal performance and cost-effectiveness",
    "Participants are encouraged to contribute positively to the group dynamic by adhering to workshop rules and schedules",
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