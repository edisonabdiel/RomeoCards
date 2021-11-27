//Next components
import Head from 'next/head';
//Custom components
import { Navbar, Loader, CardList } from '../components';
//Icons
import { GiGlassHeart } from 'react-icons/gi';
//Services
import { useGetUsersQuery } from '../services/usersApi';
//Global styles
import styles from '../styles/index.module.css';

const Home = () => {

  const { data: usersData, isLoading, error } = useGetUsersQuery();

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
          <CardList usersData={usersData} />
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