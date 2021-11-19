import Head from 'next/head';
import UserCard from '../components/userCard/UserCard';

import { useGetUsersQuery } from '../services/usersApi';

const Home = () => {

  const { data: users, isLoading, error } = useGetUsersQuery();

  console.log(users)

  if (isLoading) return <p>Loading...</p>;
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>RomeoCards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Navbar Goes here
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-6xl mt-6 sm:w-full">
          <UserCard users={users} />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/edisonabdiel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by EdisonAbdiel
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export default Home;