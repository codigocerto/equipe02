interface CardProps {
  title: string;
  content: string;
}

import styles from "./styles.module.css";

const Card = ({ title, content }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
