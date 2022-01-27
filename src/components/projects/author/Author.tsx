import React from 'react';
import Image from 'next/image';
import { AuthorModel } from '@models/author/author';
import styles from './Author.module.less';

type AuthorProps = {
  author: AuthorModel;
};

const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <div className={styles.compWrap}>
      <Image src={author.avatar} width={40} height={40} />
      <div className={styles.info}>
        <span className={styles.name}>{author.name}</span>
        <span className={styles.role}>{author.role}</span>
      </div>
    </div>
  );
};

export default Author;
