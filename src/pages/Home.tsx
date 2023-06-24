import { useEffect } from "react";
import Header from "../components/global/Header";
import Hero from "../components/home/Hero";
import Footer from "../components/global/Footer";

function Home() {
    useEffect((): void => {
        document.title = "Flying Colors Web Studio";
    }, []);
    return (
        <div id="home" className="page-layout">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
}

export default Home;
