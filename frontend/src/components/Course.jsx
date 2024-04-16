import React, { useState } from "react"

const Course = ({ course, onDelete }) => {
  const formattedDate = new Date(course.created_at).toLocaleString("en-US")
  
  return 
  (
    <div className="course-container">
      <p className='course-title'>{course.title}</p>
      <div className="course-content">{course.content}</div>
      <p className="course-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(course.id) }>Delete</button>
    </div>
  )  
};

export default Course;