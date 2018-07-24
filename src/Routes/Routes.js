import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Users from '../components/Users/Users';

export default () => {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
        </Fragment>
    );
}
