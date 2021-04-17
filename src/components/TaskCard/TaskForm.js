import React, { useEffect, useState } from "react";

import { Description } from "../card-components/Description";
import { Card } from "./Card";
import { getRandomNumber } from "../../helpers/randomNumber";
import john from "../../assets/images/avatar-4.png";
import david from "../../assets/images/avatar-6.png";
import anna from "../../assets/images/avatar-3.png";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TaskForm = ({
  openTask,
  setOpenTask,
  cards,
  setCards,
  card,
  setCard,
  setOpenCardInfo,
  openCardInfo,
}) => {
  const [cardTitle, setCardTitle] = useState("first");
  const [startDate, setStartDate] = useState(new Date() * 1);
  const [numOfTask, setNumOfTask] = useState(1);
  const [cardTime, setCardTime] = useState("time");
  const [author, setAuthor] = useState("");
  const [projectName, setProjectName] = useState([]);
  const [cardDescription, setCardDescription] = useState("");

  useEffect(() => {
    setCard(
      <Card
        cardTitle={cardTitle}
        numOfTask={numOfTask}
        projectName={projectName}
        startDate={startDate}
        cardTime={cardTime}
        author={author}
        openCardInfo={openCardInfo}
        setOpenCardInfo={setOpenCardInfo}
        cards={cards}
        cardDescription={cardDescription}
        setCardDescription={setCardDescription}
      />
    );
    setProjectName(
      getRandomNumber() === 0
        ? "Project X"
        : getRandomNumber() === 1
        ? "Project Y"
        : "Project Z"
    );
  }, [cards, cardTitle, numOfTask, projectName, startDate, cardTime, author]);

  const addNewTask = (e) => {
    e.preventDefault();
    setNumOfTask(numOfTask + 1);
    setCards([...cards, card]);
    setOpenTask(false);
  };

  const showTaskModal = openTask
    ? "popup-task display-block"
    : "popup-task display-none";

  return (
    <div className={showTaskModal}>
      {openTask && (
        <div className="modal-task">
          <h3>Create task</h3>
          <form className="task-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
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
            </div>
            <div className="form-group">
              <label> Description</label>
              <Description
                cardDescription={cardDescription}
                setCardDescription={setCardDescription}
              />
            </div>
            <div className="sub-info">
              <div className="sub-info-form-group">
                <label htmlFor="until">until</label>
                {/* <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={startDate}
                  selectsEnd
                /> */}
                {/* <input
                  id="until"
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    console.log("Change", e.target.value);
                    setStartDate(e.target.value);
                  }}
                /> */}
              </div>
              <div className="sub-info-form-group">
                <label htmlFor="time">Time</label>
                {/* <DatePicker
                  selected={cardTime}
                  onChange={(e) => setCardTime(e)}
                  showTimeSelect
                  dateFormat="Pp"
                /> */}
                {/* <input
                  id="time"
                  type="time"
                  step="2"
                  value={cardTime}
                  onChange={(e) => {
                    console.log("Change", e.target.value);
                    setCardTime(e.target.value);
                  }}
                /> */}
              </div>
              <div className="sub-info-form-group">
                <label htmlFor="author">author</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option> Automaticly</option>
                  <option value={david}>David</option>
                  <option value={anna}>Anna</option>
                  <option value={john}>John</option>
                </select>
              </div>
            </div>
            <div className="task-modal-buttons">
              <button
                type="submit"
                className="submit-btn"
                onClick={(e) => addNewTask(e)}
              >
                Create task
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setOpenTask(false)}
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
