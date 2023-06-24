import { Link } from "react-router-dom";

function BioText() {
    return (
        <div id="bio-text" className="d-flex flex-column align-items-center">
            <div id="bio-text-wrapper" className="w-75">
                <p>
                    I'm Amitai Zand, and Flying Colors is my personal brand. It
                    represents boldness, creativity, curiosity, and optimism,
                    facets of my personality that I pour into my work every day
                    as a full stack developer and lifelong learner.
                </p>
                <p>
                    Formerly an urban planner working in the public engagement
                    and community consultation space, I place particular
                    emphasis on beautiful, responsive, and intuitive user design
                    and positive social impact in my coding projects. Check them
                    out on the <Link to="/portfolio">Portfolio page</Link> or my{" "}
                    <a
                        href="https://github.com/PacificCoastEyes"
                        rel="noreferrer"
                        target="_blank"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <p>
                    Hiring? I'd be happy to connect and send along my CV! Don't
                    hesitate to get in touch with me on{" "}
                    <a
                        href="https://www.linkedin.com/in/amitaizand"
                        rel="noreferrer"
                        target="_blank"
                    >
                        LinkedIn
                    </a>{" "}
                    or send a message on my{" "}
                    <Link to="/contact">Contact page</Link>.
                </p>
            </div>
        </div>
    );
}

export default BioText;
