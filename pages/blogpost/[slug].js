import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';
import blogs from '../../blog-data/blogs.json';

const PostSlug = () => {
  // TODO: step1: find corresponding file to slug
  // TODO: step2: populate them inside the page
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.filter((blog) => blog.slug === slug);
  const blogObj = blog[0];
  const { title, content } = blogObj;
  return (
    <main className={styles.main}>
      <h1 className={styles.blogTitle}>{title}</h1>
      <hr />
      <div className={styles.content}>{content}</div>
    </main>
  );
};

export default PostSlug;
