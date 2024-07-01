import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa6";

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
            width={75}
            height={50}
            quality={100}
            priority
          />
        </Link>
        <nav className={styles.navContent}>
          <Link href="/">Projetos</Link>
          <Link href="/">Mentoria</Link>
          <Link href="/networking">Networking</Link>
        </nav>
        <div className={styles.loginButton}>
          <Link href="/">
            <FaGithub size={26} />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
