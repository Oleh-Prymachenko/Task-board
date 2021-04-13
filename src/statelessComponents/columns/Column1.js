import React from "react";
import { Card1 } from "../cards/Card1";
import { Card2 } from "../cards/Card2";
import { Card3 } from "../cards/Card3";
import { Card } from "../../components/TaskCard/Card";

import "./column.scss";
export const Column1 = ({ card }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-name">TO DO - 3</div>
      </div>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        {card}
      </div>
    </div>
  );
};
