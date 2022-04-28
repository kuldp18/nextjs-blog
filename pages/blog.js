import styles from '../styles/Blog.module.css';
import blogData from '../blog-data/blogs.json';
import Link from 'next/link';

const Blog = () => {
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <h2 style={{ fontSize: '2rem' }}>Blogs</h2>
        {blogData.map(({ title, slug, description }) => (
          <div className="blog-item" key={slug}>
            <Link href={`/blogpost/${slug}`}>
              <h3 className={styles.blogItemh3}>{title}</h3>
            </Link>
            <p>{description}</p>
          </div>
        ))}
        {/* <div className="blog-item">
          <Link href="/blogpost/learn-javascript-2022">
            <h3 className={styles.blogItemh3}>
              How to learn JavaScript in 2022?
            </h3>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsa, adipisci repellendus tenetur, non harum nam voluptates
            pariatur, necessitatibus sit sunt ullam ducimus ut vitae quia
            incidunt aperiam quo. Sed maxime eligendi harum quis adipisci dolor
            autem aliquid delectus omnis.
          </p>
        </div>
        <div className="blog-item">
          <h3 className={styles.blogItemh3}>
            How to learn JavaScript in 2022?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsa, adipisci repellendus tenetur, non harum nam voluptates
            pariatur, necessitatibus sit sunt ullam ducimus ut vitae quia
            incidunt aperiam quo. Sed maxime eligendi harum quis adipisci dolor
            autem aliquid delectus omnis.
          </p>
        </div>
        <div className="blog-item">
          <h3 className={styles.blogItemh3}>
            How to learn JavaScript in 2022?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ipsa, adipisci repellendus tenetur, non harum nam voluptates
            pariatur, necessitatibus sit sunt ullam ducimus ut vitae quia
            incidunt aperiam quo. Sed maxime eligendi harum quis adipisci dolor
            autem aliquid delectus omnis.
          </p>
        </div> */}
      </div>
    </main>
  );
};

export default Blog;
