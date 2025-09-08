import { Navigate, createBrowserRouter } from "react-router-dom";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Users from "./views/Users";
import DefaultLayout from "./components/DefaultLayout";
import Dashboard from "./views/Dashboard";
import GuestLayout from "./components/GuestLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/users' />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users',
                element: <Users />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);

export default router;