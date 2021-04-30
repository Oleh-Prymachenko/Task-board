import React from "react";

import pointerPassive from "./assets/images/pointer-passive.png";
import pointerActive from "./assets/images/pointer-active.png";
export const DoneColumn = ({
  provided,
  snapshot,
  setOpenCardInfo,
  openCardInfo,
  setInfoTitle,
  setInfoNum,
  setInfoUntilDate,
  setInfoTime,
  setInfoAuthor,
  setInfoDescription,
  setStartDate,
  setInfoBold,
  setInfoItalic,
  setInfoUnderline,
  openCards,
  setOpenCards,
  cards,
  cardId,
}) => {
  return (
    <div
      className="column"
      ref={provided.innerRef}
      {...provided.droppableProps}
      style={{
        background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
      }}
    >
      <div className="column-header">
        <div className="column-name">DONE - {cards.length}</div>
        <button className="open-cards-for-mobiles-btn">
          <img
            className="pointer"
            alt="pointer"
            onClick={() =>
              openCards ? setOpenCards(false) : setOpenCards(true)
            }
            src={openCards ? pointerActive : pointerPassive}
          />
        </button>
      </div>
      <div className="cards"></div>
    </div>
  );
};
