import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="A blog for hunting coders by a hunting coder."
      />
      <meta
        name="keywords"
        content="next.js,huntingcoder, hunting coder, huntingcoder blog,coding blog"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
