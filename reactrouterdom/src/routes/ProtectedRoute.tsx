// @flow
import {Navigate, Outlet} from "react-router-dom";
import {ReactNode} from "react";

export type Props = {
    children?: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
    const logged = false
    return logged ? children : <Navigate to={'/login'} />
}