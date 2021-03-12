import FooterStyles from '../styles/footer.module.css';
import ThemeChanger from './ThemeChanger';
import { Divider } from '../components/divider';

export const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <Divider />
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
