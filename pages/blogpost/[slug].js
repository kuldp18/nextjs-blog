import { useState } from 'react';
import styles from '../../styles/BlogPost.module.css';
import CustomHead from '../../components/CustomHead';

const PostSlug = (props) => {
  const [blog, setBlog] = useState(props.blog);

  const createMarkup = (content) => {
    return { __html: content };
  };

  const { title, content } = blog;
  return (
    <main className={styles.main}>
      <CustomHead title={`${title} | Hunting Coder`} />
      <h1 className={styles.blogTitle}>{blog && title}</h1>
      <hr />
      {blog && (
        <div
          className={styles.content}
          dangerouslySetInnerHTML={createMarkup(content)}
        ></div>
      )}
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
