import styles from '../../styles/blog.module.scss';
import { parseISO, format } from 'date-fns';
import Header from '../../components/header';
import Head from 'next/head';
import ErrorPage from 'next/error';

//ここがブログのポスト本体
export default function BlogId({ blog }) {
  if (!blog) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Header titlePre="Blog" />
      <Head>
        <title>{blog.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:image"
          content={blog.thumbnail && blog.thumbnail.url}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shota_akizuki" />
        <meta name="twitter:title" content={blog.title} />
        <meta
          name="twitter:description"
          content="Minimalistic, Practical, Beautiful."
        />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.publishedAt}>
          {format(parseISO(blog.publishedAt), 'PP')}
        </p>

        <div
          className={styles.post}
          dangerouslySetInnerHTML={{
            __html: `${blog.contents}`
          }}
        />
        <p className={styles.category}>
          Category…{blog.category && `${blog.category.name}`}
        </p>
      </main>
    </>
  );
}

//静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };
  const data = await fetch('https://shota-akizuki.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: true };
};

// データをテンプレートに受け渡す部分の処理
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const draftKey = context.previewData?.draftKey;
  const preview = context.preview;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };

  let url = 'https://shota-akizuki.microcms.io/api/v1/blog/' + id;
  if (preview) {
    url += `?draftKey=${draftKey}`;
  }

  const data = await fetch(url, key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data
    }
  };
};
