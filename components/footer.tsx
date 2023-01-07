import styles from '../styles/footer.module.css';

export const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className={styles.footer}>
      <span>2021-{year} ©Shota Akizuki All rights reserved.</span>
    </footer>
  );
};
