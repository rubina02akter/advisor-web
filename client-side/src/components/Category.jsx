
import { FaBriefcase, FaBullhorn, FaCamera, FaChartLine, FaCode, FaGuitar, FaHeartbeat, FaPaintBrush, FaSwimmingPool } from "react-icons/fa";

const Category = () => {

  const categories = [
    { 
      icon: <FaCode />, 
      title: "BASIC COMPUTER", 
      desc: "Typing in Bangla/English/Arabic. Hardware & Software basics. Windows, Internet & security fundamentals." 
    },
    { 
      icon: <FaBriefcase />, 
      title: "OFFICE MANAGEMENT", 
      desc: "MS Office (Word, Excel, PPT). Typing skills. Networking basics. Official document handling." 
    },
    { 
      icon: <FaChartLine />, 
      title: "GRAPHIC DESIGN", 
      desc: "Adobe Illustrator & Photoshop. Design principles. Digital artwork creation techniques." 
    },
    { 
      icon: <FaBullhorn />, 
      title: "ComTia A+", 
      desc: "Computer assembly. Networking basics. Windows Server. Data recovery methods." 
    },
    { 
      icon: <FaSwimmingPool />, 
      title: "DIGITAL MARKETING", 
      desc: "SEO, Social Media Ads, Content Writing. Google Analytics. Fiverr/Upwork strategies." 
    },
    { 
      icon: <FaCamera />, 
      title: "Tech Solutions", 
      desc: "PC building. Security systems. Gadgets setup. All-in-one tech solutions." 
    },
    { 
      icon: <FaPaintBrush />, 
      title: "Film Making", 
      desc: "Video production. 2D/3D animation. Sound design. Documentary filmmaking." 
    },
    { 
      icon: <FaHeartbeat />, 
      title: "WEB DESIGN", 
      desc: "HTML, CSS, JavaScript. Bootstrap, React. Responsive website development." 
    },
    { 
      icon: <FaGuitar />, 
      title: "Photography", 
      desc: "DSLR techniques. Video editing. Content creation. Visual storytelling." 
    },
  ];

  return (

    <section className="py-12 px-4 md:px-16 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Explore <br />
        <span className="">Our Top <span className="">Categories</span></span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 rounded-lg border border-base-300 hover:border-[#22C3F2] hover:bg-[#22C3F2] hover:text-white transition-colors cursor-pointer bg-[#22C3F2]/5"
          >
            <div className="text-3xl">{cat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold ">{cat.title}</h3>
              <p className="text-sm font-thin">{cat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;