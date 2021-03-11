import FooterStyles from '../styles/footer.module.css';
import ThemeChanger from './ThemeChanger';
import styles from '../styles/Home.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={FooterStyles.layout}>
        <div>
          <ThemeChanger />
        </div>
        <span>Copyright©Shota Akizuki All rights reserved.</span>
      </div>
      <div>
        <span>Powered by Vercel.</span>
      </div>
    </footer>
  );
};
