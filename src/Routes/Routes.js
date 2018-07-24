import React, {Fragment} from 'react';
import {Route} from 'react-router-dom'; 
import Home from '../components/Home/Home';

export default () => {
    return(
        <Fragment>
            <Route exect="/" component={Home} />
        </Fragment>
    );
}
