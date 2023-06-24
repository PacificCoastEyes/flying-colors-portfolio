import { useEffect } from "react";
import Header from "../components/global/Header";
import PageBanner from "../components/global/PageBanner";
import ProjectCard from "../components/portfolio/ProjectCard";
import Footer from "../components/global/Footer";
import { Project, projects } from "../lib/projects";
import "../styles/portfolio/Portfolio.css";

function Portfolio() {
    useEffect((): void => {
        document.title = "Portfolio - Flying Colors";
    }, []);

    return (
        <div id="contact" className="page-layout">
            <Header />
            <main>
                <PageBanner page="Portfolio" />
                <div
                    id="project-cards-container-wrapper"
                    className="d-flex justify-content-center"
                >
                    <div
                        id="project-cards-container"
                        className="d-flex flex-wrap p-3"
                    >
                        {projects.map((project: Project) => (
                            <ProjectCard
                                key={project.name}
                                externalLink={project.externalLink}
                                photo={project.photo}
                                name={project.name}
                                title={project.title}
                                description={project.description}
                                client={project.client}
                                frontEnd={project.frontEnd}
                                backEnd={project.backEnd}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Portfolio;
