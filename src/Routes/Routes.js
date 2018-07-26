import HomePage from '../pages/Home/Home';
import UsersPage from '../pages/Users/Users';
import notFoundPage from '../pages/404/404';
import App from '../App';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                component: HomePage.component,
                path: '/',
                exact: true
            },
            {
                ...UsersPage,
                path: '/users',
                exact: true
            }, 
            {
                ...notFoundPage
            }
        ]
    }

];

