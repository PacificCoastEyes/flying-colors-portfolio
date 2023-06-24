import { Card } from "react-bootstrap";
import "../../styles/portfolio/ProjectCard.css";
import { Project } from "../../lib/projects";
import FlyingColorsScreenshot from "../../images/flying_colors_screenshot.jpeg";
import DermaDetectScreenshot from "../../images/derma_detect.jpeg";
import ThePetHavenScreenshot from "../../images/the_pet_haven.png";
import LuraScreenshot from "../../images/lura.jpeg";

function ProjectCard({
    externalLink,
    photo,
    name,
    title,
    description,
    client,
    frontEnd,
    backEnd,
}: Project) {
    function assignPhotoPath(): string {
        let photoPath: string = "";
        switch (photo) {
            case "flying_colors_screenshot.jpeg":
                photoPath = FlyingColorsScreenshot;
                break;
            case "derma_detect.jpeg":
                photoPath = DermaDetectScreenshot;
                break;
            case "the_pet_haven.png":
                photoPath = ThePetHavenScreenshot;
                break;
            case "lura.jpeg":
                photoPath = LuraScreenshot;
                break;
            default:
                break;
        }
        return photoPath;
    }

    return (
        <a
            href={externalLink ? externalLink : "#"}
            rel="noreferrer"
            target={externalLink ? "_blank" : ""}
            className={externalLink ? "" : "no-link"}
        >
            <Card id={name} className="project-card m-3">
                <Card.Header>
                    <Card.Title className="fw-bold my-2">{title}</Card.Title>
                </Card.Header>
                <img
                    src={assignPhotoPath()}
                    alt={`Screenshot of ${title}`}
                ></img>

                <Card.Body>
                    <Card.Text>{description}</Card.Text>
                    {client && (
                        <Card.Text>
                            <span className="fw-bold">Client: </span>
                            {client}
                        </Card.Text>
                    )}
                    <div className="d-flex">
                        <div className="me-2">
                            <div className="fw-bold">Front-End:</div>
                            <ul>
                                {frontEnd.map(skill => (
                                    <li key={skill.name}>{skill.label}</li>
                                ))}
                            </ul>
                        </div>
                        {backEnd && (
                            <div>
                                <div className="fw-bold">Back-End:</div>
                                <ul>
                                    {backEnd.map(skill => (
                                        <li key={skill.name}>{skill.label}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </a>
    );
}

export default ProjectCard;
