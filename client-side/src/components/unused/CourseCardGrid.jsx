import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaFolderOpen, FaTools, FaGlobe } from "react-icons/fa";

const courseData = [
  { title: "Basic Computer", icon: <FaLaptopCode className="text-blue-600 w-8 h-8" />, description: "Master typing, software, hardware and essential digital skills.", color: "from-blue-100 to-blue-200" },
  { title: "Graphic Design", icon: <FaPaintBrush className="text-purple-600 w-8 h-8" />, description: "Learn Adobe Photoshop, Illustrator, Figma and visual communication skills.", color: "from-purple-100 to-purple-200" },
  { title: "Digital Marketing", icon: <FaChartLine className="text-green-600 w-8 h-8" />, description: "SEO, Facebook Ads, content strategy and modern digital promotion.", color: "from-green-100 to-green-200" },
  { title: "Office Management", icon: <FaFolderOpen className="text-yellow-600 w-8 h-8" />, description: "Organizational, document control and communication skills for office roles.", color: "from-yellow-100 to-yellow-200" },
  { title: "Comptia A+", icon: <FaTools className="text-red-500 w-8 h-8" />, description: "Learn core IT skills including troubleshooting, hardware, and networking.", color: "from-red-100 to-red-200" },
  { title: "Web Design", icon: <FaGlobe className="text-indigo-600 w-8 h-8" />, description: "HTML, CSS, JavaScript and responsive web design fundamentals.", color: "from-indigo-100 to-indigo-200" },
];

export default function CourseCardGrid() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center bg-black text-transparent bg-clip-text "
      >
        ----What You’ll Learn----
      </motion.h2>
      <p className="font-thin text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
 
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courseData.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${course.color} p-6 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-blue-500 transition-all`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white rounded-full shadow-md">
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {course.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
