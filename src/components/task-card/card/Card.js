import React from "react";

import "./card.scss";
import cardPointer from "../../../assets/images/card-pointer.svg";

export const Card = ({
  cardStorage,
  cardKey,
  cardTranslate,
  cardInfoHandler,
  untilDate,
}) => {
  return (
    <div
      className="card"
      onDoubleClick={(e) => cardInfoHandler(e)}
      style={{
        transform: `TranslateX(${cardTranslate.x}px) TranslateY(${cardTranslate.y}px)`,
      }}
      key={cardKey}
    >
      <h2 className="card-name">{cardStorage.props.cardTitle}</h2>
      <span className="until">Until {untilDate}</span>
      <span className="time">{cardStorage.props.cardTime}</span>
      <button className="project-name">
        {cardStorage.props.cardProjectName}
      </button>
      <div className="card-footer">
        <span className="card-num">
          BM-
          {cardStorage.props.cardNumer}
        </span>
        <img
          className="avatar"
          alt={cardStorage.props.cardAuthor}
          src={cardStorage.props.cardAuthor}
        />
      </div>
      <button
        className="open-cards-info-for-mobiles-btn"
        onClick={(e) => cardInfoHandler(e)}
      >
        <img className="card-pointer" src={cardPointer} />
      </button>
    </div>
  );
};
