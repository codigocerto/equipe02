import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.css";

type CardMuitoMaisProps = {
  srcImg: StaticImageData;
  altImg: string;
  titleCard: string;
};

const CardMuitoMais = ({ srcImg, altImg, titleCard }: CardMuitoMaisProps) => {
  return (
    <div className={styles.cardMuitoMais}>
      <section className={styles.cardMuitoMaisSection}>
        <Image
          src={srcImg}
          alt={altImg}
          width={56}
          height={56}
          quality={100}
          priority
        />
        <h3>{titleCard}</h3>
      </section>
      <p>
        lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem
        ipsum, lorem ipsum, lorem ipsum, lorem ipsum,{" "}
      </p>
    </div>
  );
};

export default CardMuitoMais;
