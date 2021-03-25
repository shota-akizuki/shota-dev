import FooterStyles from '../styles/footer.module.css';
import ThemeChanger from './ThemeChanger';

export const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.layout}>
        <div style={{ marginTop: 24 }}>
          <ThemeChanger />
        </div>
        <span>2021 ©Shota Akizuki All rights reserved.</span>
      </div>
      <div></div>
    </footer>
  );
};
