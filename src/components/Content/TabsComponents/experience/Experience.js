import React from "react";
import { FormattedMessage } from "react-intl";

import "./experience.scss";

export const Experience = () => {
  const F = FormattedMessage;
  return (
    <div className="container">
      <h2 className="title">
        <F id="experience.title" />
      </h2>
      <div className="works">
        <div className="work">
          <span className="work-title">
            <F id="experience.work-1" />
          </span>
          <p className="body">
            <F id="experience.p-1" />
          </p>
          <span className="date">
            <em>2016 - 2019</em>
          </span>
        </div>
        <div className="work">
          <span className="work-title">
            <F id="experience.work-2" />
          </span>
          <p className="body">
            <F id="experience.p-2" />
          </p>
          <span className="date">
            <em>
              <F id="experience.date-2" />
            </em>
          </span>
        </div>
        <div className="work">
          <span>
            <span className="work-title">
              <F id="experience.work-3" />
            </span>
          </span>
          <p className="body">
            <F id="experience.p-3" />
          </p>
          <span className="date">
            <em>
              <F id="experience.date-3" />
            </em>
          </span>
        </div>
      </div>
    </div>
  );
};
