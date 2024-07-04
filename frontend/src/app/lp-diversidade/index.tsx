import Head from 'next/head';
import Card from '../../components/card';
import styles from './page.module.css';

const LPDiversidade = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page Diversidade</title>
      </Head>

      <header className={styles.header}>
        <h1>Alavancar sua carreira, você irá!</h1>
        <p>A Código Certo possui um programa de mentoria flexível e profissionais qualificados prontos para te ajudar na sua jornada na Programação.</p>
        <img src="/images/master_yoda/yoda.png" alt="Master Yoda" />
      </header>

      <section className={styles.section}>
        <h2>Juntos Somos Mais Fortes</h2>
        <div className={styles.cardSection}>
          <Card title="Título 1" content="lorem ipsum, lorem ipsum, lorem ipsum" />
          <Card title="Título 2" content="lorem ipsum, lorem ipsum, lorem ipsum" />
          <Card title="Título 3" content="lorem ipsum, lorem ipsum, lorem ipsum" />
          <Card title="Título 4" content="lorem ipsum, lorem ipsum, lorem ipsum" />
        </div>
      </section>

      <section className={styles.diversidadeInclusao}>
        <h2>Diversidade e Inclusão</h2>
        <p>Em nossa comunidade, reconhecemos que a diversidade é uma força poderosa que impulsiona a inovação, a criatividade e o progresso.</p>
        <img src="/images/imagem-inclusao.png" alt="Diversidade e Inclusão" />
      </section>

      <section className={styles.missao}>
        <h2>Nossa Missão</h2>
        <p>Estamos comprometidos em criar um ambiente inclusivo, onde pessoas de todas as origens, identidades e experiências se sintam valorizadas, respeitadas e capacitadas a alcançar seu pleno potencial.</p>
        <img src="/images/missao.png" alt="Nossa Missão" />
      </section>

      <section className={styles.eventosWorkshops}>
        <h2>Eventos e Workshops</h2>
        <ul>
          <li>Introdução à Programação com Scratch para Crianças</li>
          <li>Empreendedorismo Tech para Jovens Negros</li>
          <li>Liderança Feminina em Tecnologia</li>
          <li>Desenvolvimento de Software Acessível</li>
        </ul>
        <img src="/images/img-diversidade.png" alt="Eventos e Workshops" />
      </section>
    </div>
  );
};

export default LPDiversidade;