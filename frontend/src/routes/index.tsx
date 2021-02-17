import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import HomePageClient from '../pages/HomePageClient';
import MakeOrder from '../pages/MakeOrder';

const Routes: React.FC = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/homepage" component={HomePageClient}/>
                <Route path="/morder" component={MakeOrder}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;