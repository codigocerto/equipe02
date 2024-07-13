import styles from './styles.module.css';

const EventosWorkshops = () => {
  return (
    <section className={styles.section}>
      <h2>Eventos e Workshops</h2>
      <div className={styles.sectionContent}>
        <div className={styles.texts}>
          <ul>
            <li>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> //add simbolo de check 'V'
                <path d="M9 19.4l-8.1-8.1 1.4-1.4 6.7 6.7L21.7 4.1 23 5.5z" />
              </svg>
              Introdução à Programação com Scratch para Crianças
            </li>
            <li>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 19.4l-8.1-8.1 1.4-1.4 6.7 6.7L21.7 4.1 23 5.5z" />
              </svg>
              Empreendedorismo Tech para Jovens Negros
            </li>
            <li>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 19.4l-8.1-8.1 1.4-1.4 6.7 6.7L21.7 4.1 23 5.5z" />
              </svg>
              Liderança Feminina em Tecnologia
            </li>
            <li>
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9 19.4l-8.1-8.1 1.4-1.4 6.7 6.7L21.7 4.1 23 5.5z" />
              </svg>
              Desenvolvimento de Software Acessível
            </li>
          </ul>
        </div>
        <img src="/images/img-eventos.png" alt="Eventos e Workshops" className={styles.image} />
      </div>
    </section>
  );
};

export default EventosWorkshops;