import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import useLocalStorageState from "use-local-storage-state";

import { Card } from "./Card";
import { getRandomNumber } from "../../helpers/randomNumber";
import "react-datepicker/dist/react-datepicker.css";
import { useLocalStorageDateState } from "../../customHooks/localStorageHooks";
import { useLocalStorageStringState } from "../../customHooks/localStorageHooks";
import { useLocalStorageNumberState } from "../../customHooks/localStorageHooks";
import john from "../../assets/images/avatar-4.png";
import david from "../../assets/images/avatar-6.png";
import anna from "../../assets/images/avatar-3.png";

export const FormTask = ({
  openTask,
  setOpenTask,
  cards,
  setCards,
  card,
  setCard,
}) => {
  const [cardTitle, setCardTitle] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [numOfTask, setNumOfTask] = useState(1);
  const [cardTime, setCardTime] = useState("");
  const [author, setAuthor] = useState("");
  const [projectName, setProjectName] = useState([]);

  const onAddBtnClick = (event) => {
    event.preventDefault();
    setCard(
      <Card
        cardTitle={cardTitle}
        cards={cards}
        numOfTask={numOfTask}
        projectName={projectName}
        startDate={startDate}
        cardTime={cardTime}
        setCardTime={setCardTime}
        author={author}
        setAuthor={setAuthor}
        cards={cards}
        setCards={setCards}
      />
    );
    setOpenTask(false);
    setNumOfTask(numOfTask + 1);
    setCards([...cards, card]);
  };

  useEffect(() => {
    setCards(cards);
    setProjectName(
      getRandomNumber() === 0
        ? "Project X"
        : getRandomNumber() === 1
        ? "Project Y"
        : "Project Z"
    );
  }, []);

  const showTaskModal = openTask
    ? "create-task display-block"
    : "create-task display-none";

  return (
    <div className={showTaskModal}>
      {openTask && (
        <div className="modal-fixed-task">
          <h2>Create task</h2>
          <form className="task-form" onSubmit={onAddBtnClick}>
            <label for="name">Name</label>
            <input
              id="name"
              type="text"
              maxlength="50"
              value={cardTitle}
              onChange={(e) => {
                console.log("Change", e.target.value);
                setCardTitle(e.target.value);
              }}
            />
            {/* <textarea>Description</textarea> */}
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              Automaticly
              <option value={david}>David</option>
              <option value={anna}>Anna</option>
              <option value={john}>John</option>
            </select>
            <label for="until">until</label>
            <input
              id="until"
              type="date"
              value={startDate}
              onChange={(e) => {
                console.log("Change", e.target.value);
                setStartDate(e.target.value);
              }}
            />
            <label for="time">Time</label>
            <input
              id="time"
              type="time"
              value={cardTime}
              onChange={(e) => {
                console.log("Change", e.target.value);
                setCardTime(e.target.value);
              }}
            />

            <button type="submit">Create task</button>
          </form>
          <button type="button" onClick={() => setOpenTask(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
