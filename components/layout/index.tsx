import { ReactNode } from "react";

import { Navbar } from "../navbar";
import { Footer } from "../footer";
import styles from "./layout.module.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <section className={styles.container}>{children}</section>
      <Footer />
    </>
  );
};
