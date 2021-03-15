import Header from '../components/header';
import sharedStyles from '../styles/shared.module.css';
import NextLogo from '../components/svgs/nextjs-logo';
import ReactLogo from '../components/svgs/react-logo';

export default function Home() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginBottom: 24 }} className={sharedStyles.title}>
          Shota Akizuki
        </h1>
        <h2
          className={sharedStyles.title}
          style={{
            fontSize: 20,
            marginBottom: 24,
            color: '#333'
          }}
        >
          Minimalistic, Practical, Beautiful.
        </h2>

        <h2
          style={{
            marginTop: 80,
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
    </>
  );
}
