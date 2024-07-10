import Image from "next/image";
import Link from "next/link";

import Container from "../Container";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logoImg from "../../../public/images/codigocerto_texto.svg";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo do codigo certo"
              width={168}
              height={139}
              quality={100}
            />
          </Link>
          <nav className={styles.navContent}>
            <Link href="/">Vagas</Link>
            <Link href="/">Projetos</Link>
            <Link href="/">Mentoria</Link>
            <Link href="/">Sobre</Link>
          </nav>
          <section className={styles.socialLinks}>
            <a href="#" target="_blank">
              <FaFacebook size={42} />
            </a>
            <a
              href="https://www.instagram.com/codigocertocoders"
              target="_blank"
            >
              <FaInstagram size={42} />
            </a>
            <a
              href="https://www.linkedin.com/company/codigocerto/mycompany/"
              target="_blank"
            >
              <FaLinkedin size={42} />
            </a>
            <a href="#" target="_blank">
              <FaXTwitter size={42} />
            </a>
            <a href="https://github.com/codigocerto" target="_blank">
              <FaGithub size={42} />
            </a>
            <a href="https://discord.com/invite/SjWwNm3W" target="_blank">
              <FaDiscord size={42} />
            </a>
          </section>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
