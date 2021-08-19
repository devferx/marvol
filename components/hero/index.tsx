import Image from "next/image";
import spiderMan from "../../public/assets/images/spider-man.jpeg";

import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.bgImage}>
          <Image
            src={spiderMan}
            alt="Spider man"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            objectPosition="top"
          />
        </div>
        <div className={`${styles.wrapperContent} wrapper`}>
          <div className={styles.content}>
            <Image
              src="/assets/images/spider-man-logo.png"
              alt="Spider man"
              width={161.25}
              height={63}
              objectFit="cover"
            />
            <div className={styles.titleContainer}>
              <h3>¡DISPONIBLE AHORA!</h3>
              <p>
                Experimenta el ascenso de Miles Morales mientras domina nuevos
                poderes para convertirse en su propio Spider-Man.
                Exclusivamemente en PlayStation.
              </p>
            </div>

            <button className={styles.button}>ver ahora</button>
          </div>
        </div>
      </header>
      <div className="wrapper">
        <ul className={styles.options}>
          <li className={styles.active}>
            <a href="#">Spider-Man Miles Morales</a>
          </li>
          <li>
            <a href="#">La verdad sobre Superior Spider-Man</a>
          </li>
          <li>
            <a href="#">Llega el Rey De Negro</a>
          </li>
          <li>
            <a href="#">Llega el Rey De Negro</a>
          </li>
        </ul>
      </div>
    </>
  );
};
