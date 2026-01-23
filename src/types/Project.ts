export type ProjectType =
| "backend"
| "frontend"
| "fullstack"
| "ddbb"
| "algorithm";

export type Difficulty =
| "beginner"
| "intermediate"
| "advance";

export interface Project {
    id: number,
    title: string,
    description: string,
    technologies: string[],
    githubUrl: string,
    demoUrl ? : string,
    type: ProjectType,
    difficulty: Difficulty 
}
