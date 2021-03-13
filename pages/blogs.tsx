import Link from 'next/link';
import Header from '../components/header';
import { parseISO, format } from 'date-fns';
import styles from '../styles/blogs.module.css';

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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  };
  const data = await fetch('https://shota-akizuki.microcms.io/api/v1/blog', key)
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      blog: data.contents
    }
  };
};
