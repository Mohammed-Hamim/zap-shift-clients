import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/authPages/Login";
import Register from "../pages/authPages/Register";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/service_centers.json').then(res => res.json())
            }
        ]

    },
    // auth related route
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login,
            },
            {
                path: "register",
                Component: Register,
            }

        ]
    }
])