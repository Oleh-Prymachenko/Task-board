import React from "react";

import "./column.scss";
import columnPointerPassive from "../../../assets/images/pointer-passive.png";
import columnPointerActive from "../../../assets/images/pointer-active.png";

export const Column = ({
  columnStorage,
  columnKey,
  openCards,
  setOpenCards,
  columnTranslate,
}) => {
  return (
    <div
      className="column"
      key={columnKey}
      style={{
        transform: `translateX(${columnTranslate.x}px) translateY(${columnTranslate.y}px)`,
      }}
    >
      <div className="column-header">
        <div className="column-name">{columnStorage.props.columnName}</div>
        <button
          className="open-cards-for-mobiles-btn"
          onClick={() => (openCards ? setOpenCards(false) : setOpenCards(true))}
        >
          {openCards ? columnPointerPassive : columnPointerActive}
        </button>
      </div>
      <div className="cards"></div>
    </div>
  );
};
