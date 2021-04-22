import React from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";

import DragMove from "../../sub-components/DragMove";
import { Card } from "./Card";

export const CardContainer = ({
  cardStorage,
  setOpenCardInfo,
  openCardInfo,
  cardKey,
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
  const useCardLocalStoragePosition = createLocalStorageStateHook(
    `card-position ${cardStorage.props.cardNumer}`,
    {
      x: 0,
      y: 0,
    }
  );
  const [cardTranslate, setCardTranslate] = useCardLocalStoragePosition();

  const handleDragMove = (e) => {
    setCardTranslate({
      x: cardTranslate.x + e.movementX,
      y: cardTranslate.y + e.movementY,
    });
  };

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
    <DragMove onDragMove={handleDragMove} className="drag">
      <Card
        cardStorage={cardStorage}
        cardTranslate={cardTranslate}
        cardKey={cardKey}
        cardInfoHandler={cardInfoHandler}
        formatUntilDate={formatUntilDate}
      />
    </DragMove>
  );
};
