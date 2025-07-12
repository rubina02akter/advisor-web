//

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  // Static demo data (later replace with MongoDB fetch)
  useEffect(() => {
    const demoData = [
      {
        title: "Basic Computer Course",
        category: "Fundamental",
        instructor: "Abdul Karim",
        price: 29.99,
        oldPrice: 49.99,
        image: "https://i.ibb.co/LDP76wDh/office-management.jpg",
      },
      {
        title: "Graphics Design Masterclass",
        category: "Design",
        instructor: "Lamia Noor",
        price: 39.99,
        oldPrice: 59.99,
        image: "https://i.ibb.co/9Hj2n1S0/graphics-design-card.jpg",
      },
      {
        title: "Digital Marketing Bootcamp",
        category: "Marketing",
        instructor: "Raihan Ahmed",
        price: 34.99,
        oldPrice: 54.99,
        image: "https://i.ibb.co/pjwy0pP9/digital-marketing.jpg",
      },
    ];

    setCourses(demoData);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        📚 আমাদের কোর্স সমূহ
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <figure>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="badge badge-success badge-outline mb-2">
                {course.category}
              </div>
              <h2 className="card-title text-lg">{course.title}</h2>
              <p className="text-sm text-gray-600">
                Instructor: {course.instructor}
              </p>
              <div className="text-blue-600 font-bold text-base">
                ${course.price}{" "}
                <span className="line-through text-gray-400 text-sm">
                  ${course.oldPrice}
                </span>
              </div>
              {/* <div className="card-actions mt-3">
                <button className="btn btn-primary w-full">View Details</button>
              </div> */}
              <Link to={'/view-details'}>
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
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
