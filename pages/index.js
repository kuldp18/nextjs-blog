import styles from '../styles/Home.module.css';
import CustomHead from '../components/CustomHead';

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead title="Hunting Coder" />
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>

        <p className={styles.description}>
          A blog for hunting coders by a hunting coder.
        </p>

        <div className={styles.blogs}>
          <h2 style={{ fontSize: '2rem' }}>Latest Blogs</h2>
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
