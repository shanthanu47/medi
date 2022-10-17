

const Navbar = ({signInWithGoogle}) => {

    
    return (
        <nav className="navigation">
            <a href="#!" className="logo">Medi.</a>
            <div className="mobile_menu_icon">
                <div className="mobile_menu_toggle"></div>
            </div>
            <ul className="nav_menu">
                <div className="nav_links">
                    <li className="nav_list">
                        <a href="#!" className="nav_link">Home</a>
                    </li>
                    <li className="nav_list">
                        <a href="#!" className="nav_link">About</a>
                    </li>
                    <li className="nav_list">
                        <a href="#!" className="nav_link">Blog</a>
                    </li>
                    <li className="nav_list">
                        <a href="#!" className="nav_link">Contact</a>
                    </li>
                </div>
                <div className="cta_links">
                    <li className="nav_list">
                        <a id="sign-in" href="#!" onClick={signInWithGoogle} className="nav_link">Sign In</a>
                    </li>
                    <li className="nav_list">
                        <a href="#!" className="nav_link active">Sign Up</a>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;