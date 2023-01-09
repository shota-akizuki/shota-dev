
import styles from '../styles/home.module.css';
import { Footer } from '../components/footer';

import Twitter from '../components/svgs/twitter';
import GitHub from '../components/svgs/github';
import Envelope from '../components/svgs/envelope';
import Instagram from '../components/svgs/instagram';
import React from 'react';
import { Header } from '../components/header';
import { ExtLink } from '../components/ext-link';

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


export const Home = () => {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.main}>
        <h1>Shota Akizuki</h1>
        <p style={{ paddingLeft: 2 }}>Flutter Developer / Dart / Firebase</p>
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
