import Image from "next/image";

import HeroSection from "@/components/hero";
import CardParaQuem from "./components/cardParaQuem";

import estudanteImg from "../../../public/images/estudante.png";
import desenvolvedorImg from "../../../public/images/desenvolvedor.png";
import mentorImg from "../../../public/images/mentor.png";
import notebookImg from "../../../public/images/notebook.png";
import celularImg from "../../../public/images/celular.png";

import { FaDiscord, FaWhatsapp } from "react-icons/fa";

import styles from "./page.module.css";

export default function Networking() {
  return (
    <main>
      <HeroSection />
      <div style={{ backgroundColor: "#141414" }}>
        <div className={styles.container}>
          <h2 className={styles.titleParaQuem}>Para quem é a comunidade</h2>
          <section className={styles.cardParaQuemSection}>
            <CardParaQuem
              srcImage={estudanteImg}
              altImage="Imagem de estudante"
              titleCard="Estudante"
            />
            <CardParaQuem
              srcImage={desenvolvedorImg}
              altImage="Imagem de desenvolvedor"
              titleCard="Desenvolvedor"
            />
            <CardParaQuem
              srcImage={mentorImg}
              altImage="Imagem de mentor"
              titleCard="Mentor"
            />
          </section>

          <h2 className={styles.discordTitle}>Nossa Comunidade no Discord</h2>
          <section className={styles.discordSection}>
            <Image
              src={notebookImg}
              alt="Imagem do Notebook"
              className={styles.notebookImg}
              width={414}
              height={308}
              quality={100}
              priority
            />
            <p>
              Aqui, você encontrará um espaço para compartilhar conhecimentos,
              tirar dúvidas, fazer novos amigos e se divertir. Nossa comunidade
              é diversa e inclusiva, e estamos sempre prontos para receber novos
              membros de braços abertos. <br />
              No nosso Discord, você poderá: <br />
              <br />
              • Participar de discussões sobre os mais variados temas <br />
              • Compartilhar suas experiências e aprender com os outros <br />
              • Acessar conteúdos exclusivos e eventos especiais <br />
              • Fazer parte de uma rede de apoio e amizade <br />
              <br />
              Não perca tempo e faça parte dessa incrível comunidade! Clique no
              link abaixo para se juntar a nós. Estamos ansiosos para
              conhecê-lo!
            </p>
          </section>
          <a
            href="https://discord.com/invite/SjWwNm3W"
            target="_blank"
            className={styles.discordButton}
          >
            <FaDiscord size={34} />
            <span>Discord</span>
          </a>

          <h2 className={styles.whatsappTitle}>Nossa Comunidade no Whatsapp</h2>
          <section className={styles.whatsappSection}>
            <p>
              Quer se conectar ainda mais com nossa comunidade? Junte-se aos
              nossos grupos no WhatsApp e faça parte de um ambiente dinâmico e
              acolhedor onde você pode compartilhar experiências, tirar dúvidas
              e fazer novas amizades. <br />
              <br />
              Nos nossos grupos, você poderá: <br />• Participar de discussões
              enriquecedoras sobre diversos assuntos <br />
              • Receber atualizações e notícias em primeira mão <br />
              • Compartilhar conhecimentos e aprender com outros membros <br />
              • Fazer parte de uma comunidade ativa e engajada <br />
              <br />
              Não perca essa oportunidade! Clique no link abaixo para entrar em
              um de nossos grupos no WhatsApp. Estamos ansiosos para ter você
              conosco!
            </p>
            <Image
              src={celularImg}
              alt="Imagem do Celular"
              className={styles.celularImg}
              width={412}
              height={317}
              quality={100}
              priority
            />
          </section>
          <a
            href="https://chat.whatsapp.com/CDJL6tRT5apLRXW5PWqYLe"
            target="_blank"
            className={styles.whatsappButton}
          >
            <FaWhatsapp size={34} />
            <span>Whatsapp</span>
          </a>

          <h2 className={styles.stackTitle}>Encontre o seu grupo</h2>
        </div>
      </div>
    </main>
  );
}
