import React from "react";
import { FormattedMessage } from "react-intl";

import "./projects.scss";

export const Projects = () => {
  const F = FormattedMessage;
  return (
    <div className="container">
      <h2 className="title">
        <F id="projects.title" />
      </h2>
      <div className="projects">
        <div className="project">
          <a
            className="project-title"
            href="https://Oleh8888.github.io/Front_project/"
          >
            <strong>
              <F id="projects.project-1-title" />
            </strong>
          </a>
          <p className="body">
            <F id="projects.project-1-p" />
          </p>
        </div>
        <div className="project">
          <a
            className="project-title"
            href="https://Oleh8888.github.io/Stopwatch/"
          >
            <strong>
              <F id="projects.project-2-title" />
            </strong>
          </a>
          <p className="body">
            <F id="projects.project-2-p" />
          </p>
        </div>
        <div className="project">
          <a className="project-title" href="https://Oleh8888.github.io/Quiz/">
            <strong>
              <F id="projects.project-3-title" />
            </strong>
          </a>
          <p className="body">
            <F id="projects.project-3-p" />
          </p>
        </div>
        <div className="project">
          <a
            className="project-title"
            href="https://client-table-base-git-bugfix-oleh8888.vercel.app"
          >
            <strong>
              <F id="projects.project-4-title" />
            </strong>
          </a>
          <p className="body">
            <F id="projects.project-4-p" />
          </p>
        </div>
      </div>
    </div>
  );
};
