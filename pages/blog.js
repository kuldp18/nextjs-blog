import { useState } from 'react';
import styles from '../styles/Blog.module.css';
import CustomHead from '../components/CustomHead';
import BlogItem from '../components/BlogItem';
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.blogs);

  return (
    <main className={styles.main}>
      <CustomHead title="Blog - Hunting Coder" />
      <div className={styles.blogs}>
        <h2 className={styles.blogTitleh2}>Blogs</h2>
        {/* rendering all blogs */}
        {blogs.map((blog) => {
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
  );
};

export async function getServerSideProps(context) {
  const response = await fetch('https://hunting-coder.vercel.app/api/blogs');
  const blogs = await response.json();

  return {
    props: { blogs }, // will be passed to the page component as props
  };
}

export default Blog;
