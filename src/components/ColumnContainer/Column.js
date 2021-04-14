import React from "react";
import { Card } from "../../components/TaskCard/Card";

export const Column = ({
  cards,
  columnInfo,
  localStorage,
  cardInfo,
  setCardInfo,
}) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-name">{columnInfo.props.columnName}</div>
      </div>
      <div className="cards">
        {cards.slice(1).map((localStorage, idx) => (
          <Card
            k={idx}
            localStorage={localStorage}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
        ))}
      </div>
    </div>
  );
};
