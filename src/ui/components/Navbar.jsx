import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Hello!
                    </span>

                    <button className='nav-item nav-link btn btn-primary'>
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