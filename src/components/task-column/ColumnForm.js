import React, { useState, useEffect } from "react";
import "./column-modal.scss";
import { ColumnContainer } from "./column/ColumnContainer";
import { motion } from "framer-motion";

export const CreateColumn = ({
  openColumn,
  setOpenColumn,
  columns,
  setColumns,
  column,
  setColumn,
}) => {
  const [columnName, setColumnName] = useState("");
  const [columnNumer, setColumnNumer] = useState(1);

  const showColumnModal = openColumn
    ? "popup-column display-block"
    : "popup-column display-none";

  useEffect(() => {
    setColumn(
      <ColumnContainer
        columnName={columnName}
        setColumnName={setColumnName}
        columnNumer={columnNumer}
      />
    );
  }, [columnName, setColumnName, setColumn, columnNumer]);

  const addNewColumn = (e) => {
    e.preventDefault();
    setColumns([...columns, column]);
    setColumnNumer(columnNumer + 1);
    setOpenColumn(false);
  };

  return (
    <div className={showColumnModal}>
      {openColumn && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
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
        </motion.div>
      )}
    </div>
  );
};
