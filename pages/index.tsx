import Header from '../components/header';
import styles from '../styles/home.module.css';
import { Footer } from '../components/footer';

export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={styles.main}>
        <h1>Shota Akizuki</h1>
        <p>
          I’m a developer, designer, and creator. I work at a company as a
          Junior Developer. I enjoy working and crafting beautiful web sites.
        </p>
        <p>
          大阪でフロントエンドエンジニア・デザイナーをしています。Web制作・開発について何か僕にできることがあれば、気軽にご連絡ください。
        </p>
      </div>
      <Footer />
    </>
  );
}
