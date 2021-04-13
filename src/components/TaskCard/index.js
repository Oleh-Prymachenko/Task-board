import React from "react";

import "./task.scss";
import { FormTask } from "./FormTask";
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
      <FormTask
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
