import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { About } from './TabsComponents/About';
import { Skills } from './TabsComponents/Skills';
import { Projects } from './TabsComponents/Projects';
import { Experience } from './TabsComponents/Experience';
import { Education } from './TabsComponents/Education';
import { Main } from './TabsComponents/Main';

export const Content = () => {

    return (
    <div>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={About}/>
            <Route path='/skills' component={Skills}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/experience' component={Experience}/>
            <Route path='/education' component={Education}/>
        </Switch>
    </div>
    );
    
}
