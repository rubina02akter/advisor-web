import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

export default function CourseDetails() {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:4000/course/${id}`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [setCourses]);

  console.log(courses);

  return (
    <div>
      <div>
        <DetailsCard data={courses} />
      </div>
    </div>
  );
}
