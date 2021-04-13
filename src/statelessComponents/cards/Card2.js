import React from "react";
import "./card.scss";
import avatar from "../../assets/images/avatar-2.png";

export const Card2 = () => {
  return (
    <div className="card">
      <h2 className="card-name">AMP Project X</h2>
      <span className="until">Until 17.05.2021</span>
      <span className="time">10 hours</span>
      <button className="project-name">Project X</button>
      <div className="card-footer">
        <span className="card-num">BM-675</span>
        <img className="avatar" src={avatar} />
      </div>
    </div>
  );
};