import React from "react";
import { FormattedMessage } from "react-intl";

import "./education.scss";

export const Education = () => {
  const F = FormattedMessage;
  return (
    <div className="container">
      <h2 className="title">
        <F id="education.title" />
      </h2>
      <div className="education">
        <h3 className="education-title">
          <F id="education.body-title" />
        </h3>
        <p className="body-1">
          <F id="education.body-1" />
        </p>
        <p className="body-2">
          <F id="education.body-2" />
        </p>
        <span className="education-date">
          <F id="education.date" />
        </span>
      </div>
    </div>
  );
};
