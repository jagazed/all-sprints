import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/adidas";
import {Puma} from "../components/pages/puma";
import {Abibas} from "../components/pages/abibas";
import {Prices} from "../components/pages/Prices";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICE: '/pricesuppliers',
    ERROR: '/error404'
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas />,
            },]
    },
    {
        path: "/puma",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PATH.PUMA,
                element: <Puma />,
            },]
    },
    {
        path: "/abibas",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PATH.ABIBAS,
                element: <Abibas />,
            },]
    },
    {
        path: "/pricesuppliers",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PATH.PRICE,
                element: <Prices />,
            },]
    },

]);

