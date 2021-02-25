// import React, {useState, useEffect} from 'react';
// import { About } from './About';
// import { Education } from './Education';
// import { Experience } from './Experience';
// import { Projects } from './Projects';
// import { Skills } from './Skills';
import { Link } from 'react-router-dom'


import { useLoadingActions } from '../../app/counterContext'
import './navbar.scss'

export const Navbar = () => {
  const { increment, decrement } = useLoadingActions();

  const favoritesCounter = () => {
   
  }

    return (
        <nav>
          <Link to="/" >main</Link>  
          <Link to="/about" onClick={() => increment()}>about</Link>  
          <Link to="/skills" onClick={() => increment()}>skills</Link>
          <Link to="/projects" onClick={() => increment()}>projects</Link>
          <Link to="/education" onClick={() => increment()}>education</Link>
          <Link to="/experience" onClick={() => increment()}>experience</Link>
        </nav>
    );
} 