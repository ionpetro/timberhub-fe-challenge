import type { NextPage } from 'next';
import Projects from '@components/projects/Projects';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>timberhub fe challenge</title>
      </Head>
      <Projects />
    </section>
  );
};

export default Home;
