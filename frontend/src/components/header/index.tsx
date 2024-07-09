"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useRef, useEffect } from "react";

import { FaGithub } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import logoImg from "../../../public/images/codigocerto.svg";

import styles from "./styles.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

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
          <Link href="/diversidade">Diversidade</Link>
          <Link href="/networking">Networking</Link>
        </nav>

        <div className={styles.loginButton}>
          <Link href="/">
            <FaGithub size={26} />
            <span>Login</span>
          </Link>
        </div>

        {isOpen && (
          <div className={styles.mobileSection} ref={menuRef}>
            <button className={styles.closeButton} onClick={toggleNavBar}>
              <AiOutlineClose size={36} />
            </button>

            <nav className={styles.navContentMobile}>
              <Link href="/" onClick={toggleNavBar}>
                Projetos
              </Link>
              <Link href="/" onClick={toggleNavBar}>
                Mentoria
              </Link>
              <Link href="/networking" onClick={toggleNavBar}>
                Networking
              </Link>
            </nav>

            <div className={styles.loginButtonMobile}>
              <Link href="/">
                <FaGithub size={26} />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}

        <button className={styles.hamburgerButton} onClick={toggleNavBar}>
          <AiOutlineMenu size={36} />
        </button>
      </div>
    </header>
  );
};

export default Header;
