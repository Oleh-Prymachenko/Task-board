import React from "react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import "./favorites.scss";
import { useCounterContext } from "../../context/counterContext";

export const Favorites = () => {
  const F = FormattedMessage;
  const {
    counterAbout,
    counterSkills,
    counterEducation,
    counterExperince,
    counterProjects,
    tabsObject,
  } = useCounterContext();
  const [maxPoints, setMaxPoints] = useState(0);
  const [prefer, setPrefer] = useState("");

  useEffect(() => {
    setBiggerCounter();
  });

  const arrOfCounters = [
    counterAbout,
    counterSkills,
    counterEducation,
    counterExperince,
    counterProjects,
  ];

  const about = "";
  const education = "";
  const skills = "";
  const experience = "";
  const projects = "";

  const setBiggerCounter = () => {
    arrOfCounters.sort((a, b) => {
      return a - b;
    });
    setMaxPoints(arrOfCounters[arrOfCounters.length - 1]);
    for (let key in tabsObject) {
      if (maxPoints === tabsObject[key]) {
        setPrefer(key);
      }
    }
  };

  return (
    <div className="favorites">
      <h3>
        <F id="favorites" />
      </h3>
      <table>
        <tr>
          <th>
            <F
              id="about"
              values={{
                about: about,
              }}
            />
            :
          </th>
          <td>{counterAbout}</td>
        </tr>
        <tr>
          <th>
            <F
              id="education"
              values={{
                education: education,
              }}
            />
            :
          </th>
          <td>{counterEducation}</td>
        </tr>
        <tr>
          <th>
            <F
              id="skills"
              values={{
                skills: skills,
              }}
            />
            :
          </th>
          <td>{counterSkills}</td>
        </tr>
        <tr>
          <th>
            <F
              id="experience"
              values={{
                experience: experience,
              }}
            />
            :
          </th>
          <td>{counterExperince}</td>
        </tr>
        <tr>
          <th>
            <F
              id="projects"
              values={{
                projects: projects,
              }}
            />
            :
          </th>
          <td>{counterProjects}</td>
        </tr>
      </table>
      <div className="score">
        <span>
          <F
            id="like"
            values={{
              prefer: prefer,
            }}
          />
          <br />
        </span>
        <span>
          <F
            id="score"
            values={{
              maxPoints: maxPoints,
            }}
          />
        </span>
      </div>
    </div>
  );
};
