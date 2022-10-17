import './Layout.css';
import {Outlet} from 'react-router-dom'


const Layout = () => {

    <section id="hero">
            <header>
                <div className="container">
                    <Navbar signInWithGoogle={signInWithGoogle} />
                </div>
            </header>

            
            <div className="container">
                <Outlet />
            </div>
    </section>
}

export default Layout