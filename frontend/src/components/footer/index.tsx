import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/images/logo2.png" alt="Logo" className={styles.logo} />
      <nav>
        <ul className={styles.navList}>
          <li><a href="#">Vagas</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Mentor</a></li>
          <li><a href="#">Sobre</a></li>
        </ul>
      </nav>
      <div className={styles.socialMedia}>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
