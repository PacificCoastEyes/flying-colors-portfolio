import { useEffect } from "react";
import Header from "../components/global/Header";
import PageBanner from "../components/global/PageBanner";
import AboutContent from "../components/about/AboutContent";
import Footer from "../components/global/Footer";

function About() {
    useEffect((): void => {
        document.title = "About - Flying Colors";
    }, []);
    return (
        <div id="home" className="page-layout">
            <Header />
            <main>
                <PageBanner page="About" />
                <AboutContent />
            </main>
            <Footer />
        </div>
    );
}

export default About;
