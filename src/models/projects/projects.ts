import { AuthorModel } from '../author/author';

export interface ProjectsResponseDto {
  rows: Array<ProjectsModel>;
}

export interface ProjectsModel {
  id: number;
  project: ProjectModel;
  author: AuthorModel;
  progress: number;
  deadline_in_days: number;
}

export interface ProjectModel {
  name: string;
  company: string;
  logo: string;
}
