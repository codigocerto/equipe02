type TechCardProps = {
  techTitle: string;
  bgColor: string;
};

import styles from "./styles.module.css";

const TechCard = ({ techTitle, bgColor }: TechCardProps) => {
  return (
    <div className={styles.techCard} style={{ backgroundColor: bgColor }}>
      {techTitle}
    </div>
  );
};

export default TechCard;
