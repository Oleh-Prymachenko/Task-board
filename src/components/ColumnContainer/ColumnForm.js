import React from "react";
import "./createColumn.scss";
import { Column } from "./Column";

export const CreateColumn = ({
  openColumn,
  setOpenColumn,
  columns,
  setColumns,
  columnName,
  setColumnName,
}) => {
  const showColumnModal = openColumn
    ? "create-column display-block"
    : "create-column display-none";

  const addNewColumn = (e) => {
    setColumns(
      columns.concat(<Column columnName={columnName} key={columns.length} />)
    );
  };

  return (
    <div className={showColumnModal}>
      {openColumn && (
        <div className="modal-fixed-column">
          <p>Create column</p>
          <input
            type="text"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
          />
          <button onClick={() => addNewColumn()}>ADD </button>
          <button onClick={() => setOpenColumn(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};
