import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
const header = (props) => {
    const authButton = props.auth? (<a href="/api/logout">Logout</a>) : (<a href="/api/auth/google">Login</a>);
    return(
        <header className="header">
            <Link to="/">SSR Stuff</Link>

            <Link to="/users">Users</Link>
            <Link to="/admins">Admin</Link>
            {authButton}

        </header>

    );
}

const mapStoreToProps = store => {
    return {
        auth: sotre.auth
    }
}

export default connect()(header);