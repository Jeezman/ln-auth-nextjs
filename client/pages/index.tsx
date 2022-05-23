import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Bitcoin, Lightning" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">LN_AUTH-NEXTJS</a>
        </h1>

        <p className={styles.description}>
          Get started by navigating to the {' '}
          <Link  href="/login">
            <a className={styles.navigate}>Login Page</a>
          </Link>
        </p>
      </main>
    </div>
  )
}

export default Home
