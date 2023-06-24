import "../../styles/home/Hero.css";
function Hero() {
    return (
        <div id="hero" className="d-flex flex-column justify-content-center">
            <div id="hero-text-container-1" className="hero-text-container">
                <h1 id="hero-text-1">I'm Amitai. Come fly with me!</h1>
            </div>
            <div id="hero-text-container-2" className="hero-text-container">
                <h2 id="hero-text-2">Full Stack Web Developer</h2>
            </div>
            <div id="hero-text-container-3" className="hero-text-container">
                <h3 id="hero-text-3">#UpAndUp</h3>
            </div>
        </div>
    );
}

export default Hero;
