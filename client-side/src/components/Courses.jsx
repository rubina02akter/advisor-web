import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-3">
        📚 আমাদের কোর্স সমূহ
      </h1>
      <p className="mb-8 m-4 md:ml-24 md:mr-24">
        আমাদের কোর্সসমূহ এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি সবচেয়ে
        চাহিদাসম্পন্ন পেশাদার দক্ষতাগুলো অর্জন করতে পারেন। এই প্রোগ্রামের
        মাধ্যমে অর্জিত জ্ঞান, অভিজ্ঞতা ও দক্ষতা আপনাকে আন্তর্জাতিক বাজারে আপনার
        কাঙ্ক্ষিত চাকরি নিশ্চিত করতে সহায়তা করবে।
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.slice(0, 6).map((course) => {
          const {
            _id,
            title,
            originalPrice,
            discountedPrice,
            instructor,
            category,
            image,
          } = course;

          return (
            <div
              key={_id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <div className=" bg-[#F4FCF3] badge text-[#3EBE0A] px-3 py-4 font-medium font-5xl rounded-xl ">
                  {category}
                </div>
                <h2 className="card-title text-2xl">{title}</h2>
                {/* <p className="text-sm text-gray-600">
                  Instructor: {instructor}
                </p> */}
                <div className="text-blue-600 font-bold text-xl">
                  ৳{discountedPrice?.toFixed(0)}{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ৳{originalPrice?.toFixed(0)}
                  </span>
                </div>

                <Link to={`/course/${_id}`}>
                  <div className="text-center w-full">
                    <button className="nav-btn justify-center bg-[#22C3F2] text-white ">
                      <span className="bubble bubble-1"></span>
                      <span className="bubble bubble-2"></span>
                      <span className="bubble bubble-3"></span>
                      <span className="btn-text">View Details</span>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔽 Show All Button */}
      <div className="flex justify-center mt-10">
        <Link to="/all-courses">
          <button className="nav-btn !w-96 btn  h-12 bg-blue-600 text-white rounded-md relative overflow-hidden flex items-center justify-center gap-2">
            <span className="bubble bubble-1"></span>
            <span className="bubble bubble-2"></span>
            <span className="bubble bubble-3"></span>
            <span className="btn-text flex items-center justify-center gap-2">
              See All <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;
