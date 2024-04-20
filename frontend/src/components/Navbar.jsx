import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('Select')

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <select value={selectedOption} onChange={handleChange}> 
      <option value="Select">Select</option>
      <option value="Courses"><Link to="/about">Courses</Link></option>
      <option value="Resources"><Link to="/about">Resources</Link></option>
      <option value="About"><Link to="/about">About</Link>
      </option>
      </select>
  )
}

export default Navbar;