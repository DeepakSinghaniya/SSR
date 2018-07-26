import React from 'react';

const notFount = ({ staticContext = {} }) => {
    if (staticContext.context) {
        staticContext.context.notFound = true;
    }
    return (
        <h1>Page Not Fount</h1>
    );
}

export default {
    component: notFount
}