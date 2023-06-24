import "../../styles/global/Footer.css";

function Footer() {
    return (
        <div id="footer" className="d-flex align-items-center px-5">
            <div id="footer-text-container">
                <span id="footer-text">
                    Flying Colors Web Studio &copy; {new Date().getFullYear()}{" "}
                    Amitai Zand. All rights reserved.
                </span>
            </div>
        </div>
    );
}

export default Footer;
