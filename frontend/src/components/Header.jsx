import React from 'react';
import { useState, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const [avatarUrl, setAvatarUrl] = useState([])

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate('/profile');
  }

  return (
    
    <div className="header">
      <div className="welcome-text">
        <p>Welcome</p>
        <Navbar />
      </div>
      <div 
        className="avatar" 
        onClick={handleProfileClick}>
        <img src={user.avatarUrl} alt="User Avatar"
        />
      </div>
    </div>
  )
};
export default Header;