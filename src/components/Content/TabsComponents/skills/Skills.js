import React from "react";
import { FormattedMessage } from "react-intl";

import "./skills.scss";

export const Skills = () => {
  const F = FormattedMessage;
  return (
    <div className="container">
      <h2 className="title">
        <F id="skills.title" />
      </h2>
      <div className="skills"></div>
      <table className="skills">
        <tr>
          <th>
            <b>
              <F id="skills.program-lang-title" />
            </b>
          </th>
          <td>JavaScript</td>
        </tr>
        <tr>
          <th>
            <b>
              <F id="skills.technologies-title" />
            </b>
          </th>
          <td>
            React.js, Redux, CSS, Sass, HTML5, linux/UNIX, GraphQL, PostgreSQL,
            figma, Node.js
          </td>
        </tr>
        <tr>
          <th>
            <b>
              <F id="skills.lang-title" />
            </b>
          </th>
          <td>
            <F id="skills.lang-body" />
          </td>
        </tr>
      </table>
    </div>
  );
};
