
// // import { FaBriefcase, FaBullhorn, FaCamera, FaChartLine, FaCode, FaGuitar, FaHeartbeat, FaPaintBrush, FaSwimmingPool } from "react-icons/fa";

// // const Category = () => {

// //   const categories = [
// //     { 
// //       icon: <FaCode />, 
// //       title: "BASIC COMPUTER", 
// //       desc: "Typing in Bangla/English/Arabic. Hardware & Software basics. Windows, Internet & security fundamentals." 
// //     },
// //     { 
// //       icon: <FaBriefcase />, 
// //       title: "OFFICE MANAGEMENT", 
// //       desc: "MS Office (Word, Excel, PPT). Typing skills. Networking basics. Official document handling." 
// //     },
// //     { 
// //       icon: <FaChartLine />, 
// //       title: "GRAPHIC DESIGN", 
// //       desc: "Adobe Illustrator & Photoshop. Design principles. Digital artwork creation techniques." 
// //     },
// //     { 
// //       icon: <FaBullhorn />, 
// //       title: "ComTia A+", 
// //       desc: "Computer assembly. Networking basics. Windows Server. Data recovery methods." 
// //     },
// //     { 
// //       icon: <FaSwimmingPool />, 
// //       title: "DIGITAL MARKETING", 
// //       desc: "SEO, Social Media Ads, Content Writing. Google Analytics. Fiverr/Upwork strategies." 
// //     },
// //     { 
// //       icon: <FaCamera />, 
// //       title: "Tech Solutions", 
// //       desc: "PC building. Security systems. Gadgets setup. All-in-one tech solutions." 
// //     },
// //     { 
// //       icon: <FaPaintBrush />, 
// //       title: "Film Making", 
// //       desc: "Video production. 2D/3D animation. Sound design. Documentary filmmaking." 
// //     },
// //     { 
// //       icon: <FaHeartbeat />, 
// //       title: "WEB DESIGN", 
// //       desc: "HTML, CSS, JavaScript. Bootstrap, React. Responsive website development." 
// //     },
// //     { 
// //       icon: <FaGuitar />, 
// //       title: "Photography", 
// //       desc: "DSLR techniques. Video editing. Content creation. Visual storytelling." 
// //     },
// //   ];

// //   return (

// //     <section className="py-12 px-4 md:px-16 bg-base-100">
// //       <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
// //         Explore <br />
// //         <span className="">Our Top <span className="">Categories</span></span>
// //       </h2>

// //       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
// //         {categories.map((cat, idx) => (
// //           <div
// //             key={idx}
// //             className="flex items-start gap-4 p-6 rounded-lg border border-base-300 hover:border-[#22C3F2] hover:bg-[#22C3F2] hover:text-white transition-colors cursor-pointer bg-[#22C3F2]/5"
// //           >
// //             <div className="text-3xl">{cat.icon}</div>
// //             <div>
// //               <h3 className="text-lg font-semibold ">{cat.title}</h3>
// //               <p className="text-sm font-thin">{cat.desc}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Category;


// import React from "react";
// import { motion } from "framer-motion";

// const categories = [
//   {
//     name: "Artificial Intelligence",
//     icon: "/58f6a281-4420-4f51-b672-fb1e26126bf4.png", // uploaded image path
//   },
//   {
//     name: "Creative",
//     icon: "/58f6a281-4420-4f51-b672-fb1e26126bf4.png",
//   },
//   {
//     name: "Marketing",
//     icon: "/58f6a281-4420-4f51-b672-fb1e26126bf4.png",
//   },
//   {
//     name: "Career",
//     icon: "/58f6a281-4420-4f51-b672-fb1e26126bf4.png",
//   },
// ];

// const Category = () => {
//   return (
//     <div className="flex flex-wrap justify-center items-center gap-6 p-6 bg-gray-100">
//       {categories.map((category, index) => (
//         <motion.div
//           key={index}
//           className="w-64 h-32 bg-blue-500 text-white rounded-xl shadow-lg flex items-center px-4 gap-4"
//           whileHover={{ y: -5 }}
//           animate={{ y: [0, -5, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <img src={category.icon} alt={category.name} className="w-12 h-12" />
//           <h2 className="font-bold text-lg">{category.name}</h2>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Category;

import { motion } from "framer-motion";

const categories = [
  {
    name: "Basic Computer",
    icon: "https://i.ibb.co/Vp3DdSbT/basic-computer.png",
  },
  {
    name: "Web & Software",
    icon: "https://i.ibb.co/Vp3DdSbT/basic-computer.png",
  },
  {
    name: "Digital Marketing",
    icon: "https://i.ibb.co/N6fbySYj/432-4329489-start-digital-marketing-performance-marketing-logo-hd-png.png",
  },
  {
    name: "Graphics Design",
    icon: "https://i.ibb.co/FbfTsgC7/graphics.png",
  },
  {
    name: "Film & Media",
    icon: "https://i.ibb.co/HT8hSybZ/Graphics-design.png",
  },
  // {
  //   name: "English Language",
  //   icon: "https://i.ibb.co/Vp3DdSbT/basic-computer.png",
  // },
];

const Category = () => {
  return (
    <div className="mt-24 mb-12 rounded-2xl justify-center text-center  bg-gradient-to-br from-[#22C3F2]/10 to-[#0322d4]/10">
       <h2 className="text-3xl md:text-4xl pt-8 font-bold mb-4">
            All  <span className="text-[#22C3F2]">Categories</span>
          </h2>


          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 lg:pl-44 lg:pr-44 pb-12">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          className="md:w-56 md:h-40 w-40 h-36 bg-white text-black rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 px-4 py-4 cursor-pointer border border-transparent"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#22C3F2",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.97 }}
        >
          <img src={category.icon} alt={category.name} className="w-20 h-16" />
          <h2 className="font-semibold text-center text-xl">{category.name}</h2>
        </motion.div>
      ))}
    </div>
    </div>
    
  );
};

export default Category;
