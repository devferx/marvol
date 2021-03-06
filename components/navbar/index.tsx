import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavbarSuggestions } from "../navbar-suggestions";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const [isOpenSectionList, setIsOpenSectionList] = useState(false);
  const [isOpenMovies, setIsOpenMovies] = useState(false);
  const [isOpenTvSeries, setIsOpenTvSeries] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navbarTop}`}>
        <div className={`wrapper ${styles.navbarTopContainer}`}>
          <div className={styles.navbarTopActions}>
            <button className={styles.loginButton}>REGISTRARSE | UNIRSE</button>
            <button
              className={styles.menuButton}
              onClick={() => setIsOpenSectionList(!isOpenSectionList)}
            >
              <Image
                src="/assets/icons/menu.svg"
                alt="menu icon"
                width={24}
                height={24}
              />
            </button>
          </div>
          <Link href="/">
            <a>
              <div className={styles.logoContainer}>
                <Image
                  src="/assets/icons/marvol-logo.svg"
                  width={100}
                  height={50}
                  alt="marvol logo"
                />
              </div>
            </a>
          </Link>
          <div></div>
        </div>
      </div>
      <div
        className={`${styles.navbarBottomContainer} ${
          isOpenSectionList ? styles.active : ""
        }`}
      >
        <ul className={styles.sectionList}>
          <li>
            <Link href="/comics">
              <a className={styles.sectionLink}>VIDEOS</a>
            </Link>
          </li>
          <li>
            <Link href="/comics">
              <a className={styles.sectionLink}>CARACTERES</a>
            </Link>
          </li>
          <li>
            <Link href="/comics">
              <a className={styles.sectionLink}>HISTORIETAS</a>
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsOpenMovies(true)}
            onMouseLeave={() => setIsOpenMovies(false)}
          >
            <Link href="/">
              <a className={styles.sectionLink}>PEL??CULAS</a>
            </Link>
          </li>
          <li
            onMouseEnter={() => setIsOpenTvSeries(true)}
            onMouseLeave={() => setIsOpenTvSeries(false)}
          >
            <Link href="/">
              <a className={styles.sectionLink}>PROGRAMAS DE TELEVIS??N</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.sectionLink}>JUEGOS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.sectionLink}>NOTICIAS</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.sectionLink}>M??S</a>
            </Link>
          </li>
        </ul>
      </div>

      <NavbarSuggestions
        title="PEL??CULAS"
        show={isOpenMovies}
        suggestions={[
          {
            image: "/assets/images/black-widow-poster.png",
            title: "Black Widow",
            date: "May 7, 2021",
          },
          {
            image: "/assets/images/spiderman-poster.png",
            title: "Spider-Man: Far From Home",
            date: "2019",
          },
          {
            image: "/assets/images/avengers-endgame-poster.png",
            title: "Avengers: End game",
            date: "2019",
          },
          {
            image: "/assets/images/captain-marvel-poster.png",
            title: "Captain Marvel",
            date: "2019",
          },
        ]}
      />
      <NavbarSuggestions
        title="PROGRAMAS DE TELEVISI??N"
        show={isOpenTvSeries}
        suggestions={[
          {
            image: "/assets/images/616-poster.png",
            title: "MARVEL 616",
            date: "2020",
          },
          {
            image: "/assets/images/wandavision-poster.png",
            title: "WandaVision",
            date: "2021",
          },
          {
            image: "/assets/images/legends-poster.png",
            title: "Marvel Studios: Legends",
            date: "2021",
          },
          {
            image: "/assets/images/agents-shield-poster.png",
            title: "Agents of S.H.I.E.L.D.",
            date: "2020",
          },
        ]}
      />
    </nav>
  );
};
