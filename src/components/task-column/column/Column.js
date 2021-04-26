import React from "react";
import PropTypes from "prop-types";

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
          <img
            src={openCards ? columnPointerActive : columnPointerPassive}
            alt="pointer"
          />
        </button>
      </div>
      <div className="cards"></div>
    </div>
  );
};

Column.propTypes = {
  columnStorage: PropTypes.number.isRequired,
};

export default Column;
