import { BsBrowserSafari } from "react-icons/bs";
import { FaCheckCircle, FaCloud } from "react-icons/fa";
import { SiAndroidstudio, SiFigma, SiPostman, SiXcode } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ViewDetails = () => {
  return (
    <div className="space-y-10 p-6 lg:p-12 bg-base-100 rounded-xl shadow-xl">
      {/* Top Section - Text + Image */}
      <div className="flex flex-col lg:flex-row gap-8  items-stretch">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            MERN Stack Development
          </h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-xl font-bold">12 Month</p>
              <p className="text-sm text-gray-500">Duration</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-xl font-bold">96</p>
              <p className="text-sm text-gray-500">Lectures</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-xl font-bold">20+</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            MERN Stack is a combination of four different technologies that is
            used to develop a website in an efficient manner. In this course,
            you can gain your expertise in three areas– Web Development, Web
            Design and App Development.
          </p>

          <div className="flex flex-wrap gap-4">
            <p className="text-3xl font-extrabold">৳ ৮,০০০</p>
            <Link>
              <div className="w-36">
                <button className=" nav-btn text-white bg-gradient-to-br from-[#22C3F2] via-[#22C3F2] to-[#22C3F2]">
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
            src="/src/assets/images/office management.jpg"
            alt="MERN Stack"
            className="rounded-xl  max-w-md"
          />
        </div>
      </div>

      {/* What you'll learn */}
      <div className="bg-blue-50 rounded-xl p-4 lg:w-1/2">
        <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" /> Handle advanced
            techniques like Dimensionality Reduction
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" /> Reinforcement
            learning upper confidence bound
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" /> Handle specific
            topics like Reinforcement Learning
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" /> Model Selection and
            Boosting cross validation
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" /> Know which ML model
            to choose for each problem
          </li>
          <li className="flex items-start gap-2">
            <FaCheckCircle className="text-blue-500 mt-1" /> Use ML for personal
            purpose of machine
          </li>
        </ul>
      </div>
      {/* Softwares you'll learn */}
      <div className="bg-gray-50 rounded-xl p-4 lg:w-1/2">
        <h3 className="text-lg font-semibold mb-3">Softwares You'll Learn</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <VscCode className="text-xl" /> VS Code
          </div>
          <div className="flex items-center gap-2">
            <SiAndroidstudio className="text-xl" /> Android Studio
          </div>
          <div className="flex items-center gap-2">
            <FaCloud className="text-xl" /> Cloud Server
          </div>
          <div className="flex items-center gap-2">
            <BsBrowserSafari className="text-xl" /> Web Browser
          </div>
          <div className="flex items-center gap-2">
            <SiFigma className="text-xl" /> Figma
          </div>
          <div className="flex items-center gap-2">
            <SiPostman className="text-xl" /> Postman
          </div>
          <div className="flex items-center gap-2">
            <SiXcode className="text-xl" /> Xcode
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
