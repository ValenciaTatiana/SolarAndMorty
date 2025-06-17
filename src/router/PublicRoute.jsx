import { useContext } from "react";
import { AuthContext } from "../auth/context/index";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {
    const { state } = useContext(AuthContext);

    const lastPath = localStorage.getItem('lastPath') || '/';

    return (!state.logged) ? children : <Navigate to={lastPath}/> ;
}