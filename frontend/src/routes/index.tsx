import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginClient from '../pages/LoginClient';
import RegisterClient from '../pages/RegisterClient';
import HomePageClient from '../pages/HomePageClient';
import UserList from '../pages/UserList';
import MakeOrder from '../pages/MakeOrder';
import BagClient from '../pages/BagClient';
import MyOrder from '../pages/MyOrder';

import LoginEmployee from '../pages/EmployeeLogin';
import HomePageEmployee from '../pages/HomePageEmployee';
import RegisterEmployee from '../pages/RegisterEmployee';
import EmployeeMenu from '../pages/EmployeeMenu';
import ManageOrder from '../pages/ManageOrder';

import EditProduct from '../pages/EditProduct';
import RegisterProduct from '../pages/RegisterProduct';
import EditClient from '../pages/EditClient';
import EditEmployee from '../pages/EditEmployee';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={LoginClient} />
            <Route path="/register" component={RegisterClient} />
            <Route path="/homepage" component={HomePageClient} />
            <Route path="/morder" component={MakeOrder} />
            <Route path="/edit" component={EditClient} />
            <Route path="/bag" component={BagClient} />
            <Route path="/myorder" component={MyOrder} />


            <Route path="/e/login" exact component={LoginEmployee} />
            <Route path="/e/register" component={RegisterEmployee} />
            <Route path="/e/homepage" component={HomePageEmployee} />
            <Route path="/e/menu" component={EmployeeMenu} />
            <Route path="/e/list" component={UserList} />
            <Route path="/e/edit" exact component={EditEmployee} />
            <Route path="/e/manageorder" component={ManageOrder} />
            
            <Route path="/product" component={RegisterProduct} />
            <Route path="/e/edit/product"  component={EditProduct} />

        </Switch>
    );
}

export default Routes;