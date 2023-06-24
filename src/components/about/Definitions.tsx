import Definition from "./Definition";
import "../../styles/about/Definitions.css";

function Definitions() {
    return (
        <div
            id="definitions"
            className="w-100 d-flex justify-content-around pb-3"
        >
            <Definition
                word="fly&#8226;ing co&#8226;lors"
                pronunciation="[ flahy-ing kuhl-erz ]"
                entries={[
                    "With great success or distinction.",
                    "A ship's identifying flags.",
                ]}
            />
            <Definition
                word="up and up"
                pronunciation="[ uhp uhn uhp ]"
                entries={[
                    "Constantly improving.",
                    "Honest, trustworthy or respectable.",
                ]}
            />
        </div>
    );
}

export default Definitions;
