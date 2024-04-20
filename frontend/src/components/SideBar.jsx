import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import api from '../api';

const Sidebar = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        const res = await api.post('/auth/', {username, password});
        setUsername(username);
        setPassword(password);
        if (res) {
          localStorage.removeItem(ACCESS_TOKEN);
          navigate('/login');
        } else {
          console.error('Logout failed:', res.status)
        }
      } catch (error) {
        alert(error);
      }
    };

  }

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link>
          </li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/resources">Resources</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li>
            <button onClick={handleLogout}>Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );    
};

export default Sidebar;