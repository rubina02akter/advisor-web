import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  Clock,
  CreditCard,
  DollarSign,
  FileBadge,
  HelpCircle,
} from "lucide-react";
import React from "react";

const faqItems = [
  {
    question: "কোর্সের মেয়াদ কতদিন?",
    answer:
      "কম্পিউটার বেসিক কোর্স ৩ মাস, আর ডিজিটাল মার্কেটিং, গ্রাফিক্স ডিজাইন এর মতো কোর্স ৪-৬ মাসের হয়ে থাকে।",
    icon: <Clock className="text-blue-500 w-5 h-5" />,
  },
  {
    question: "আমি কি পড়ালেখা ও পরীক্ষার পাশাপাশি এই কোর্স শেষ করতে পারব?",
    answer:
      "হ্যাঁ, পড়ালেখার পাশাপাশি তুমি এই কোর্স শেষ করতে পারবে। পাশাপাশি আমাদের স্টুডেন্ট কেয়ার টিম পরীক্ষার সময় এবং একাডেমিক চাপ সামলাতে তোমাকে রুটিন বানাতে প্লাস গাইডলাইন দিয়ে হেল্প করবে। জাস্ট সোশ্যাল মিডিয়াতে বেশি টাইম নষ্ট করবে না। তাহলেই সম্ভব।",
    icon: <FileBadge className="text-green-500 w-5 h-5" />,
  },
  {
    question: "পেমেন্ট কীভাবে করব?",
    answer:
      "ডেবিট/ক্রেডিট কার্ড, মোবাইল ব্যাংকিং ও ব্যাংক ট্রান্সফার করা যাবে। কোর্সে কিস্তির সুবিধাও আছে।",
    icon: <CreditCard className="text-purple-500 w-5 h-5" />,
  },
  {
    question: "কোর্স এর ক্লাস নিয়ে সন্তুষ্ট না হলে কি রিফান্ড পাবো?",
    answer: "হ্যাঁ, প্রথম ৭ দিনের মধ্যে রিফান্ড চাইলেই টাকা ফেরত দেওয়া হয়।",
    icon: <DollarSign className="text-yellow-500 w-5 h-5" />,
  },
  {
    question: "কোর্স গুলোতে কি চাকরির সহায়তা করেন?",
    answer:
      "হ্যাঁ, সিভি তৈরি, ইন্টারভিউ প্রস্তুতি ও পার্টনার কোম্পানিতে চাকরির সুযোগ দেওয়া হয়।",
    icon: <Briefcase className="text-red-500 w-5 h-5" />,
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mixed-font py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center bg-[#22C3F2]/20 px-4 py-2 rounded-full mb-4">
          <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-600 font-medium">FAQS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          তোমার <span className="text-[#22C3F2] ">যত প্রশ্ন</span> আমাদের
          সম্পর্কে
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          আমাদের কোর্স ও সার্ভিস নিয়ে সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া
          হলো।
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
              className={`w-full flex items-center justify-between p-6 text-left transition-all ${
                activeIndex === index ? "bg-blue-50" : "hover:bg-gray-50"
              }`}
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
                  animate={{ opacity: 1, height: "auto" }}
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
