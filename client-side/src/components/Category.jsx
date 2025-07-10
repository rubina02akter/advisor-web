
import { FaBriefcase, FaBullhorn, FaCamera, FaChartLine, FaCode, FaGuitar, FaHeartbeat, FaPaintBrush, FaSwimmingPool } from "react-icons/fa";

const Category = () => {

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

    <section className="py-12 px-4 md:px-16 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Explore <br />
        <span className="">Our Top <span className="">Categories</span></span>
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