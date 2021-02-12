import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePageClient from '../pages/HomePageClient';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/homepage" component={HomePageClient}/>
        </Switch>
    );
}

export default Routes;