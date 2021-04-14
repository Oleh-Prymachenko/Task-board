import React from "react";

export const Card = ({ cardInfo, key }) => {
  return (
    <div className="card" key={key}>
      <h2 className="card-name">{cardInfo.props.cardTitle}</h2>
      <span className="until">Until {cardInfo.props.startDate}</span>
      <span className="time">{cardInfo.props.cardTime}</span>
      <button className="project-name">{cardInfo.props.projectName}</button>
      <div className="card-footer">
        <h2 className="card-name">{cardInfo.props.cardTitle}</h2>
        <span className="card-num">
          BM-
          {cardInfo.props.numOfTask}
        </span>
        <img
          className="avatar"
          alt={cardInfo.props.author}
          src={cardInfo.props.author}
        />
      </div>
    </div>
  );
};
