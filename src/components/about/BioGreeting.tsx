import headshot from "../../images/headshot.jpg";

function BioGreeting() {
    return (
        <div
            id="bio-greeting"
            className="d-flex justify-content-center align-items-center mb-3"
        >
            <img src={headshot} id="headshot" alt="Amitai Zand" />
            <h2 className="ms-3 fw-bold">
                Hey there, thanks for dropping in! 👋
            </h2>
        </div>
    );
}

export default BioGreeting;
