import styles from '../styles/footer.module.css';

export const Footer = (props) => {
  return (
    <footer className={styles.footer} {...props}>
      <span>2021 ©Shota Akizuki All rights reserved.</span>
    </footer>
  );
};
