import type { Project } from "../types/Project";

const projects: Project[] = [
    {
        id: 1,
        title: "Restaurant REST API",
        description: "API REST to manage orders in a restaurant. It allows create, read, update and delete operations.",
        technologies: ["NodeJS", "Docker", "PostgreSQL"],
        githubUrl: "https://github.com/MaicolG-29/basic-crud-api.git",
        type: "fullstack",
        difficulty: "intermediate"
    },
    {
        id: 2,
        title: "Academic Data Base",
        description: "The design for an university system data base that can manage students, teachers, courses, inscriptions. Following professional data base design pipeline (Conceptual design, logic design and physical design.",
        technologies: ["PostgreSQL"],
        githubUrl: "https://github.com/MaicolG-29/basic-crud-api.git",
        type: "ddbb",
        difficulty: "intermediate"
    }
    
]

export default projects;