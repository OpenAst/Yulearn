// CourseManagement.jsx
import React from 'react';
import CourseList from './CourseForm';
import CourseForm from './CourseForm';
import api from '../api';

const CourseManagement = () => {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    getCourse();
  }, []);

  const getCourse = () => {
    api.get("/api/courses/")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.error("Error fetching courses: ", error);
      });
  }

  const deleteCourse = (id) => {
    api.delete(`/api/courses/${id}/`)
      .then((res) => {
        if (res.status === 204) {
          alert("Course deleted!");
          getCourse(); // Refresh the course list after deletion
        } else {
          alert("Failed to delete course");
        }
      })
      .catch((error) => {
        console.error("Error deleting course: ", error);
        alert("Failed to delete course");
      });
  };

  const createCourse = () => {
    getCourse(); 
  };

  return (
    <div>
      <CourseList courses={courses} onDelete={deleteCourse} />
      <CourseForm onCreate={createCourse} />
    </div>
  );
}

export default CourseManagement;
