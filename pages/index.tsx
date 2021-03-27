import Header from '../components/header';
import styles from '../styles/home.module.css';
import { Footer } from '../components/footer';
import ExtLink from '../components/ext-link';

export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.main}>
        <h1>Shota Akizuki</h1>
        <p>
          I’m a developer, designer, and creator. I work as a Junior Developer
          in Osaka. I enjoy working and crafting beautiful web sites.
        </p>
        <p>
          大阪でWebデザイナー・エンジニアをしています。Web制作・開発についてできることがあれば、お気軽にご相談ください。
        </p>
        <p className={styles.divider} />
        <ul>
          <li>
            Twitter
            <ExtLink href="https://twitter.com/shota_akizuki">
              {' '}
              @shota_akizuki
            </ExtLink>
          </li>
          <li>
            GitHub
            <ExtLink href="https://github.com/shota-akizuki">
              {' '}
              @shota-akizuki
            </ExtLink>
          </li>
          <li>
            Mail
            <ExtLink href="mailto:shota0609akizuki@gmail.com">
              {' '}
              shota0609akizuki@gmail.com
            </ExtLink>
          </li>
          <li>
            Instagram
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
