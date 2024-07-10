import styles from "./styles.module.css";

type StackCardProps = {
  children: React.ReactNode;
  stackCardTitle: string;
};

const StackCard = ({ stackCardTitle, children }: StackCardProps) => {
  return (
    <div className={styles.stackCard}>
      <h3>{stackCardTitle}</h3>
      <section className={styles.techCardSection}>{children}</section>
    </div>
  );
};

export default StackCard;
