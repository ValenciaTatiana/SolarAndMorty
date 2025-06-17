import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/index";

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        login('TatiDev');
        navigate('/', {replace: true});
    }
    return (
        <>
            <div className="container mt-5">
                <h1>Welcome To Solar&Morty</h1>
                <h2>Login</h2>
                <hr />

                <button className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>

            </div>
        </>
    )
}