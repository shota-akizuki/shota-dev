import Header from '../components/header';
import styles from '../styles/Home.module.css';
import sharedStyles from '../styles/shared.module.css';
import NextLogo from '../components/svgs/nextjs-logo';
import ReactLogo from '../components/svgs/react-logo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 className={sharedStyles.title}>Shota Akizuki</h1>
        <h2 className={sharedStyles.mantra} style={{ margin: 32 }}>
          Practical, Minimalistic, Beautiful.
        </h2>
        <h2
          style={{
            marginTop: 24,
            fontSize: 24
          }}
        >
          React & Next.js Web Development
        </h2>
        <ReactLogo style={{ marginTop: 80 }} className={sharedStyles.logo} />
        <NextLogo
          style={{
            marginTop: 80,
            fill: 'var(--color-text)',
            marginBottom: -16
          }}
          className={sharedStyles.logo}
        />
      </div>
    </div>
  );
}
