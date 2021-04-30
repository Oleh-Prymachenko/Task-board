import React from "react";

import { CardContainer } from "./components/task-card/card/CardContainer";

import pointerPassive from "./assets/images/pointer-passive.png";
import pointerActive from "./assets/images/pointer-active.png";

export const TodoColumn = ({
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
  const showCards = openCards ? "display" : "none";
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
        <div className="column-name">TO DO - {cards.length}</div>
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

      <div className={`cards-${showCards}`}>
        {cards.map((cardStorage, idx) => (
          <CardContainer
            cardKey={idx}
            cardStorage={cardStorage}
            setOpenCardInfo={setOpenCardInfo}
            openCardInfo={openCardInfo}
            setInfoTitle={setInfoTitle}
            setInfoNum={setInfoNum}
            setInfoUntilDate={setInfoUntilDate}
            setInfoTime={setInfoTime}
            setInfoAuthor={setInfoAuthor}
            setInfoDescription={setInfoDescription}
            setStartDate={setStartDate}
            setInfoBold={setInfoBold}
            setInfoItalic={setInfoItalic}
            setInfoUnderline={setInfoUnderline}
            cardId={cardId}
          />
        ))}
      </div>
      {provided.placeholder}
    </div>
  );
};
