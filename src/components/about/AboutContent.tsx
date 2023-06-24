import Definitions from "./Definitions";
import Bio from "./Bio";
import Skills from "./Skills";
import "../../styles/about/AboutContent.css";

function AboutContent() {
    return (
        <div
            id="about-content"
            className="d-flex flex-column align-items-center px-5 py-3"
        >
            <Definitions />
            <Bio />
            <Skills />
        </div>
    );
}

export default AboutContent;
