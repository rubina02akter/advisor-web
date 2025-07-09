// import { motion } from "framer-motion";
import { FaBriefcase, FaBullhorn, FaCamera, FaChartLine, FaCode, FaGuitar, FaHeartbeat, FaPaintBrush, FaSwimmingPool } from "react-icons/fa";

const Category = () => {
  // const categories = [
  //   {
  //     id: 1,
  //     title: "📘 PROFESSIONAL COURSES",
  //     description: "Basic Computer, Office Management, Graphic Design, ComTia A+",
  //     icon: "📘",
  //   },
  //   {
  //     id: 2,
  //     title: "💼 FREELANCING - Learning & Earning",
  //     description: "Graphic Design, Digital Marketing, Web Design",
  //     icon: "💼",
  //   },
  //   {
  //     id: 3,
  //     title: "🎥 ADVISORS STUDIO",
  //     description: "Content Creation, Film Making, 2D/3D Animation, Sound Design",
  //     icon: "🎥",
  //   },
  //   {
  //     id: 4,
  //     title: "💻 SQUAD X TECH",
  //     description: "Future Tech, PC Build, Camera Setup, Gadgets",
  //     icon: "💻",
  //   },
  // ];

  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0 },
  // };


  const categories = [
  { icon: <FaCode />, title: "Development", desc: "Take your journey with this course" },
  { icon: <FaBriefcase />, title: "Business", desc: "Take your journey with this course" },
  { icon: <FaChartLine />, title: "Data Science", desc: "Discover the data science" },
  { icon: <FaBullhorn />, title: "Marketing", desc: "Take up your self in the next level" },
  { icon: <FaSwimmingPool />, title: "Life Styles", desc: "Improved your life style course" },
  { icon: <FaCamera />, title: "Photography", desc: "Become the great photographer" },
  { icon: <FaPaintBrush />, title: "Art and Design", desc: "Grow your design skills" },
  { icon: <FaHeartbeat />, title: "Health and Fitness", desc: "Enjoy the health life with fitness" },
  { icon: <FaGuitar />, title: "Music", desc: "Improve your self with music" },
];

  return (
    // <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="text-center mb-12">
    //       <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
    //         Our Top Categories
    //       </h1>
    //       <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
    //     </div>

    //     <motion.div
    //       variants={container}
    //       initial="hidden"
    //       whileInView="show"
    //       viewport={{ once: true }}
    //       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6"
    //     >
    //       {categories.map((category) => (
    //         <motion.div
    //           key={category.id}
    //           variants={item}
    //           whileHover={{ scale: 1.03 }}
    //           whileTap={{ scale: 0.98, backgroundColor: "#043656", color: "white" }} // Mobile tap effect
    //           className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gradient-to-t from-[#043656] to-[#48AEF3] text-gray-800 hover:text-white active:bg-gradient-to-t active:from-[#043656] active:to-[#48AEF3] active:text-white transition-all duration-300 border border-gray-100 cursor-pointer"
    //         >
    //           <div className="flex items-start">
    //             <span className="text-3xl mr-4 hover:text-white active:text-white transition-colors duration-300">
    //               {category.icon}
    //             </span>
    //             <div>
    //               <h3 className="text-xl font-semibold mb-1 hover:text-white active:text-white transition-colors duration-300">
    //                 {category.title}
    //               </h3>
    //               <p className="hover:text-white active:text-white transition-colors duration-300">
    //                 {category.description}
    //               </p>
    //             </div>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </motion.div>
    //   </div>
    // </section>




    <section className="py-12 px-4 md:px-16 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Explore <br />
        <span className="text-primary">Our Top <span className=" decoration-primary decoration-4">Categories</span></span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 rounded-lg border border-base-300 hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
          >
            <div className="text-3xl text-primary group-hover:text-primary">{cat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-primary">{cat.title}</h3>
              <p className="text-sm text-base-content/70">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


  );
};

export default Category;