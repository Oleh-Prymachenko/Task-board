import React from "react";

export const Column = ({ columnInfo }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-name">{columnInfo.props.columnName}</div>
      </div>
      <div className="cards"></div>
    </div>
  );
};
