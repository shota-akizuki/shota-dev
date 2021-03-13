import Link from 'next/link';
import Head from 'next/head';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blogs' },
  { label: 'Contact', page: '/contact' }
];

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Shota Developer Website</title>
        <meta name="description" content="" />
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
    </header>
  );
};
