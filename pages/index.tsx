import Header from '../components/header';
import styles from '../styles/home.module.css';
import { Footer } from '../components/footer';
import ExtLink from '../components/ext-link';
import Twitter from '../components/svgs/twitter';
import GitHub from '../components/svgs/github';
import Envelope from '../components/svgs/envelope';
import Instagram from '../components/svgs/instagram';
import React from 'react';
import Timeline from '../components/timeline';

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/shota_akizuki',
    label: '@shota_akizuki'
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/shota-akizuki',
    label: '@shota-akizuki'
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:shota0609akizuki@gmail.com',
    label: 'shota0609akizuki@gmail.com'
  },
  {
    Comp: Instagram,
    alt: 'instagram icon',
    link: 'https://instagram.com/shota_akizuki',
    label: '@shota_akizuki'
  }
];

export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.main}>
        <h1>Shota Akizuki</h1>
        <p>
          I’m a developer, designer, and creator. I work as a Developer in
          Osaka. Feel free to contact with me.
        </p>
        <p>
          大阪でWebデザイナー・エンジニアをしています。Web制作・開発について私にできることがあれば、お気軽にご相談ください。
        </p>
        <p className={styles.divider} />
        <Timeline />
        <p className={styles.divider} />
        <ul>
          {contacts.map(({ Comp, link, label }) => {
            return (
              <li key={link}>
                {' '}
                <Comp style={{ height: 24, fill: 'var(--color-accents-1)' }} />
                <ExtLink href={link}> {label}</ExtLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
