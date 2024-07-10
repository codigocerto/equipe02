import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.css";

type CardParaQuemProps = {
  srcImage: StaticImageData;
  altImage: string;
  titleCard: string;
};

const CardParaQuem = ({ srcImage, altImage, titleCard }: CardParaQuemProps) => {
  return (
    <div className={styles.cardParaQuem}>
      <Image
        src={srcImage}
        alt={altImage}
        width={234}
        height={234}
        quality={100}
        priority
      />
      <h3>{titleCard}</h3>
    </div>
  );
};

export default CardParaQuem;
