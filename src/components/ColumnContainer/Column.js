import React from "react";

export const Column = ({ columnName }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-name">{columnName}</div>
      </div>
      <div className="cards"></div>
    </div>
  );
};
