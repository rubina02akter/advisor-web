import { FaCheckCircle } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Payment from "./Payment";

export default function DetailsCard({ data }) {
  const {
    title,
    description,
    originalPrice,
    discountedPrice,
    image,
    instructor,
    lessons,
    duration,
    features,
    technology,
  } = data;
  // console.log(data)

  return (
    <div className="space-y-10 p-6 lg:p-12 bg-base-100 rounded-xl shadow-xl">
      {/* Top Section - Text + Image */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Course Title: {title}
          </h2>
          <h2 className="text-xl font-bold text-gray-600">
            <span className="text-black">Instructor:</span> {instructor}
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white border border-blue-100 rounded-2xl p-4">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-xl font-bold">{duration} Month</p>
            </div>
            <div className="bg-white border border-blue-100 rounded-2xl p-4">
              <p className="text-sm text-gray-500">Lectures</p>
              <p className="text-xl font-bold">{lessons}</p>
            </div>
          </div>

          <p className="text-gray-600 text-normal leading-relaxed"><span className="text-black font-bold" font>Description: </span>{description}</p>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="text-blue-500 font-bold text-3xl">
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
          <h3 className="text-2xl font-semibold mb-3">What You'll Learn</h3>
          <ul className="grid grid-cols-1  gap-2 text-normal text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCheckCircle className="text-[#22C3F2] mt-1" /> {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Softwares you'll learn */}
      {technology && technology.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4 lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-3">Softwares You'll Learn</h3>
          <div className="grid grid-cols-1  gap-4 text-normal text-gray-700">
            {technology.map((tech, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaFileCode className="text-xl text-[#22C3F2]" /> {tech}
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <Payment/>
      </div>
    </div>
  );
}
