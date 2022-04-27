import { useRouter } from 'next/router';

const PostSlug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <div>Slug: {slug}</div>;
};

export default PostSlug;
