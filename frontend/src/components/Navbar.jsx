import React, { useState } from 'react';


const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('Select')

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <select value={selectedOption} onChange={handleChange}> 
      <option value="Select">Select</option>
      <option value="Courses">Courses</option>
      <option value="Resources">Resources</option>
      <option value="Chat">Chat</option>
      </select>
  )
}

export default Navbar;