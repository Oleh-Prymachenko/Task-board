import React from "react";
import { FormattedMessage } from "react-intl";

import "./about.scss";

export const About = () => {
  const F = FormattedMessage;
  return (
    <div className="container">
      <h2 className="title">
        <F id="about.title" />
      </h2>
      <p className="body">
        <F id="about.body" />
      </p>
    </div>
  );
};
