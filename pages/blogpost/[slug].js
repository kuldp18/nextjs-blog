import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

const PostSlug = () => {
  const [blog, setBlog] = useState('');
  const router = useRouter();
  const { slug } = router.query;
  const fetchBlog = async (slug) => {
    try {
      const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlog(slug);
  }, []);

  const { title, content } = blog;
  return (
    <main className={styles.main}>
      <h1 className={styles.blogTitle}>{blog && title}</h1>
      <hr />
      <div className={styles.content}>{blog && content}</div>
    </main>
  );
};

export default PostSlug;
