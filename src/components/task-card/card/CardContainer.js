import React, { useState } from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";
import { Draggable } from "react-beautiful-dnd";

import { v4 as uuidv4 } from "uuid";
import DragMove from "../../sub-components/DragMove";
import { Card } from "./Card";

export const CardContainer = ({
  cardStorage,
  cardKey,
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
}) => {
  // const useCardLocalStoragePosition = createLocalStorageStateHook(
  //   `card-position ${cardStorage.props.cardNumer}`,
  //   {
  //     x: 0,
  //     y: 0,
  //   }
  // );
  // const [cardTranslate, setCardTranslate] = useCardLocalStoragePosition();

  const convertedDate = new Date(cardStorage.props.cardUntilDate);
  const formatUntilDate =
    convertedDate.getDate() +
    "." +
    convertedDate.getMonth() +
    "." +
    convertedDate.getFullYear();

  const cardInfoHandler = () => {
    openCardInfo ? setOpenCardInfo(false) : setOpenCardInfo(true);
    setInfoTitle(cardStorage.props.cardTitle);
    setInfoNum(cardStorage.props.cardNumer);
    setInfoAuthor(cardStorage.props.cardAuthor);
    setInfoUntilDate(formatUntilDate);
    setInfoTime(cardStorage.props.cardTime);
    setInfoDescription(cardStorage.props.cardDescription);
    setStartDate(cardStorage.props.formatCurrentDate);
    setInfoBold(cardStorage.props.isBold);
    setInfoItalic(cardStorage.props.isItalic);
    setInfoUnderline(cardStorage.props.isUnderline);
  };

  return (
    <Draggable draggableId={cardStorage.props.cardId} index={cardKey}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Card
            cardStorage={cardStorage}
            cardKey={cardKey}
            cardInfoHandler={cardInfoHandler}
            // cardTranslate={cardTranslate}
            formatUntilDate={formatUntilDate}
          />
        </div>
      )}
    </Draggable>
  );
};
