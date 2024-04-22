import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CourseManagement from './CourseManagement';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <CourseManagement />
      <Footer />
    </div>
  );
}

export default Home;
