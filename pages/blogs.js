import Link from 'next/link';
import Header from '../components/header';
import { parseISO, format } from 'date-fns';
import styles from '../styles/blogs.module.css';
import { Footer } from '../components/footer';
import { client } from '../libs/client';

//ブログ一覧を表示するコンポーネント

export default function Blogs({ blog }) {
  return (
    <>
      <Header titlePre="Blogs" />
      <div className={styles.blogs}>
        <h1 style={{ marginBottom: 24 }}>Posts</h1>
        <ul style={{ marginTop: 32 }}>
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
      <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  return {
    props: {
      blog: data.contents
    }
  };
};
