import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">📚 আমাদের কোর্স সমূহ</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => {
          const {
            _id,
            title,
            subtitle,
            level,
            description,
            features,
            team,
            lessons,
            originalPrice,
            discountedPrice,
            instructor,
            category,
            image,
            enrolled,
            rating,
            status,
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
                <div className="badge badge-success badge-outline mb-2">
                  {category}
                </div>
                <h2 className="card-title text-lg">{title}</h2>
                <p className="text-sm text-gray-600">Instructor: {instructor}</p>
               
                <div className="text-blue-600 font-bold text-base">
                  ${discountedPrice?.toFixed(2)}{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ${originalPrice?.toFixed(2)}
                  </span>
                </div>
                <div className="card-actions mt-3">
                 <Link to={`/course/${_id}`}> <button className="btn btn-primary w-full">View Details</button></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
