import BioGreeting from "./BioGreeting";
import BioText from "./BioText";
import "../../styles/about/Bio.css";

function Bio() {
    return (
        <div id="bio" className="pt-3">
            <BioGreeting />
            <BioText />
        </div>
    );
}

export default Bio;
