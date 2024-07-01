import Card from "../card";

import styles from "./styles.module.css";

const CardsSection = () => {
  return (
    <div className={styles.backgroundColor}>
      <section className={styles.cardsSection}>
        <h2>Juntos Somos Mais Fortes</h2>
        <div className={styles.cardsGrid}>
          <Card
            title="Título 1"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
          <Card
            title="Título 2"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
        </div>
        <div className={styles.cardsGrid}>
          <Card
            title="Título 3"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />

          <Card
            title="Título 4"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
        </div>
      </section>
    </div>
  );
};

export default CardsSection;
