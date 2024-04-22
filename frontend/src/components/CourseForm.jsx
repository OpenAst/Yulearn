import React, { useState } from 'react';
import api from '../api';

const CourseForm = ({ onCreate }) => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userData, setUserData] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/api/courses/', { title, content })
    .then((res) => {
      if (res.status === 201) {
        alert("Course created!");
      } else {
        alert("Failed to create course.")
      }
    })
    .catch((error) => {
      console.error("Error creating course: ", error)
      alert("Failed")
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <br />
      <input 
        type="text"
        value={title}
        required
        name="title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea
        value={content}
        required
        name="content"
        id="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <input 
        type="submit"
        value="Submit"
      />
    </form>
  )
}