import Header from '../components/header';
import styles from '../styles/home.module.css';
import { Footer } from '../components/footer';
import ExtLink from '../components/ext-link';
import Twitter from '../components/svgs/twitter';
import GitHub from '../components/svgs/github';
import Envelope from '../components/svgs/envelope';
import Instagram from '../components/svgs/instagram';
import React from 'react';

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

// Home画面を表示する
export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.main}>
        <h1 >Shota Akizuki</h1>
        <p >Developer / Flutter / Dart / Firebase</p>
        <ul>
          {contacts.map(({ Comp, link, label }) => {
            return (
              <li key={link}>
                <Comp style={{ height: 20, fill: 'var(--color-accents-1)' }} />
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
