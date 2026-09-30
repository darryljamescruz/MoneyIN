import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MoneyIN - Finance Tracker</title>
        <meta name="description" content="Personal finance tracker with household sharing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className="mb-4 text-3xl font-bold">
            MoneyIN
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            Personal finance tracker with household sharing capabilities
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
