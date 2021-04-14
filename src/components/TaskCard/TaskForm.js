import React, { useEffect, useState } from "react";

import { Card } from "./Card";
import { getRandomNumber } from "../../helpers/randomNumber";
import john from "../../assets/images/avatar-4.png";
import david from "../../assets/images/avatar-6.png";
import anna from "../../assets/images/avatar-3.png";

export const TaskForm = ({
  openTask,
  setOpenTask,
  cards,
  setCards,
  card,
  setCard,
}) => {
  const [cardTitle, setCardTitle] = useState("first");

  const [startDate, setStartDate] = useState(new Date() * 1);
  const [numOfTask, setNumOfTask] = useState(1);
  const [cardTime, setCardTime] = useState("time");
  const [author, setAuthor] = useState("");
  const [projectName, setProjectName] = useState([]);

  const onAddBtnClick = (e) => {
    e.preventDefault();
    setCard(
      <Card
        cardTitle={cardTitle}
        numOfTask={numOfTask}
        projectName={projectName}
        startDate={startDate}
        cardTime={cardTime}
        author={author}
      />
    );
    setNumOfTask(numOfTask + 1);
    setCards([...cards, card]);
    setOpenTask(false);
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
    ? "popup-task display-block"
    : "popup-task display-none";

  return (
    <div className={showTaskModal}>
      {openTask && (
        <div className="modal-task">
          <h3>Create task</h3>
          <form className="task-form" onSubmit={onAddBtnClick}>
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
              <label htmlFor="decs"> Description</label>
              <textarea id="decs" placeholder="Placeholder">
                Description
              </textarea>
            </div>
            <div className="sub-info">
              <div className="sub-info-form-group">
                <label htmlFor="until">until</label>
                <input
                  id="until"
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    console.log("Change", e.target.value);
                    setStartDate(e.target.value);
                  }}
                />
              </div>
              <div className="sub-info-form-group">
                <label htmlFor="time">Time</label>
                <input
                  id="time"
                  type="time"
                  value={cardTime}
                  onChange={(e) => {
                    console.log("Change", e.target.value);
                    setCardTime(e.target.value);
                  }}
                />
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
              <button type="submit" className="submit-btn">
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
