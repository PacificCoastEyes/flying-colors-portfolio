type Skill = {
    name: string;
    label: string;
};

type SkillCategory = {
    category: string;
    label: string;
    skills: Skill[];
};

type SkillSet = SkillCategory[];

export const skillset: SkillSet = [
    {
        category: "front-end",
        label: "Front-End",
        skills: [
            {
                name: "html",
                label: "HTML",
            },
            {
                name: "css",
                label: "CSS",
            },
            {
                name: "bootstrap",
                label: "Bootstrap",
            },
            {
                name: "material-ui",
                label: "Material UI",
            },
            {
                name: "javascript",
                label: "JavaScript (ES6)",
            },
            {
                name: "typescript",
                label: "Typescript",
            },
            {
                name: "react",
                label: "React",
            },
            {
                name: "jquery",
                label: "jQuery",
            },
        ],
    },
    {
        category: "back-end",
        label: "Back-End",
        skills: [
            {
                name: "nodejs",
                label: "Node.js",
            },
            {
                name: "express",
                label: "Express",
            },
            {
                name: "python",
                label: "Python",
            },
            {
                name: "flask",
                label: "Flask",
            },
            {
                name: "dotnet-core",
                label: ".NET Core",
            },
            {
                name: "mysql",
                label: "MySQL",
            },
            {
                name: "postgresql",
                label: "PostgreSQL",
            },
            {
                name: "mongodb",
                label: "MongoDB",
            },
            {
                name: "restful-apis",
                label: "RESTful APIs",
            },
            {
                name: "jwt",
                label: "JWT",
            },
        ],
    },
    {
        category: "cloud-saas-other",
        label: "Cloud, SaaS & Other",
        skills: [
            {
                name: "microsoft-azure",
                label: "Microsoft Azure",
            },
            {
                name: "google-cloud-firebase",
                label: "Google Cloud + Firebase",
            },
            {
                name: "vercel",
                label: "Vercel",
            },
            {
                name: "git",
                label: "Git",
            },
            {
                name: "unit-testing",
                label: "Unit Testing",
            },
            {
                name: "wordpress",
                label: "WordPress",
            },
            {
                name: "adobe-cc",
                label: "Adobe Creative Cloud",
            },
            {
                name: "twilio",
                label: "Twilio",
            },
        ],
    },
];
