import {Outlet} from "react-router-dom";

export const ProtectedPage = () => {
    return (
        <div>
            <div>ProtectPage</div>
            <Outlet />
        </div>
    )
}