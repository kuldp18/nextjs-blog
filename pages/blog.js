import { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';
import CustomHead from '../components/CustomHead';
import BlogItem from '../components/BlogItem';
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
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

export default Blog;
