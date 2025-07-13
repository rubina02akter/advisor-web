import { BsBrowserSafari } from "react-icons/bs";
import { FaArrowRight, FaCheckCircle, FaCloud } from "react-icons/fa";
import { SiAndroidstudio, SiFigma, SiPostman, SiXcode } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function DetailsCard({ data }) {
  const {
    title,
    description,
    originalPrice,
    discountedPrice,
  
    image,
    lessons,
    duration,
 
    features,
    technology
  } = data;

//   // Helper function to get icons for technologies
// function getIconForTech(tech) {
//   const techLower = tech.toLowerCase();
  
//   if (techLower.includes("vs code") || techLower.includes("code")) {
//     return <VscCode className="text-xl" />;
//   }
//   if (techLower.includes("android")) {
//     return <SiAndroidstudio className="text-xl" />;
//   }
//   if (techLower.includes("cloud")) {
//     return <FaCloud className="text-xl" />;
//   }
//   if (techLower.includes("browser")) {
//     return <BsBrowserSafari className="text-xl" />;
//   }
//   if (techLower.includes("figma")) {
//     return <SiFigma className="text-xl" />;
//   }
//   if (techLower.includes("postman")) {
//     return <SiPostman className="text-xl" />;
//   }
//   if (techLower.includes("xcode")) {
//     return <SiXcode className="text-xl" />;
//   }
  
//   return <VscCode className="text-xl" />;
// }

  return (
    <div className="space-y-10 p-6 lg:p-12 bg-base-100 rounded-xl shadow-xl">
      {/* Top Section - Text + Image */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">{title}</h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-xl font-bold">{duration} Month</p>
              <p className="text-sm text-gray-500">Duration</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-xl font-bold">{lessons}</p>
              <p className="text-sm text-gray-500">Lectures</p>
            </div>
           
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="text-blue-600 font-bold text-2xl">
              ৳ {discountedPrice}{" "}
              <span className="line-through text-gray-400 text-lg">
                ৳ {originalPrice}
              </span>
            </div>
            <Link>
              <div className="w-36">
                <button className="nav-btn text-white bg-gradient-to-br from-[#22C3F2] via-[#22C3F2] to-[#22C3F2]">
                  <span className="bubble bubble-1"></span>
                  <span className="bubble bubble-2"></span>
                  <span className="bubble bubble-3"></span>
                  <span className="btn-text">Enroll Now</span>
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-xl max-w-md w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* What you'll learn */}
      {features && features.length > 0 && (
        <div className="bg-blue-50 rounded-xl p-4 lg:w-1/2">
          <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
          <ul className="grid grid-cols-1  gap-2 text-sm text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-500 mt-1" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Softwares you'll learn */}
      {technology && technology.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 lg:w-1/2">
          <h3 className="text-lg font-semibold mb-3">Softwares You'll Learn</h3>
          <div className="grid grid-cols-1  gap-4 text-sm text-gray-700">
            {technology.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
              <FaArrowRight />  {tech}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

