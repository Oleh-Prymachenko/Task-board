import React, { useState, useEffect } from "react";

import logo from "./assets/images/logo.jpg";
import logoTitle1 from "./assets/images/ze.jpg";
import logoTitle2 from "./assets/images/board.jpg";

import TaskCard from "./components/TaskCard";
import { CreateColumn } from "./components/ColumnContainer/ColumnForm";
import "./App.scss";

import useLocalStorageState from "use-local-storage-state";

import { Card } from "./components/TaskCard/Card";
import { Column } from "./components/ColumnContainer/Column";
import { Column1 } from "./statelessComponents/columns/Column1";
import { Column2 } from "./statelessComponents/columns/Column2";
import { Column3 } from "./statelessComponents/columns/Column3";
import { LastCard } from "./components/cards-modals/LastCard";
import { CardInfo } from "./components/TaskCard/CardInfo";

function App() {
  const [openTask, setOpenTask] = useState(false);
  const [openColumn, setOpenColumn] = useState(false);
  const [openLastCard, setOpenLastCard] = useState(false);
  const [openCardInfo, setOpenCardInfo] = useState(false);

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
        <div className="App-buttons">
          <TaskCard
            openTask={openTask}
            setOpenTask={setOpenTask}
            card={card}
            setCard={setCard}
            cards={cards}
            setCards={setCards}
            openLastCard={openLastCard}
            setOpenLastCard={setOpenLastCard}
            openCardInfo={openCardInfo}
            setOpenCardInfo={setOpenCardInfo}
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

          {cards.slice(1).map((localStorage, idx) => (
            <LastCard openLastCard={openLastCard} localStorage={localStorage} />
          ))}

          <button
            className="task-btn"
            onClick={() => {
              openTask ? setOpenTask(false) : setOpenTask(true);
              // setOpenCardInfo(false);
              // setOpenLastCard(false);
            }}
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
          <button
            className="column-btn"
            onClick={() =>
              openLastCard ? setOpenLastCard(false) : setOpenLastCard(true)
            }
          >
            Last Card
          </button>
          <button
            className="column-btn"
            onClick={() =>
              openCardInfo ? setOpenCardInfo(false) : setOpenCardInfo(true)
            }
          >
            Info
          </button>
        </div>
      </header>
      <div className="App-main">
        <div className="columns">
          <Column1
            cards={cards}
            openLastCard={openLastCard}
            setOpenLastCard={setOpenLastCard}
            openCardInfo={openCardInfo}
            setOpenCardInfo={setOpenCardInfo}
          />
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
