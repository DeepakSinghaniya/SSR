import HomePage from '../pages/Home/Home';
import UsersPage from '../pages/Users/Users';
import App from '../App';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersPage,
                path: '/users',
                exact: true
            }
        ]
    }

];

