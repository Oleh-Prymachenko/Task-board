import React from "react";
import { Switch, Route } from "react-router-dom";

import { About } from "./TabsComponents/about/About";
import { Skills } from "./TabsComponents/skills/Skills";
import { Projects } from "./TabsComponents/projects/Projects";
import { Education } from "./TabsComponents/education/Education";
import { Experience } from "./TabsComponents/experience/Experience";
import { Main } from "./TabsComponents/Main";

import "./content.scss";

export const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
      </Switch>
    </div>
  );
};
