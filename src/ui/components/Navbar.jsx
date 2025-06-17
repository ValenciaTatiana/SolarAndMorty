import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/index';

export const Navbar = () => {

    const navigate = useNavigate();

    const {state} = useContext(AuthContext);

    const handleLogout = () => {
        navigate("/login", {replace: true});
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand" to="/">
                Solar&Morty
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/rickandmorty">
                        Rick & Morty
                    </NavLink>
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/solaropposities">
                        Solar Opposites
                    </NavLink>
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/search">
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Hello! {state?.user}
                    </span>

                    <button className='nav-item nav-link btn btn-primary' onClick={handleLogout}>
                        Logout
                    </button>
                    {/* <NavLink className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} to="/login">
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    )
}