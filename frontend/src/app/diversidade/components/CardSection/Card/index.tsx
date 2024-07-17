import styles from "./styles.module.css";
import Image from 'next/image';
import viewMatchesImg from '/public/images/view-matches.png';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image src={viewMatchesImg} alt="Icon" className={styles.cardIcon} />
        <h3>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;