import React, { useEffect } from "react";
import "./column.scss";
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
    ? "popup-column display-block"
    : "popup-column display-none";

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
        <div className="modal-column">
          <h3 className="title">Create Column</h3>
          <form className="column-form" onSubmit={addNewColumn}>
            <div className="form-group">
              <label htmlFor="column-name" className="label-name">
                Name
              </label>
              <input
                id="column-name"
                type="text"
                placeholder="New"
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
              />
            </div>
            <div className="column-modal-buttons">
              <button type="submit" className="submit-btn">
                ADD
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setOpenColumn(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
