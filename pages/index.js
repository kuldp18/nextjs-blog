import { useState } from 'react';
import styles from '../styles/Home.module.css';
import CustomHead from '../components/CustomHead';
import BlogItem from '../components/BlogItem';

export default function Home(props) {
  const [recentBlogs, setRecentBlogs] = useState(props.blogs.slice(0, 3));
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
          {/* rendering all blogs */}
          {recentBlogs.map((blog) => {
            const { title, slug, description } = blog;
            return (
              <BlogItem
                title={title}
                slug={slug}
                description={description}
                key={slug}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:3000/api/blogs');
  const blogs = await response.json();

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}
