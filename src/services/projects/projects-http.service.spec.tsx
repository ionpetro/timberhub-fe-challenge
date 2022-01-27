import instance from '@utils/http-client';
import getProjects from '@services/projects/projects-http.service';
import projectsResponse from '@mocks/projects';

describe('Projects Service', () => {
  it('should call the get projects api and respond correctly', async () => {
    const mockedAxios = jest
      .spyOn(instance, 'get')
      .mockImplementation(() => Promise.resolve({ data: projectsResponse }));

    const response = await getProjects();
    expect(mockedAxios).toHaveBeenCalledWith('/api/projects');
    expect(response).toEqual({ data: projectsResponse });
  });
});
