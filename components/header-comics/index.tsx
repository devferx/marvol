import styles from "./header-comics.module.css";

export const HeaderComics = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.headerContainer}>
          <p className={styles.subtitle}>MARVEL ILIMITADO</p>
          <h2 className={styles.title}>QUE VIENE ESTE AÑO</h2>
          <button className={styles.buttonOutline}>PRÓXIMAMENTE</button>
        </div>
      </div>
    </header>
  );
};
