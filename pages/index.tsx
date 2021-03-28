import Header from '../components/header';
import styles from '../styles/home.module.css';
import { Footer } from '../components/footer';
import ExtLink from '../components/ext-link';
import Twitter from '../components/svgs/twitter';
import GitHub from '../components/svgs/github';
import Envelope from '../components/svgs/envelope';
import Instagram from '../components/svgs/instagram';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.main}>
        <h1>Shota Akizuki</h1>
        <p>
          I’m a developer, designer, and creator. I work as a Developer in
          Osaka. I enjoy working and crafting beautiful websites. Feel free to
          contact with me.
        </p>
        <p>
          大阪でWebデザイナー・エンジニアをしています。Web制作・開発についてできることがあれば、お気軽にご相談ください。
        </p>
        <p className={styles.divider} />
        <ul>
          <li>
            <Twitter style={{ fill: 'var(--color-accents-1)', height: 24 }} />

            <ExtLink href="https://twitter.com/shota_akizuki">
              {' '}
              @shota_akizuki
            </ExtLink>
          </li>
          <li>
            <GitHub style={{ fill: 'var(--color-accents-1)', height: 24 }} />
            <ExtLink href="https://github.com/shota-akizuki">
              {' '}
              @shota-akizuki
            </ExtLink>
          </li>
          <li>
            <Envelope style={{ fill: 'var(--color-accents-1)', height: 24 }} />
            <ExtLink href="mailto:shota0609akizuki@gmail.com">
              {' '}
              shota0609akizuki@gmail.com
            </ExtLink>
          </li>
          <li>
            <Instagram style={{ fill: 'var(--color-accents-1)', height: 24 }} />
            <ExtLink href="https://instagram.com/shota_akizuki">
              {' '}
              @shota_akizuki
            </ExtLink>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
