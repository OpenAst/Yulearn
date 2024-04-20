import React from 'react';
import {useNavigate} from 'react-router-dom';

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate('/profile');
  }

  return (
    
    <div className="header">
      <div className="welcome-text">
        <p>Welcome, {user.username}</p>
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