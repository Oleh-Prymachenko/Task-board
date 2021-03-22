import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const CounterContext = createContext(0);

export const CounterProvider = ({ children }) => {
  const [counterAbout, setCounterAbout] = useState(0);
  const [counterSkills, setCounterSkills] = useState(0);
  const [counterEducation, setCounterEducation] = useState(0);
  const [counterExperince, setCounterExperience] = useState(0);
  const [counterProjects, setCounterProjects] = useState(0);

  const [activeAbout, setActiveAbout] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [activeEducation, setActiveEducation] = useState(false);
  const [activeExperience, setActiveExperience] = useState(false);
  const [activeProjects, setActiveProjects] = useState(false);

  const incrementAbout = () => {
    setCounterAbout(counterAbout + 1);
    setActiveAbout(true);
    setActiveSkills(false);
    setActiveEducation(false);
    setActiveExperience(false);
    setActiveProjects(false);
  };
  const incrementSkills = () => {
    setCounterSkills(counterSkills + 1);
    setActiveSkills(true);
    setActiveAbout(false);
    setActiveEducation(false);
    setActiveExperience(false);
    setActiveProjects(false);
  };
  const incrementEducation = () => {
    setCounterEducation(counterEducation + 1);
    setActiveEducation(true);
    setActiveAbout(false);
    setActiveSkills(false);
    setActiveExperience(false);
    setActiveProjects(false);
  };
  const incrementExperience = () => {
    setCounterExperience(counterExperince + 1);
    setActiveExperience(true);
    setActiveAbout(false);
    setActiveSkills(false);
    setActiveEducation(false);
    setActiveProjects(false);
  };
  const incrementProjects = () => {
    setCounterProjects(counterProjects + 1);
    setActiveProjects(true);
    setActiveAbout(false);
    setActiveSkills(false);
    setActiveEducation(false);
    setActiveExperience(false);
  };

  const tabsObject = {
    about: counterAbout,
    skills: counterSkills,
    projects: counterEducation,
    education: counterExperince,
    experience: counterProjects,
  };

  return (
    <CounterContext.Provider
      value={{
        counterAbout,
        counterSkills,
        counterEducation,
        counterExperince,
        counterProjects,
        incrementAbout,
        incrementSkills,
        incrementEducation,
        incrementExperience,
        incrementProjects,
        tabsObject,
        activeAbout,
        activeSkills,
        activeEducation,
        activeExperience,
        activeProjects,
        setActiveAbout,
        setActiveSkills,
        setActiveEducation,
        setActiveExperience,
        setActiveProjects,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCounterContext = () => useContext(CounterContext);
