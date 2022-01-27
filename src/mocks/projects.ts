import { ProjectsResponseDto } from '@models/projects/projects';

const projectsResponse: ProjectsResponseDto = {
  rows: [
    {
      id: 1,
      project: {
        name: 'App Development',
        company: 'Dropbox, Inc.',
        logo: 'https://res.cloudinary.com/ionpetro/image/upload/v1643163607/timberhub/python_rfcpxn.svg',
      },
      author: {
        name: 'Shane Black',
        role: 'Project Manager',
        avatar:
          'https://res.cloudinary.com/ionpetro/image/upload/v1643164158/timberhub/5_kpyssh.svg',
      },
      progress: 10,
      deadline_in_days: 0,
    },
    {
      id: 2,
      project: {
        name: 'Website Redesign',
        company: 'Gitlab Inc.',
        logo: 'https://res.cloudinary.com/ionpetro/image/upload/v1643163607/timberhub/gitlab_oh7jq1.svg',
      },
      author: {
        name: 'Will Peterson',
        role: 'Project Director',
        avatar:
          'https://res.cloudinary.com/ionpetro/image/upload/v1643164068/timberhub/3_ehdmqi.svg',
      },
      progress: 50,
      deadline_in_days: 123,
    },
  ],
};

export default projectsResponse;
