import { ReactNode } from "react";

import styles from "./styles.module.css";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
