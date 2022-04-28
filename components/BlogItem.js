import Link from 'next/link';
import styles from '../styles/Blog.module.css';

const BlogItem = ({ title, description, slug }) => {
  return (
    <div className="blog-item">
      <Link href={`/blogpost/${slug}`}>
        <h3 className={styles.blogItemh3}>{title}</h3>
      </Link>
      <p>{description}</p>
    </div>
  );
};

export default BlogItem;
