import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
//   console.log(courses);
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {courses.map((course) => (
        <Course key={course.id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
