import axiosInstance from '@utils/http-client';
import { ProjectsResponseDto } from '@models/projects/projects';

const getProjects = (): Promise<ProjectsResponseDto> => {
  return axiosInstance.get('/api/projects');
};

export default getProjects;
