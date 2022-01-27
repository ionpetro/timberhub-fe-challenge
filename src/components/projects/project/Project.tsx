import React from 'react';
import { ProjectModel } from '@models/projects/projects';
import Image from 'next/image';
import styles from './Project.module.less';

type ProjectProps = {
  project: ProjectModel;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className={styles.compWrap}>
      <div className={styles.logoWrapper}>
        <Image src={project.logo} width={30} height={30} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{project.name}</span>
        <span className={styles.company}>{project.company}</span>
      </div>
    </div>
  );
};

export default Project;
