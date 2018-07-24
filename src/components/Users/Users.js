import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fatchUsers } from '../../store/actions';

class Users extends Component {
    componentDidMount() {
        this.props.fatchUsers();
    }

    render() {
        return (
            <div>
                <h1>Here is the logn user list.</h1>
                <ul>
                    {this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })}
                </ul>
            </div>

        );
    }
}

const mapStoreToProps = store => {
    return {
        users: store.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fatchUsers: ()=> dispatch(fatchUsers())
    }
    
}

export default connect(mapStoreToProps, mapDispatchToProps)(Users);

