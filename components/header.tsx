import Link from 'next/link';
import Head from 'next/head';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import ThemeChanger from './ThemeChanger';

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blogs' }
];

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Shota Akizuki</title>
        <meta name="description" content="Shota's Blog" />
        <meta name="og:title" content="Shota Dev" />
        <meta
          property="og:image"
          content="https://shota-akizuki.ml/mantra.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shota_akizuki" />
        <meta name="twitter:title" content="Shota's Blog" />
        <meta
          name="twitter:description"
          content="Minimalistic, Practical, Beautiful."
        />
      </Head>
      <ul>
        <li className={styles.themeChanger}>
          <ThemeChanger />
        </li>
        {navItems.map(({ label, page, link }) => (
          <li key={label} className={styles.navItems}>
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
