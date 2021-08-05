import Image from "next/image";

import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContanier} wrapper`}>
        <div className={styles.content}>
          <div className={styles.logoContanier}>
            <Image
              src="/assets/icons/marvol-logo.svg"
              alt="marvol logo"
              width={100}
              height={40}
            />
          </div>

          <ul className={styles.linkList}>
            <li>SOBRE MARVEL</li>
            <li>AYUDA / PREGUNTAS FRECUENTES</li>
            <li>AYUDA / PREGUNTAS FRECUENTES</li>
            <li>CARRERAS</li>
            <li>PASANTÍAS</li>
          </ul>

          <ul className={styles.linkList}>
            <li>PUBLICIDAD</li>
            <li>MARVELHQ.COM</li>
            <li>CANJEAR CÓMICS DIGITALES</li>
          </ul>
        </div>

        <div className={styles.socialMediaContainer}>
          <p className={styles.socialTitle}>SIGUE A MARVEL</p>
          <div className={styles.socialLinks}>
            <a href="#">
              <Image
                src="/assets/icons/facebook.svg"
                alt="facebook logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/icons/twitter.svg"
                alt="twitter logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/icons/instagram.svg"
                alt="instagram logo"
                width={30}
                height={30}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/icons/youtube.svg"
                alt="youtube logo"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
