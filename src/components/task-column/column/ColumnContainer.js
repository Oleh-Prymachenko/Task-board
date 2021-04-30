import React from "react";
import { createLocalStorageStateHook } from "use-local-storage-state";

import Column from "./Column";
import DragMove from "../../sub-components/DragMove";

export const ColumnContainer = (props) => {
  const { columnStorage, columnKey, openCards, setOpenCards } = props;
  // const useColumnLocalStoragePosition = createLocalStorageStateHook(
  //   `column-position ${columnStorage.props.columnNumer}`,
  //   {
  //     x: 0,
  //     y: 0,
  //   }
  // );

  // const [columnTranslate, setColumnTranslate] = useColumnLocalStoragePosition();

  // const handleDragMove = (e) => {
  //   setColumnTranslate({
  //     x: columnTranslate.x + e.movementX,
  //     y: columnTranslate.y + e.movementY,
  //   });
  // };

  return (
    <Column
      columnStorage={columnStorage}
      columnKey={columnKey}
      openCards={openCards}
      setOpenCards={setOpenCards}
    />
  );
};
