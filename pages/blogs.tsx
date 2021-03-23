import Link from 'next/link';
import Header from '../components/header';
import { parseISO, format } from 'date-fns';
import styles from '../styles/blogs.module.css';
import axios from 'axios';

//ブログ一覧を表示するコンポーネント

export default function Blogs({ blog }) {
  return (
    <div className={styles.blogs}>
      <Header titlePre="Blogs" />
      <ul style={{ marginTop: 40 }}>
        {blog.map((blog) => (
          <li key={blog.id}>
            <span>{format(parseISO(blog.publishedAt), 'PP')}</span>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async ({ preview, previewData }) => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };
  const data = await fetch('https://shota-akizuki.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null);
  // プレビュー時は draft のコンテンツを追加
  if (preview) {
    const draftUrl =
      process.env.END_POINT +
      'blog/' +
      previewData.id +
      `?draftKey=${previewData.draftKey}`;
    const draftRes = await axios.get(draftUrl, key);
    data.unshift(await draftRes.data);
  }
  return {
    props: {
      blog: data.contents
    }
  };
};
