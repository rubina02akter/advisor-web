import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [tappedCard, setTappedCard] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Basic Computer",
      subtitle: "Typing, Hardware, Software & Internet",
      level: "Beginner",
      description:
        "Learn fundamental computer skills including Bangla/English typing, device setup, and internet basics.",
      features: [
        "Bangla, English, Arabic Typing",
        "Hardware & Software Basics",
        "Device & Printer Setup",
        "Official Internet, Security & Laws",
      ],
      lessons: 10,
      originalPrice: 50,
      discountedPrice: 35,
      instructor: "Squad X Instructor",
      category: "Computer",
      icon: "🖥️",
    },
    {
      id: 2,
      title: "Office Management",
      subtitle: "Microsoft Office & Networking",
      level: "Intermediate",
      description:
        "Gain office skills with MS Word, Excel, PowerPoint and basic networking.",
      features: [
        "Typing in 3 Languages",
        "Microsoft Office Tools",
        "Advance Hardware Knowledge",
        "Basic Networking",
      ],
      lessons: 15,
      originalPrice: 60,
      discountedPrice: 40,
      instructor: "Squad X Instructor",
      category: "Computer",
      icon: "📑",
    },
    {
      id: 3,
      title: "Graphic Design",
      subtitle: "Illustrator, Photoshop & More",
      level: "Intermediate",
      description:
        "Master design tools and prepare for freelancing marketplaces.",
      features: [
        "Adobe Illustrator cc",
        "Adobe Photoshop cc",
        "Figma & Ai",
        "Marketplace Skills (Fiverr, Freepik)",
      ],
      lessons: 18,
      originalPrice: 80,
      discountedPrice: 55,
      instructor: "Squad X Instructor",
      category: "Freelancing",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Digital Marketing",
      subtitle: "SEO, Ads & Analytics",
      level: "Advanced",
      description:
        "Become a digital marketer with expertise in SEO, Ads, Email & Social Media.",
      features: [
        "Keyword & Competitor Research",
        "Facebook Ads & Chatbot",
        "On/Off Page SEO",
        "GA, GSC, GBP Setup",
      ],
      lessons: 20,
      originalPrice: 90,
      discountedPrice: 60,
      instructor: "Squad X Instructor",
      category: "Freelancing",
      icon: "📈",
    },
    {
      id: 5,
      title: "Web Design",
      subtitle: "HTML, CSS, React",
      level: "Advanced",
      description:
        "Build modern websites using HTML, CSS, Bootstrap, and React.",
      features: [
        "HTML, CSS & Bootstrap",
        "JavaScript Plugins",
        "React Framework",
        "Responsive Design",
      ],
      lessons: 16,
      originalPrice: 95,
      discountedPrice: 65,
      instructor: "Squad X Instructor",
      category: "Development",
      icon: "🌐",
    },
    {
      id: 6,
      title: "ComTIA A+",
      subtitle: "Hardware & Networking",
      level: "Intermediate",
      description: "Professional computer assembling and networking training.",
      features: [
        "Assembling & Recovery",
        "Windows & FTP Server",
        "Device Setup",
        "Basic Networking",
      ],
      lessons: 14,
      originalPrice: 70,
      discountedPrice: 50,
      instructor: "Squad X Instructor",
      category: "Computer",
      icon: "🔧",
    },
    {
      id: 7,
      title: "Advisors Studio",
      subtitle: "Photography & Film Making",
      level: "Beginner",
      description:
        "Creative skills development for video editing, animation, and film making.",
      features: [
        "Content Creation & Cinematography",
        "2D/3D Animation",
        "Sound Design",
        "Studio Recording",
      ],
      lessons: 12,
      originalPrice: 85,
      discountedPrice: 60,
      instructor: "Advisors Studio",
      category: "Creative",
      icon: "🎬",
    },
  ];

  const categories = ["Computer", "Development", "Freelancing", "Creative"];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            ----Discover World's Best Courses----
          </h1>
          <p className="text-lg font-thin max-w-2xl mx-auto">
            Transform your skills with our expert-led coaching programs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Computer", "Development", "Freelancing", "Creative"].map(
            (category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white text-gray-800 border border-gray-300 hover:bg-blue-50 hover:border-blue-200 transition-colors"
              >
                {category}
              </button>
            )
          )}
          <Link to='/courses'>
            <button className="px-4 py-2 rounded-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 transition-colors">
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className="relative bg-white rounded-xl shadow-md overflow-hidden"
              onHoverStart={() => setHoveredCard(course.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setTappedCard(tappedCard === course.id ? null : course.id)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Course Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl">
                {course.icon}
              </div>

              {/* Course Basic Info (Always visible) */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.subtitle}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {course.level}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    {course.discountedPrice > 0 ? (
                      <>
                        <span className="text-lg font-bold text-gray-900">
                          ${course.discountedPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${course.originalPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-green-600">
                        FREE
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">
                    {course.lessons} Lessons
                  </span>
                </div>
              </div>

              {/* Detailed Info (Visible on hover or tap) */}
              {(hoveredCard === course.id || tappedCard === course.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute inset-0 bg-white p-6 shadow-lg rounded-xl"
                >
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{course.subtitle}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          What You'll Learn:
                        </h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          {course.discountedPrice > 0 ? (
                            <>
                              <span className="text-lg font-bold text-gray-900">
                                ${course.discountedPrice.toFixed(2)}
                              </span>
                              <span className="text-sm text-gray-500 line-through ml-2">
                                ${course.originalPrice.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="text-lg font-bold text-green-600">
                              FREE
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">
                          By {course.instructor}
                        </span>
                      </div>

                      <div>
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
