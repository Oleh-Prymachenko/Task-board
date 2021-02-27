import React, { useState } from 'react'
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom'


import './navbar.scss'
import {useCounterContext} from '../../context/counterContext'

export const Navbar = () => {
  const {incrementAbout, incrementSkills, incrementEducation, incrementExperience , incrementProjects,
    activeAbout, activeSkills, activeEducation, activeExperience,activeProjects,
    setActiveAbout,setActiveSkills,setActiveEducation,setActiveExperience,setActiveProjects
  } = useCounterContext();
  
    return (
        <nav>
          <Link to="/about" onClick={!activeAbout ? () => incrementAbout() : setActiveAbout(true)}>about</Link>  
          <Link to="/skills" onClick={!activeSkills ? () => incrementSkills() : setActiveSkills(true)}>skills</Link>
          <Link to="/projects" onClick={!activeEducation ? () => incrementEducation() : setActiveEducation(true) }>projects</Link>
          <Link to="/education" onClick={!activeExperience ? () => incrementExperience() :setActiveExperience(true) }>education</Link>
          <Link to="/experience" onClick={!activeProjects ? () => incrementProjects() : setActiveProjects(true) }>experience</Link>
        </nav>
    );
} 