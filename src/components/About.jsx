import React from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      About page...
      <Outlet></Outlet>
    </div>
  );
};

export default About;