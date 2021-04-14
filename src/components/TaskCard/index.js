import React from "react";

import "./task.scss";
import { TaskForm } from "./TaskForm";
// import { CardContainer } from "./CardContainer";

const TaskCard = ({
  openTask,
  setOpenTask,
  cards,
  setCards,
  card,
  setCard,
}) => {
  return (
    <div>
      <TaskForm
        openTask={openTask}
        setOpenTask={setOpenTask}
        cards={cards}
        setCards={setCards}
        card={card}
        setCard={setCard}
      />
    </div>
  );
};

export default TaskCard;
