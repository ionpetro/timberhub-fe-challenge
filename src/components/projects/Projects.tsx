import React, { useEffect, useState } from 'react';
import ProjectsTable from '@components/projects/projects-table/ProjectsTable';
import getProjects from '@services/projects/projects-http.service';
import { ProjectsModel, ProjectsResponseDto } from '@models/projects/projects';
import { Input } from 'antd';
import useDebounce from '@hooks/useDebounce';
import styles from './Projects.module.less';

const Projects: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectsModel[]>([]);
  const [filter, setFilter] = useState('');
  const debouncedValue = useDebounce(filter);

  const fetchProjects = async () => {
    try {
      const response: ProjectsResponseDto = await getProjects();
      setProjects(response.rows);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(({ project }) =>
    project.company.toLowerCase().includes(debouncedValue.toLowerCase()),
  );

  return (
    <div className={styles.compWrap}>
      <Input
        placeholder="search by company name"
        onChange={(e) => setFilter(e.target.value)}
      />
      <ProjectsTable loading={loading} projects={filteredProjects} />
    </div>
  );
};

export default Projects;
