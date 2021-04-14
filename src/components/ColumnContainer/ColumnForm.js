import React, { useEffect } from "react";
import "./createColumn.scss";
import { Column } from "./Column";

export const CreateColumn = ({
  openColumn,
  setOpenColumn,
  columns,
  setColumns,
  columnName,
  setColumnName,
  column,
  setColumn,
}) => {
  const showColumnModal = openColumn
    ? "create-column display-block"
    : "create-column display-none";

  const addNewColumn = (e) => {
    e.preventDefault();
    setColumn(<Column columnName={columnName} />);
    setColumns([...columns, column]);
    setOpenColumn(false);
  };

  useEffect(() => {
    setColumns(columns);
  }, []);

  return (
    <div className={showColumnModal}>
      {openColumn && (
        <div className="modal-fixed-column">
          <form onSubmit={addNewColumn}>
            <input
              type="text"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
            />
            <button type="submit">ADD </button>
          </form>
          <button onClick={() => setOpenColumn(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};
