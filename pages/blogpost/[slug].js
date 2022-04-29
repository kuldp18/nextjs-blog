import { useState } from 'react';
import styles from '../../styles/BlogPost.module.css';

const PostSlug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  const { title, content } = blog;
  return (
    <main className={styles.main}>
      <h1 className={styles.blogTitle}>{blog && title}</h1>
      <hr />
      <div className={styles.content}>{blog && content}</div>
    </main>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch(
    `http://localhost:3000/api/getblog?slug=${context.query.slug}`
  );
  const blog = await response.json();

  return {
    props: { blog }, // will be passed to the page component as props
  };
}

export default PostSlug;
