// CourseList.jsx
import React from 'react';
import Course from '../components/Course';

const CourseList = ({ courses, onDelete }) => {
  return (
    <div>
      <h3>List of Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.title}</strong>: {course.content}
            <button onClick={() => onDelete(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
