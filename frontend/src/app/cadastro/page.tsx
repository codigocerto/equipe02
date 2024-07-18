import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import yodaPng from "./image/yoda.png";
import styles from "./page.module.css"

export default function CadastroUser() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageContainer}>
        <Image src={yodaPng} alt="Yoda" width={500} height={500} />
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1 className={styles.titleContainer}>Cadastro</h1>
          <p className={styles.paragraphContainer}>
            Campos marcados com * são obrigatórios.
          </p>

          <div className={styles.formField}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nome *"
            />
          </div>

          <div className={styles.formField}>
            <FaEnvelope className={styles.icon} />
            <input type="email" id="email" name="Email" placeholder="Email *" />
          </div>

          <div className={styles.formField}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha *"
            />
          </div>

          <div className={styles.formField}>
            <FaGithub className={styles.icon} />
            <input
              type="text"
              id="githubConnect"
              name="githubConnect"
              placeholder="Github *"
            />
          </div>

          <div className={styles.formField}>
            <FaLinkedin className={styles.icon} />
            <input
              type="password"
              id="securityAnswer"
              name="securityAnswer"
              placeholder="LinkedIn *"
            />
          </div>

          <div className={styles.formField}>
            <FaGlobe className={styles.icon} />
            <input
              type="password"
              id="additionalPassword"
              name="additionalPassword"
              placeholder="Portfólio *"
            />
          </div>

          <p className={styles.signupLink}>
            <Link href="/login" className={styles.linkColor}>
              Já tenho cadastro
            </Link>
          </p>

          <button type="submit" className={styles.submitButton}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}