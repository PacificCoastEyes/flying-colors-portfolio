export interface Project {
    externalLink?: string;
    name: string;
    title: string;
    description: string;
    client?: string;
    frontEnd: {
        name: string;
        label: string;
    }[];
    backEnd?: {
        name: string;
        label: string;
    }[];
}

export const projects: Project[] = [
    {
        externalLink: "https://brave-water-053e78e03.3.azurestaticapps.net",
        name: "moah",
        title: "Moah Mental Health App",
        description:
            "A simple app for breath meditation, soundscape relaxation, inspirational quotes, and journaling.",
        frontEnd: [
            {
                name: "react-typescript",
                label: "React (TypeScript)",
            },
            {
                name: "material-ui",
                label: "Material UI",
            },
        ],
        backEnd: [
            {
                name: "dotnet-core",
                label: ".NET Core",
            },
            {
                name: "mongodb",
                label: "MongoDB",
            },
        ],
    },
    {
        externalLink: "/",
        name: "flying-colors",
        title: "Flying Colors Web Studio",
        description:
            "A portfolio website introducing myself and showcasing my work, with a contact form and links to my LinkedIn and GitHub profiles.",
        frontEnd: [
            {
                name: "react-typescript",
                label: "React (TypeScript)",
            },
            {
                name: "bootstrap",
                label: "Bootstrap",
            },
        ],
        backEnd: [
            {
                name: "dotnet-core",
                label: ".NET Core",
            },
            {
                name: "azure-functions",
                label: "Azure Functions",
            },
        ],
    },
    {
        name: "myderma-annotation-tool",
        title: "MyDerma Annotation Tool",
        description:
            "A full-stack web application for dermatologists to perform annotation of medical case images, and for annotation tasks to be managed.",
        client: "DermaDetect",
        frontEnd: [
            {
                name: "react-javascript",
                label: "React (JavaScript)",
            },
            {
                name: "bootstrap",
                label: "Bootstrap",
            },
        ],
        backEnd: [
            {
                name: "node-express",
                label: "Node.js with Express",
            },
            {
                name: "postgresql-prisma",
                label: "PostgreSQL with Prisma",
            },
            {
                name: "jwt-cookies-bcrypt",
                label: "JWT auth with localStorage and BCrypt",
            },
        ],
    },
    {
        externalLink: "https://nice-ground-05b767403.2.azurestaticapps.net/",
        name: "the-pet-haven",
        title: "The Pet Haven",
        description:
            "A full-stack website to search for, view, adopt, and foster pets, and for administrators to manage users and pets.",
        client: "Fictitious pet adoption agency",
        frontEnd: [
            {
                name: "react-javascript",
                label: "React (JavaScript)",
            },
            {
                name: "bootstrap",
                label: "Bootstrap",
            },
        ],
        backEnd: [
            {
                name: "node-express",
                label: "Node.js with Express",
            },
            {
                name: "mysql-knex",
                label: "MySQL with Knex.js",
            },
            {
                name: "jwt-cookies-bcrypt",
                label: "JWT auth with cookies and BCrypt",
            },
        ],
    },
    {
        externalLink: "https://constructionliaison.ca/",
        name: "lura",
        title: "LURA Consulting Construction Liaison Microsite",
        description:
            "A webpage promoting LURA's services for infrastructure projects.",
        client: "LURA Consulting",
        frontEnd: [
            {
                name: "html",
                label: "HTML",
            },
            {
                name: "css",
                label: "CSS",
            },
        ],
    },
];
