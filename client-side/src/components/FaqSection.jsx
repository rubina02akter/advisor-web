import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, Clock, CreditCard, DollarSign, FileBadge, HelpCircle, Mail, MessageSquare } from "lucide-react";
import React from "react";

const faqItems = [
  {
    question: "What are the course durations?",
    answer: "Our courses range from 4-week intensive programs to 12-week comprehensive training, depending on the subject. Basic computer courses typically take 4 weeks, while advanced programs like Digital Marketing run for 8-12 weeks.",
    icon: <Clock className="text-blue-500 w-5 h-5" />
  },
  {
    question: "Do you provide certificates after completion?",
    answer: "Yes, all our courses include a verifiable digital certificate upon successful completion. Our certificates are recognized by industry partners and can be shared on LinkedIn.",
    icon: <FileBadge className="text-green-500 w-5 h-5" />
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept credit/debit cards, mobile banking, and bank transfers. We also offer installment plans for courses longer than 8 weeks.",
    icon: <CreditCard className="text-purple-500 w-5 h-5" />
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 7-day money-back guarantee for all courses. If you're not satisfied with the first week of instruction, you can request a full refund.",
    icon: <DollarSign className="text-yellow-500 w-5 h-5" />
  },
  {
    question: "Do you offer job placement assistance?",
    answer: "Yes, our career services include resume reviews, interview preparation, and access to our exclusive job board with opportunities from partner companies.",
    icon: <Briefcase className="text-red-500 w-5 h-5" />
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center bg-blue-50 px-4 py-2 rounded-full mb-4">
          <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-600 font-medium">FAQS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our courses and services
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-6 text-left transition-all ${activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h3>
              </div>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

    
    </div>
  );
}