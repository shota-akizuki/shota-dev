import Link from 'next/link';
import Head from 'next/head';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import { Divider } from '../components/divider';

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Contact', page: '/contact' }
];

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png';

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Shota Developer Website</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="Shota Developer Website" />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
      <Divider />
    </header>
  );
};
