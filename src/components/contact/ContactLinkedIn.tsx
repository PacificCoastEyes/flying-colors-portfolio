import { BoxArrowUpRight, Linkedin } from "react-bootstrap-icons";

function ContactLinkedIn() {
    return (
        <div id="contact-linkedin" className="w-100 d-flex align-items-center">
            <Linkedin size={50} fill="#0077b5" />
            <a
                href="https://www.linkedin.com/in/amitaizand"
                rel="noreferrer"
                target="_blank"
            >
                <div className="d-flex align-items-center">
                    <h4 className="ms-3 mt-1 me-2">
                        Connect with me on LinkedIn
                    </h4>
                    <BoxArrowUpRight className="mt-1" />
                </div>
            </a>
        </div>
    );
}

export default ContactLinkedIn;
