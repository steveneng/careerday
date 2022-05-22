import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { resourceLinks } from './constants/constants'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Resources</title>
        <meta name="description" content="Online resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Material and Content
        </h1>

        <p className={styles.description}>
          Get started for 
          <code className={styles.code}>coding</code>
        </p>

        <div className={styles.grid}>
          {resourceLinks.map(({title,link,description})=>ResourceLink(title,link,description))}

 
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

function ResourceLink(title,link,description) {
  return <a href={link} className={styles.card}>
    <h2>{title} &rarr;</h2>
    <p>{description}</p>
  </a>
}

