import { useContext } from "react";
import { AuthContext } from "../auth/context/index";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const { state } = useContext(AuthContext);

    const { pathname, search } = useLocation();
    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);

    return (state.logged) ? children : <Navigate to="/login" />;
}