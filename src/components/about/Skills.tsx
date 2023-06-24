import "../../styles/about/Skills.css";
import { skillset } from "../../lib/skills";

function Skills() {
    return (
        <div
            id="skills"
            className="w-100 d-flex flex-column align-items-start mt-2"
        >
            <h2 className="ms-5 mb-3">Skills</h2>
            <div id="skillsets" className="w-100 d-flex justify-content-center">
                {skillset.map(set => (
                    <div
                        key={set.category}
                        id={set.category}
                        className="skillset"
                    >
                        <h3 className="my-2">{set.label}</h3>
                        <ul className="skill-list d-flex flex-column flex-wrap">
                            {set.skills.map(skill => (
                                <li key={skill.name}>{skill.label}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
