import { NavLink } from "react-router-dom";

const Navbar = ({ signInWithGoogle }) => {
  return (
    <nav className="navigation">
      <a href="#!" className="logo">
        Medi.
      </a>
      <div className="mobile_menu_icon">
        <div className="mobile_menu_toggle"></div>
      </div>
      <ul className="nav_menu">
        <div className="nav_links">
          <li className="nav_list">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `nav_link ${isActive ? "active" : ""}`;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav_list">
            <NavLink
              to="/timer"
              className={({ isActive }) => {
                return `nav_link ${isActive ? "active" : ""}`;
              }}
            >
              Timer
            </NavLink>
          </li>
          <li className="nav_list">
            <NavLink
              to="/aasana"
              className={({ isActive }) => {
                return `nav_link ${isActive ? "active" : ""}`;
              }}
            >
              Aasana
            </NavLink>
          </li>
          <li className="nav_list">
            <NavLink
              to="/soothing"
              className={({ isActive }) => {
                return `nav_link ${isActive ? "active" : ""}`;
              }}
            >
              Soothing
            </NavLink>
          </li>
        </div>
        <div className="cta_links">
          <li className="nav_list">
            <a
              id="sign-in"
              href="#!"
              onClick={signInWithGoogle}
              className="nav_link"
            >
              Sign In
            </a>
          </li>
          <li className="nav_list">
            <a href="#!" className="nav_link active">
              Sign Up
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
