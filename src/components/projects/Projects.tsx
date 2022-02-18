import React, { useEffect, useMemo, useState } from 'react';
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
  // add this input to demonstrate component re-rendering
  const [text, setText] = useState('');

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

  console.log('RUNNING RENDER FUNCTION');

  useEffect(() => {
    fetchProjects();
  }, []);

  // filtered projects runs only when filter changes, not when text changes
  const filteredProjects = useMemo(() => {
    console.log('filtering');
    return projects.filter(({ project }) =>
      project.company.toLowerCase().includes(debouncedValue.toLowerCase()),
    );
  }, [filter, projects]);

  return (
    <div className={styles.compWrap}>
      <Input placeholder="search" onChange={(e) => setFilter(e.target.value)} />
      {text}
      <Input placeholder="search" onChange={(e) => setText(e.target.value)} />
      <ProjectsTable loading={loading} projects={filteredProjects} />
    </div>
  );
};

export default Projects;
