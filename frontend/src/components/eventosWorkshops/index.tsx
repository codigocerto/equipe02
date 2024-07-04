import styles from './styles.module.css';

const EventosWorkshops = () => {
  return (
    <section className={styles.section}>
      <h2>Eventos e Workshops</h2>
      <div className={styles.sectionContent}>
        <div className={styles.texts}>
          <ul>
            <li>Introdução à Programação com Scratch para Crianças</li>
            <li>Empreendedorismo Tech para Jovens Negros</li>
            <li>Liderança Feminina em Tecnologia</li>
            <li>Desenvolvimento de Software Acessível</li>
          </ul>
        </div>
        <img src="/images/img-eventos.png" alt="Eventos e Workshops" className={styles.image} />
      </div>
    </section>
  );
};

export default EventosWorkshops;