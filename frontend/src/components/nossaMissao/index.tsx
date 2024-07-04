import styles from './styles.module.css';

const NossaMissao = () => {
  return (
    <section className={styles.section}>
      <h2>Nossa Missão</h2>
      <p>Estamos comprometidos em criar um ambiente inclusivo, onde pessoas de todas as origens, identidades e experiências se sintam valorizadas, respeitadas e capacitadas a alcançar seu pleno potencial.</p>
      <img src="/images/missao.png" alt="Nossa Missão" className={styles.image} />
    </section>
  );
};

export default NossaMissao;