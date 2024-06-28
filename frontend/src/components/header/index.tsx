import Link from "next/link";
import Image from "next/image";

import logoImg from "../../../public/images/logo.png";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <Image
            src={logoImg}
            alt="Logo do CodigoCerto"
            className={styles.logoImg}
            width={60}
            height={50}
            quality={100}
            priority
          />
        </Link>
        <nav className={styles.linkContent}>
          <Link href="/">Vagas</Link>
          <Link href="/">Projetos</Link>
          <Link href="/">Mentoria</Link>
          <Link href="/">Sobre</Link>
          <Link href="/">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
