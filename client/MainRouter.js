//Adding router for components to MainRouter
/*The MainRouter.js code will help render our custom React components with respect to the routes
or locations in the application.
The Switch component in React Router renders a route exclusively. It only renders the first child
that matches the requested route path. On the other hand, without being nested in a Switch, every
Route component renders inclusively when there is a path match; for example, a request at '/' also
matches a route at '/contact'. */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './core/Home';
import Users from './user/Users';
import Signup from './user/Signup';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/users" component={Users}/>
            <Route path="/signup" component={Signup}/>
        </Switch>
    </div>
)

export default MainRouter;