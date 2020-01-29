import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Master from './pages/master';
import Home from './pages/home';
import Login from './pages/login';


function renderMasterLayout(Component) {
    return <Master><Component /></Master>
}


export default () => {
    return (
        <Switch>
            <Route path="/home" render={() => renderMasterLayout(Home)} />
            <Route path="/login" component={Login} />
        </Switch>
    )

}