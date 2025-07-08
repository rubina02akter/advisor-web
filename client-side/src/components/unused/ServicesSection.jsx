import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaChevronRight } from "react-icons/fa";
import { RocketIcon, UsersIcon, ClockIcon } from "lucide-react";

const courses = [
  {
    title: "Basic Computer",
    items: [
      "Typing: Bangla, English, Arabic",
      "Hardware, Software, Windows Knowledge",
      "Device & Printer Setup",
      "Official Internet",
      "Computer Security & Laws"
    ],
    icon: <FaLaptopCode className="text-blue-600 w-6 h-6" />,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Graphic Design",
    items: [
      "Adobe Illustrator CC",
      "Adobe Photoshop CC",
      "Figma, Ai",
      "Basic Networking",
      "Official Internet"
    ],
    icon: <FaPaintBrush className="text-purple-600 w-6 h-6" />,
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Digital Marketing",
    items: [
      "Keyword Research",
      "SEO (On-page, Off-page, Local)",
      "Facebook Ads Campaign",
      "Content Writing",
      "Email & LinkedIn Marketing"
    ],
    icon: <FaChartLine className="text-green-600 w-6 h-6" />,
    gradient: "from-green-500 to-green-600"
  }
];

const features = [
  {
    icon: <UsersIcon className="text-blue-600 w-6 h-6" />,
    title: "Expert Trainers",
    description: "Certified trainers with real-world experience to ensure learner success."
  },
  {
    icon: <RocketIcon className="text-blue-600 w-6 h-6" />,
    title: "Up-to-date Curriculum",
    description: "Stay aligned with the latest industry trends and academic standards."
  },
  {
    icon: <ClockIcon className="text-blue-600 w-6 h-6" />,
    title: "24/7 Support",
    description: "Get help any time of day—perfect for coders and exam prep alike."
  }
];

export default function ServicesSection() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.p 
          className="text-blue-600 font-semibold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PROFESSIONAL DEVELOPMENT
        </motion.p>
        <motion.h2
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Transform Your Career
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Comprehensive courses designed to take you from beginner to professional level
        </motion.p>
      </motion.div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            {/* Gradient Header */}
            <div className={`h-40 bg-gradient-to-r ${course.gradient} flex items-center justify-center`}>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                {course.icon}
              </div>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{course.title}</h3>
              <ul className="space-y-3">
                {course.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start text-gray-700"
                  >
                    <FaChevronRight className="w-3 h-3 mt-1.5 mr-2 text-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 rounded-lg text-blue-600 font-medium transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

 
    </div>
  );
}