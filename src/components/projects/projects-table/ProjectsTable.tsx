import React from 'react';
import { Progress, Table } from 'antd';
import {
  ProjectModel,
  ProjectsModel,
  ProjectsResponseDto,
} from '@models/projects/projects';
import Project from '@components/projects/project/Project';
import Author from '@components/projects/author/Author';
import { AuthorModel } from '@models/author/author';
import DeadlineTag from '@components/projects/deadline-tag/DeadlineTag';
import styles from './ProjectsTable.module.less';

type ProjectsTableProps = {
  loading: boolean;
  projects?: ProjectsResponseDto;
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ loading, projects }) => {
  const columns = [
    {
      title: 'project name',
      dataIndex: ['project'],
      key: 'name',
      width: '25%',
      render: (project: ProjectModel) => <Project project={project} />,
    },
    {
      title: 'created by',
      dataIndex: ['author'],
      key: 'author',
      width: '25%',
      render: (author: AuthorModel) => <Author author={author} />,
    },
    {
      title: 'progress',
      dataIndex: 'progress',
      key: 'progress',
      width: '25%',
      render: (progress: number) => (
        <Progress className={styles.progress} percent={progress} />
      ),
    },
    {
      title: 'deadline',
      dataIndex: 'deadline_in_days',
      key: 'deadline',
      width: '25%',
      render: (deadline: number) => <DeadlineTag deadline={deadline} />,
    },
  ];

  return (
    <Table
      pagination={false}
      loading={loading}
      rowKey={(project: ProjectsModel) => project.id}
      columns={columns}
      dataSource={projects?.rows || []}
    />
  );
};

ProjectsTable.defaultProps = {
  projects: undefined,
};

export default ProjectsTable;
