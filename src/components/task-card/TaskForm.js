import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

import "./card-modal.scss";
import { Description } from "../sub-components/Description";
import { CardContainer } from "./card/CardContainer";
import { getRandomNumber } from "../../helpers/randomNumber";
import john from "../../assets/images/avatar-4.png";
import david from "../../assets/images/avatar-6.png";
import anna from "../../assets/images/avatar-3.png";
import { motion } from "framer-motion";

export const TaskForm = ({
  openTask,
  setOpenTask,
  cards,
  setCards,
  card,
  setCard,
  setOpenCardInfo,
  openCardInfo,
  makeBold,
  setMakeBold,
  makeItalic,
  setMakeItalic,
  makeUnderline,
  setMakeUnderline,
}) => {
  const currentDate = new Date();

  const date =
    currentDate.getDate() +
    " " +
    currentDate.toLocaleString("default", { month: "long" }) +
    " " +
    currentDate.getFullYear() +
    "," +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes();

  const [cardTitle, setCardTitle] = useState("");
  const [cardUntilDate, setCardUntilDate] = useState(new Date());
  const [cardNumer, setCardNumer] = useState(1);
  const [cardTime, setCardTime] = useState("");
  const [cardAuthor, setCardAuthor] = useState("");
  const [cardProjectName, setCardProjectName] = useState([]);
  const [cardDescription, setCardDescription] = useState("");

  useEffect(() => {
    setCard(
      <CardContainer
        cardTitle={cardTitle}
        cardNumer={cardNumer}
        cardProjectName={cardProjectName}
        cardUntilDate={cardUntilDate}
        cardTime={cardTime}
        cardAuthor={cardAuthor}
        cardDescription={cardDescription}
        date={date}
        openCardInfo={openCardInfo}
        setOpenCardInfo={setOpenCardInfo}
      />
    );

    setCardProjectName(
      getRandomNumber() === 0
        ? "Project X"
        : getRandomNumber() === 1
        ? "Project Y"
        : "Project Z"
    );
  }, [
    cardTitle,
    cardNumer,
    cardProjectName,
    cardUntilDate,
    cardTime,
    cardAuthor,
    cardDescription,
    openCardInfo,
    setCard,
    setOpenCardInfo,
    date,
  ]);

  const addNewTask = (e) => {
    e.preventDefault();
    setCardNumer(cardNumer + 1);
    setCards([...cards, card]);
    setOpenTask(false);

    // setCardTitle("");
    // setCardUntilDate("");
    // setCardTime("");
    // setCardAuthor("");
    // setCardDescription("");
  };

  const showTaskModal = openTask
    ? "popup-task display-block"
    : "popup-task display-none";

  return (
    <div className={showTaskModal}>
      {openTask && (
        <motion.div
          // className="modal-task"
          // animate={{ scale: 1 }}
          // animate={{ rotate: openTask ? 360 : 180 }}
          // transition={{ duration: 1 }}
          // transition={{ duration: 1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <div className="modal-task">
            <h3>Create task</h3>
            <form className="task-form" onSubmit={addNewTask}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  required
                  id="name"
                  type="text"
                  maxLength="50"
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
                  makeBold={makeBold}
                  setMakeBold={setMakeBold}
                  makeItalic={makeItalic}
                  setMakeItalic={setMakeItalic}
                  makeUnderline={makeUnderline}
                  setMakeUnderline={setMakeUnderline}
                />
              </div>
              <div className="sub-info">
                <div className="sub-info-form-group">
                  <label htmlFor="until">until</label>
                  <DatePicker
                    selected={cardUntilDate}
                    onChange={(value) => {
                      setCardUntilDate(value);
                    }}
                    minDate={new Date()}
                    selectsEnd
                  />
                </div>
                <div className="sub-info-form-group">
                  <label htmlFor="time">Time</label>
                  <TimePicker
                    onChange={(value) => setCardTime(value)}
                    value={cardTime}
                    disableClock
                    locale="hu-HU"
                    maxDetail="second"
                    format="h:m:s"
                    hourPlaceholder="dd"
                    minutePlaceholder="hh"
                    secondPlaceholder="mm"
                  />
                </div>
                <div className="sub-info-form-group">
                  <label htmlFor="cardAuthor">cardAuthor</label>
                  <select
                    required
                    placeholder="Ваше имя"
                    value={cardAuthor}
                    onChange={(e) => {
                      setCardAuthor(e.target.value);
                    }}
                  >
                    <option></option>
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
        </motion.div>
      )}
    </div>
  );
};
