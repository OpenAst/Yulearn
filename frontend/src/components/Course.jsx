import React, { useState } from "react"
import Module from './Module';

const Course = ({ course, onDelete }) => {
  const formattedDate = new Date(course.created_at).toLocaleString("en-US")

  return (
    <div className="course-container">
      <h2 className='course-title'>{course.title}</h2>
      <p className="course-desc">{course.description}</p>
      <p className="course-instructor">{course.author}</p>
      <p className="course-date">{formattedDate}</p>

      <h3 className="course-modules">Modules:</h3>
      <ul>
        {course.modules.map(module => {

          <li key={module.id}>
            <Module module={module} />
          </li>  
        }
        )};
      </ul>
    </div>
  )  
};

export default Course;