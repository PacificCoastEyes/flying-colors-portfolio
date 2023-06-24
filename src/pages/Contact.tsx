import { useEffect } from "react";
import Header from "../components/global/Header";
import PageBanner from "../components/global/PageBanner";
import ContactContent from "../components/contact/ContactContent";
import Footer from "../components/global/Footer";

function Contact() {
    useEffect((): void => {
        document.title = "Contact - Flying Colors";
    }, []);
    return (
        <div id="contact" className="page-layout">
            <Header />
            <main>
                <PageBanner page="Contact" />
                <ContactContent />
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
