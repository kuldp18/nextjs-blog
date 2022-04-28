import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="keywords"
          content="next.js,huntingcoder, hunting coder, huntingcoder blog,coding blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder.
        </p>

        <div className={styles.blogs}>
          <h2 style={{ fontSize: '2rem' }}>Popular Blogs</h2>
          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ipsa, adipisci repellendus tenetur, non harum nam voluptates
              pariatur, necessitatibus sit sunt ullam ducimus ut vitae quia
              incidunt aperiam quo. Sed maxime eligendi harum quis adipisci
              dolor autem aliquid delectus omnis.
            </p>
          </div>
          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ipsa, adipisci repellendus tenetur, non harum nam voluptates
              pariatur, necessitatibus sit sunt ullam ducimus ut vitae quia
              incidunt aperiam quo. Sed maxime eligendi harum quis adipisci
              dolor autem aliquid delectus omnis.
            </p>
          </div>
          <div className="blog-item">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              ipsa, adipisci repellendus tenetur, non harum nam voluptates
              pariatur, necessitatibus sit sunt ullam ducimus ut vitae quia
              incidunt aperiam quo. Sed maxime eligendi harum quis adipisci
              dolor autem aliquid delectus omnis.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
