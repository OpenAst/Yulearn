import React, { useState, useEffect } from 'react';
import api from '../api';
import Navbar from '../components/Navbar';
import Course from '../components/Course';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = () => {
    api.get("/api/courses/")
      .then((res) => res.data)
      .then((data) => setCourses(data))
      .catch((error) => alert(error));
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
      .catch((error) => alert(error));
  };

  const createCourse = (e) => {
    e.preventDefault();
    api.post("/api/courses/", { title, content })
      .then((res) => {
        if (res.status === 201) {
          alert("Course created!");
          getCourse(); // Refresh the course list after creation
        } else {
          alert("Failed to create course");
        }
      })
      .catch((error) => {
        alert(error);
        getCourse();
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Courses</h2>
        {courses.map((course) => <Course course={course} onDelete={deleteCourse} key={course.id} />
      )}
        <form onSubmit={createCourse}>
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
        <div>
          <h3>List of Courses</h3>
          <ul>
            {courses.map(course => (
              <li key={course.id}>
                <strong>{course.title}</strong>: {course.content}
                <button onClick={() => deleteCourse(course.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
