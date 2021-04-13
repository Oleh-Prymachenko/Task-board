import React, { useState, useEffect } from "react";

import logo from "./assets/images/logo.jpg";
import logoTitle1 from "./assets/images/ze.jpg";
import logoTitle2 from "./assets/images/board.jpg";

import TaskCard from "./components/TaskCard";
import { CreateColumn } from "./components/ColumnContainer/ColumnForm";
import "./App.scss";

import useLocalStorageState from "use-local-storage-state";
import { useLocalStorageComponentState } from "./customHooks/localStorageHooks";
import { Column1 } from "./statelessComponents/columns/Column1";
import { Column2 } from "./statelessComponents/columns/Column2";
import { Column3 } from "./statelessComponents/columns/Column3";
import { Card } from "./components/TaskCard/Card";
import { Test } from "./test";
function App() {
  const [openTask, setOpenTask] = useState(false);
  const [openColumn, setOpenColumn] = useState(false);

  const [cards, setCards] = useLocalStorageState("cards", []);
  const [card, setCard] = useState([]);

  const [columns, setColumns] = useState([]);

  const [columnName, setColumnName] = useState("");
  // const [todos, setTodos] = useLocalStorageState("todos", []);
  // const [todo, setTodo] = useState("");
  // const onClick = () => {
  //   setTodos([...todos, todo]);
  //   setTodo("");
  // };

  // useEffect(() => {
  //   setTodos([...todos]);
  // }, []);

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
          {/* <Test
            todos={todos}
            setTodo={setTodo}
            todo={todo}
            setTodo={setTodo}
            onClick={onClick}
          /> */}
        </div>
      </header>
      <div className="App-main">
        <div className="columns">
          <Column1 card={card} />
          <Column2 />
          {columns}
          <Column3 />
        </div>
      </div>
    </div>
  );
}

export default App;
