import Image from "next/image";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import yodaPng from "../cadastro/image/yoda.png"
import styles from "../cadastro/page.module.css"

export default function NewSenha() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageContainer}>
        <Image src={yodaPng} alt="Yoda" width={500} height={500} />
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1 className={styles.titleContainer}>Nova Senha</h1>
          <p className={styles.paragraphContainer}>
            Campos marcados com * são obrigatórios.
          </p>

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
            <FaLock className={styles.icon} />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmar Senha*"
            />
          </div>

          <div className={styles.signupLink}>
            <Link href="/login" className={styles.linkColor}>
              Ir para Login
            </Link>
          </div>

          <button type="submit" className={styles.submitButton}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}