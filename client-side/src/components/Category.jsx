import { motion as Motion } from "framer-motion";

const categories = [
  {
    name: "Office Management",
    icon: "https://i.ibb.co/ZR015n7R/office-management.png",
  },
  {
    name: "Web Design",
    icon: "https://i.ibb.co/hFL0kp4x/web.png",
  },
  {
    name: "Digital Marketing",
    icon: "https://i.ibb.co/8nZ6wpn4/marketing.png",
  },
  {
    name: "Graphics Design",
    icon: "https://i.ibb.co/HT8hSybZ/Graphics-design.png",
  },
  {
    name: "ComTia A+",
    icon: "https://i.ibb.co/q3Fv3GcY/comtia.png",
  },
];

const Category = () => {
  return (
    <div className="mt-24 mb-12 rounded-2xl justify-center text-center  bg-gradient-to-br from-[#22C3F2]/10 to-[#0322d4]/10">
      <h2 className="text-3xl md:text-4xl pt-8 font-bold mb-4">
        All <span className="text-[#22C3F2]">Categories</span>
      </h2>

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 xl:pl-44 xl:pr-44 md:pl-8 md:pr-8">
        {categories.map((category, index) => (
          <Motion.div
            key={index}
            className="md:w-56 md:h-40 w-40 h-36 bg-white text-black rounded-2xl shadow-md flex flex-col items-center justify-center gap-2 px-4 py-4 cursor-pointer border border-transparent"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#22C3F2",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={category.icon}
              alt={category.name}
              className="md:w-24 md:h-24 w-20 h-18"
            />
            <h2 className="font-semibold text-center text-xl">
              {category.name}
            </h2>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Category;
