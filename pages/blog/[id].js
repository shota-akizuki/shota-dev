import styles from '../../styles/blog.module.scss';
import { parseISO, format } from 'date-fns';
import Header from '../../components/header';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useEffect } from 'react';

//ブログポスト本体のコンポーネント
export default function BlogId({ blog, preview }) {
  //Twitterの埋め込みをマウント時に取得する
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', 'true');
    document.head.appendChild(script);
  }, []);
  //ブログがない時のエラー処理
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
          {preview
            ? format(parseISO(blog.createdAt), 'PP')
            : format(parseISO(blog.publishedAt), 'PP')}
        </p>
        <p className={styles.category}>
          {blog.category && `${blog.category.name}`}
        </p>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{
            __html: `${blog.contents}`
          }}
        />
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
  // Cookieが設定されたプレビューモードのページをリクエストした場合:
  // - context.previewはtrueになる。
  // - context.previewDataはsetPreviewDataで使用されている引数と同じになる。
  const id = context.params.id;
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };
  let url = `https://shota-akizuki.microcms.io/api/v1/blog/` + id;
  // context.previewがtrueの場合、${slug}?draftKey=${draftKey} をAPIエンドポイントに追加
  if (context.preview) {
    url += `?draftKey=${context.previewData.draftKey}`;
  }

  const data = await fetch(url, key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data,
      preview: context.preview ? context.preview : null
    }
  };
};
