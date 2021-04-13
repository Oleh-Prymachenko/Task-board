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
}) => {
  return (
    <div className="card">
      {/* {cardTitles.map((t, i) => (
        <h2 key={i} className="card-name">
          {t}
        </h2>
      ))} */}
      <h2>{cardTitle}</h2>
      {/* <span className="until">Until {startDate}</span>
          <span className="time">{cardTime}</span>
          <button className="project-name">{projectName}</button> */}
      {/* <div className="card-footer">
            <h2 className="card-name">{car.props.cardTitle}</h2> */}
      <span className="card-num">
        BM-
        {numOfTask}
      </span>
      {/* <img className="avatar" alt={author} src={author} />
          </div> */}
    </div>
  );
};
