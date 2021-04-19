import React, { useEffect } from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";

import DragMove from "../../sub-components/DragMove";
import "./column.scss";

export const Column = ({ columnStorage, columnKey }) => {
  const useColumnLocalStoragePosition = createLocalStorageStateHook(
    `column-position ${columnStorage.props.columnNumer}`,
    {
      x: 0,
      y: 0,
    }
  );

  const [columnTranslate, setColumnTranslate] = useColumnLocalStoragePosition();

  useEffect(() => {
    setColumnTranslate({
      x: 0,
      y: 0,
    });
  }, [setColumnTranslate]);

  const handleDragMove = (e) => {
    setColumnTranslate({
      x: columnTranslate.x + e.movementX,
      y: columnTranslate.y + e.movementY,
    });
  };

  return (
    <DragMove onDragMove={handleDragMove}>
      <div
        className="column"
        key={columnKey}
        style={{
          transform: `translateX(${columnTranslate.x}px) translateY(${columnTranslate.y}px)`,
        }}
      >
        <div className="column-header">
          <div className="column-name">{columnStorage.props.columnName}</div>
        </div>
        {/* <div className="cards"></div> */}
      </div>
    </DragMove>
  );
};

// export const CardContainer = ({
//   cardStorage,
//   setOpenCardInfo,
//   openCardInfo,
//   cardKey,
//   setInfoTitle,
//   setInfoNum,
//   setInfoUntilDate,
//   setInfoTime,
//   setInfoAuthor,
//   setInfoDescription,
//   setStartDate,
// }) => {
//   return (
//     <DragMove onDragMove={handleDragMove}>
//       <Card
//         cardStorage={cardStorage}
//         translate={translate}
//         cardKey={cardKey}
//         cardInfoHandler={cardInfoHandler}
//         untilDate={untilDate}
//       />
//     </DragMove>
//   );
// };
