import Head from 'next/head';
import { Navbar, UserCard } from '../components';

import {GiGlassHeart} from 'react-icons/gi';

import Loader from '../components/Loader';

import { useGetUsersQuery } from '../services/usersApi';

import styles from '../styles/index.module.css';

const Home = () => {

  const { data: users, isLoading, error } = useGetUsersQuery();

  if (error) return <p>Ooops! Something went wrong. Please try again <GiGlassHeart /></p>;
  if (isLoading) return <Loader />;
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>RomeoCards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container_main}>
        <Navbar />
        <div className={styles.container_cards}>
          <UserCard users={users} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          className="flex items-center justify-center"
          href="https://github.com/edisonabdiel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by EdisonAbdiel
        </a>
      </footer>
    </div>
  )
};

export default Home;