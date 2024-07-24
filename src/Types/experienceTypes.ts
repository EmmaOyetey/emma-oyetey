export type OrganisationType = {
    name: string;
    location: string;
    tagline: string;
    description: string;
    overview: string;
    organisation_url: string;
  };

  export type RoleType = {
    job_title: string;
    areas_responsibility: string [];
    start_date: string; // Consider using Date type if you need date operations
    finish_date: string; // Consider using Date type if you need date operations
  };

  export type AchievementType = {
    item: string [];
    link: string [];
    link_text: string [];
  };

 export type ExperienceType = {
    id: number;
    organisation: OrganisationType;
    roles: RoleType[];
    programmes?: string[]; // Optional array of strings
    notable?: string[]; // Optional array of strings
    tags?: string[];
    achievements?: AchievementType;
  };