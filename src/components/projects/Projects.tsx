import React, { useEffect, useState } from 'react';
import ProjectsTable from '@components/projects/projects-table/ProjectsTable';
import getProjects from '@services/projects/projects-http.service';
import { ProjectsResponseDto } from '@models/projects/projects';
import styles from './Projects.module.less';

const Projects: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectsResponseDto>();

  const fetchProjects = async () => {
    try {
      const response: ProjectsResponseDto = await getProjects();
      setProjects(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className={styles.compWrap}>
      <ProjectsTable loading={loading} projects={projects} />
    </div>
  );
};

export default Projects;
