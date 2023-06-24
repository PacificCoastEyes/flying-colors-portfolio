import ContactLinkedIn from "./ContactLinkedIn";
import "../../styles/contact/ContactContent.css";
import ContactForm from "./ContactForm";
function ContactContent() {
    return (
        <div
            id="contact-content"
            className="d-flex flex-column align-items-center p-4"
        >
            <ContactLinkedIn />
            <ContactForm />
        </div>
    );
}

export default ContactContent;
