import React from "react";
import "./cardInfo.scss";

export const CardInfo = ({ openCardInfo, localStorage, cardTitle }) => {
  const showCardInfo = openCardInfo
    ? "popup-info display-block"
    : "popup-info display-none";
  return (
    <div className={showCardInfo}>
      {openCardInfo && (
        <div className="card-info">
          <h2 className="card-name">{cardTitle}</h2>
          <span className="until">Until </span>
          <span className="time"></span>
          <button className="project-name"></button>
          <div className="card-footer">
            <h2 className="card-name"></h2>
            <span className="card-num">BM-</span>
            <img className="avatar" />
          </div>
        </div>
      )}
    </div>
  );
};
