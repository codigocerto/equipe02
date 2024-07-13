import Image from "next/image";

import {
  HeroSection,
  Container,
  CardParaQuem,
  CardMuitoMais,
  StackCard,
  TechCard,
  estudanteImg,
  desenvolvedorImg,
  mentorImg,
  notebookImg,
  celularImg,
  projetosImg,
  mentoriaImg,
  reunioesImg,
} from "./imports";

import { FaDiscord, FaWhatsapp } from "react-icons/fa";

import styles from "./page.module.css";

export default function Networking() {
  return (
    <>
      <HeroSection />
      <main className={styles.main}>
        <Container>
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
              width={525}
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
              width={500}
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
          <section className={styles.stackCardSection}>
            <StackCard stackCardTitle="Frontend">
              <TechCard techTitle="HTML" bgColor="#E34f26" />
              <TechCard techTitle="CSS" bgColor="#1572b6" />
              <TechCard techTitle="JavaScript" bgColor="#d5ba36" />
              <TechCard techTitle="Angular" bgColor="#dd0031" />
              <TechCard techTitle="React" bgColor="#61dafb" />
            </StackCard>

            <StackCard stackCardTitle="Backend">
              <TechCard techTitle="Node.js" bgColor="#339933" />
              <TechCard techTitle="Express" bgColor="#000000" />
              <TechCard techTitle="Django" bgColor="#092e20" />
            </StackCard>

            <StackCard stackCardTitle="Fullstack">
              <TechCard techTitle="Java" bgColor="#007396" />
              <TechCard techTitle="Angular" bgColor="#DD0031" />
              <TechCard techTitle="Python" bgColor="#3776ab" />
              <TechCard techTitle="React" bgColor="#61dafb" />
            </StackCard>

            <StackCard stackCardTitle="DevOps">
              <TechCard techTitle="Docker" bgColor="#2496ed" />
              <TechCard techTitle="Kubernetes" bgColor="#326ce5" />
            </StackCard>

            <StackCard stackCardTitle="UX & UI">
              <TechCard techTitle="Figma" bgColor="#f24e1e" />
            </StackCard>

            <StackCard stackCardTitle="Mobile">
              <TechCard techTitle="React Native" bgColor="#61dafb" />
              <TechCard techTitle="Swift" bgColor="#fa7343" />
              <TechCard techTitle="Flutter" bgColor="#02569b" />
            </StackCard>

            <StackCard stackCardTitle="Dados">
              <TechCard techTitle="Python" bgColor="#3776ab" />
              <TechCard techTitle="Pandas" bgColor="#150458" />
              <TechCard techTitle="R" bgColor="#276dc3" />
              <TechCard techTitle="TensorFlow" bgColor="#ff6f00" />
              <TechCard techTitle="PyTorch" bgColor="#ee4c2c" />
            </StackCard>

            <StackCard stackCardTitle="QA">
              <TechCard techTitle="Jest" bgColor="#27ce0c" />
              <TechCard techTitle="Cypress" bgColor="#17202c" />
            </StackCard>
          </section>

          <div className={styles.muitoMaisSection}>
            <h2 className={styles.titleMuitoMais}>E muito mais!</h2>
            <section className={styles.cardMuitoMaisSection}>
              <CardMuitoMais
                srcImg={projetosImg}
                altImg="Imagem do card projetos"
                titleCard="Projetos"
              />
              <CardMuitoMais
                srcImg={mentoriaImg}
                altImg="Imagem do card mentoria"
                titleCard="Mentoria"
              />
              <CardMuitoMais
                srcImg={reunioesImg}
                altImg="Imagem do card reuniões"
                titleCard="Reuniões"
              />
            </section>
          </div>
        </Container>
      </main>
    </>
  );
}
