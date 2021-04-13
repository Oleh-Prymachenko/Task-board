import React from "react";

export const Card = ({
  cardTitle,
  cardTitles,
  numOfTask,
  projectName,
  startDate,
  cardTime,
  author,
  cards,
  card,
  c,
  key,
}) => {
  return (
    <div className="card" key={key}>
      <h2 className="card-name">{c.props.cardTitle}</h2>
      <span className="until">Until {c.props.startDate}</span>
      <span className="time">{c.props.cardTime}</span>
      <button className="project-name">{c.props.projectName}</button>
      <div className="card-footer">
        <h2 className="card-name">{c.props.cardTitle}</h2>
        <span className="card-num">
          BM-
          {c.props.numOfTask}
        </span>
        <img className="avatar" alt={c.props.author} src={c.props.author} />
      </div>
    </div>
  );
};
