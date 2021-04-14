import React, { useState, useEffect } from "react";

import logo from "./assets/images/logo.jpg";
import logoTitle1 from "./assets/images/ze.jpg";
import logoTitle2 from "./assets/images/board.jpg";

import TaskCard from "./components/TaskCard";
import { CreateColumn } from "./components/ColumnContainer/ColumnForm";
import "./App.scss";

import useLocalStorageState from "use-local-storage-state";

import { Column } from "./components/ColumnContainer/Column";
import { Column1 } from "./statelessComponents/columns/Column1";
import { Column2 } from "./statelessComponents/columns/Column2";
import { Column3 } from "./statelessComponents/columns/Column3";

function App() {
  const [openTask, setOpenTask] = useState(false);
  const [openColumn, setOpenColumn] = useState(false);

  const [cards, setCards] = useLocalStorageState("cards", []);
  const [card, setCard] = useState([]);

  const [columns, setColumns] = useLocalStorageState("columns", []);
  const [column, setColumn] = useState([]);

  const [columnName, setColumnName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="img" />
          <img src={logoTitle1} alt="img" />
          <img src={logoTitle2} alt="img" />
        </div>
        <div className="buttons">
          <TaskCard
            openTask={openTask}
            setOpenTask={setOpenTask}
            card={card}
            setCard={setCard}
            cards={cards}
            setCards={setCards}
          />
          <CreateColumn
            openColumn={openColumn}
            setOpenColumn={setOpenColumn}
            columnName={columnName}
            setColumnName={setColumnName}
            columns={columns}
            setColumns={setColumns}
            column={column}
            setColumn={setColumn}
          />
          <button
            className="task-btn"
            onClick={() => (openTask ? setOpenTask(false) : setOpenTask(true))}
          >
            Create task
          </button>
          <button
            className="column-btn"
            onClick={() =>
              openColumn ? setOpenColumn(false) : setOpenColumn(true)
            }
          >
            Create column
          </button>
        </div>
      </header>
      <div className="App-main">
        <div className="columns">
          <Column1 cards={cards} />
          <Column2 />
          {columns.slice(1).map((columnInfo) => (
            <Column columnInfo={columnInfo} />
          ))}
          <Column3 />
        </div>
      </div>
    </div>
  );
}

export default App;
