import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/adidas";
import {Puma} from "../components/pages/puma";
import {Abibas} from "../components/pages/abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "../components/pages/Login";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICE: '/pricesuppliers',
    ERROR: '/error404',
    MODEL: '/:model/:id',
    PROTECT: '/protectedpage',
    LOGIN: '/login'
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICE,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <Login/>,
    },
]
const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECT,
        element: (
            <ProtectedPage/>
        ),
    },
]

export const PrivateRoute = () => {
    const isAuth = true
    return isAuth ? <Outlet/> : <Navigate to={'/login'}/>
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoute /> ,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    },

]);
