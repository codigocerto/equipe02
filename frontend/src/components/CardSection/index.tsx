import Container from "../Container";
import Card from "../CardSection/Card";

import styles from "./styles.module.css";

const CardsSection = () => {
  return (
    <div className={styles.cardSectionContainer}>
      <Container>
        <h2 className={styles.cardsSectionTitle}>Juntos Somos Mais Fortes</h2>
        <div className={styles.cards}>
          <Card
            title="Título 1"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
          <Card
            title="Título 2"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
        </div>
        <div className={styles.cards}>
          <Card
            title="Título 3"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
          <Card
            title="Título 4"
            content="lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, "
          />
        </div>
      </Container>
    </div>
  );
};

export default CardsSection;
