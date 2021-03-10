import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginClient from '../pages/LoginClient';
import RegisterClient from '../pages/RegisterClient';
import HomePageClient from '../pages/HomePageClient';
import MakeOrder from '../pages/MakeOrder';
import LoginEmployee from '../pages/EmployeeLogin';
import HomePageEmployee from '../pages/HomePageEmployee';
import RegisterProduct from '../pages/RegisterProduct';
import RegisterEmployee from '../pages/RegisterEmployee';
import EmployeeMenu from '../pages/EmployeeMenu';
import EditProduct from '../pages/EditProduct';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/login" exact component={LoginClient} />
            <Route path="/register" component={RegisterClient} />
            <Route path="/homepage" component={HomePageClient} />
            <Route path="/morder" component={MakeOrder}/>

            <Route path="/e/login" exact component={LoginEmployee} />
            <Route path="/e/register" component={RegisterEmployee} />
            <Route path="/e/homepage" component={HomePageEmployee} />
            <Route path="/product" component={RegisterProduct} />
            <Route path="/e/menu" component={EmployeeMenu} />
            <Route path="/e/edit/product" component={EditProduct}/>

        </Switch>
    );
}

export default Routes;