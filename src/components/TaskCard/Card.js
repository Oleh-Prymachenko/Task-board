import React, { useEffect, useState, useRef } from "react";
import { CardInfo } from "./CardInfo";
import DragMove from "../../statelessComponents/DragMove";
import useLocalStorageState from "use-local-storage-state";

export const Card = ({
  localStorage,
  openCardInfo,
  setOpenCardInfo,
  cardTitle,
}) => {
  // const [todo, setTodo] = useState();
  // const [translate, setTranslate] = useLocalStorageState("card-position", {
  //   x: 0,
  //   y: 0,
  // });
  const handleDragMove = (e) => {
    // setTranslate({
    //   x: translate.x + e.movementX,
    //   y: translate.y + e.movementY,
    // });
  };

  // useEffect(() => {
  //   setTodo(localStorage);
  // }, []);
  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        className="card"
        onDoubleClick={(e) => {
          openCardInfo ? setOpenCardInfo(false) : setOpenCardInfo(true);
        }}
        // style={{
        //   transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
        // }}
      >
        <CardInfo
          openCardInfo={openCardInfo}
          setOpenCardInfo={setOpenCardInfo}
          cardTitle={cardTitle}
        />
        <h2 className="card-name">{localStorage.props.cardTitle}</h2>
        <span className="until">Until {localStorage.props.startDate}</span>
        <span className="time">{localStorage.props.cardTime}</span>
        <button className="project-name">
          {localStorage.props.projectName}
        </button>
        <div className="card-footer">
          <h2 className="card-name">{localStorage.props.cardTitle}</h2>
          <span className="card-num">
            BM-
            {localStorage.props.numOfTask}
          </span>
          <img
            className="avatar"
            alt={localStorage.props.author}
            src={localStorage.props.author}
          />
        </div>
      </div>
    </DragMove>
  );
};
