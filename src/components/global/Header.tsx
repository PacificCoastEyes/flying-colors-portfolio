import { Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/global/Header.css";
import Logo from "../../img/logo.png";

function Header() {
    return (
        <div
            id="header"
            className="w-100 d-flex justify-content-between align-items-center px-5"
        >
            <Link to="/">
                <img id="logo" src={Logo} alt="Flying Color Web Studios logo" />
            </Link>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Offcanvas id="navbar-offcanvas" placement="end">
                        <Offcanvas.Title id="navbar-offcanvas-title">
                            Menu
                        </Offcanvas.Title>
                        <Link to="/portfolio" className="nav-btn-link">
                            <div id="nav-btn-portfolio" className="nav-btn">
                                <div className="nav-btn-text">Portfolio</div>
                            </div>
                        </Link>
                        <Link to="/about" className="nav-btn-link">
                            <div id="nav-btn-about" className="nav-btn">
                                <div className="nav-btn-text">About</div>
                            </div>
                        </Link>
                        <Link to="/contact" className="nav-btn-link">
                            <div id="nav-btn-contact" className="nav-btn">
                                <div className="nav-btn-text">Contact</div>
                            </div>
                        </Link>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
