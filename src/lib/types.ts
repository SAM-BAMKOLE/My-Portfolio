export interface IProjectsType {
  title: string;
  technologies: string[];
  description: string;
  github_link?: string | null;
  live_link?: string;
  image?: string | null;
}

interface IDataLinksType {
  platform: string;
  url: string;
}

export interface IDataType {
  name: string;
  professional_title: string;
  location: string;
  contact: {
    phone: string;
    email: string;
  };
  links: IDataLinksType[];
}

export interface IWorkExperienceType {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
}

export interface IEducationType {
  institution: string;
  degree: string;
  field: string;
  duration: string;
}
