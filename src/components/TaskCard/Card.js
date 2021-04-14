import React from "react";
import { CardInfo } from "./CardInfo";

export const Card = ({ localStorage, openCardInfo, setOpenCardInfo }) => {
  return (
    <div
      className="card"
      onClick={(e) =>
        openCardInfo ? setOpenCardInfo(false) : setOpenCardInfo(true)
      }
    >
      <h2 className="card-name">{localStorage.props.cardTitle}</h2>
      <span className="until">Until {localStorage.props.startDate}</span>
      <span className="time">{localStorage.props.cardTime}</span>
      <button className="project-name">{localStorage.props.projectName}</button>
      <div className="card-footer">
        <h2 className="card-name">{localStorage.props.cardTitle}</h2>
        <span className="card-num">
          BM-
          {localStorage.props.numOfTask}
        </span>
        <img
          className="avatar"
          alt={localStorage.props.author}
          src={localStorage.props.author}
        />
      </div>
    </div>
  );
};
