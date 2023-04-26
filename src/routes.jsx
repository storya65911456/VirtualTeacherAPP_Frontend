import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import QA from './pages/QA/QA';
import QA2 from './pages/QA2/QA2';
import NotFound from './pages/notFound/NotFound';
import { Auth, AuthAdmin } from './components/Auth';
import Admin from './pages/home/Admin';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <NotFound />,
        children: []
    },
    {
        path: '/admin',
        element: (
            <AuthAdmin>
                <Admin />
            </AuthAdmin>
        ),
        children: []
    },
    {
        path: '/home',
        element: (
            <Auth>
                <Home />
            </Auth>
        ),
        children: []
    },
    {
        path: '/QA',
        element: (
            <Auth>
                <QA />
            </Auth>
        ),
        children: []
    },
    {
        path: '/QA2',
        element: (
            <Auth>
                <QA2 />
            </Auth>
        ),
        children: []
    }
]);

export default router;
