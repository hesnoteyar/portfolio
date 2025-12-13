export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'tools' | 'languages';
    proficiency: number; // 1 to 100 scale
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string; // ISO date string
    endDate?: string; // ISO date string
    gpa?: number;
    achievements?: string[];
    description?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    bio: string;
    email: string;
    linkedinUrl?: string;
    githubUrl?: string;
}