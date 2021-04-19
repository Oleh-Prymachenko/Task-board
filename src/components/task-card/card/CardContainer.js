import React, { useEffect } from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";

import DragMove from "../../sub-components/drag";
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
}) => {
  const useCardLocalStoragePosition = createLocalStorageStateHook(
    `card-position ${cardStorage.props.cardNumer}`,
    {
      x: 0,
      y: 0,
    }
  );
  const [cardTranslate, setCardTranslate] = useCardLocalStoragePosition();

  // useEffect(() => {
  //   setCardTranslate({
  //     x: 0,
  //     y: 0,
  //   });
  // }, [setCardTranslate]);

  const handleDragMove = (e) => {
    setCardTranslate({
      x: cardTranslate.x + e.movementX,
      y: cardTranslate.y + e.movementY,
    });
  };

  const convertedDate = new Date(cardStorage.props.cardUntilDate);
  const untilDate =
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
    setInfoUntilDate(untilDate);
    setInfoTime(cardStorage.props.cardTime);
    setInfoDescription(cardStorage.props.cardDescription);
    setStartDate(cardStorage.props.date);
  };

  return (
    <DragMove onDragMove={handleDragMove}>
      <Card
        cardStorage={cardStorage}
        cardTranslate={cardTranslate}
        cardKey={cardKey}
        cardInfoHandler={cardInfoHandler}
        untilDate={untilDate}
      />
    </DragMove>
  );
};
