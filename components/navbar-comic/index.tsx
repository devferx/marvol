import Image from "next/image";
import Link from "next/link";
import styles from "./navbar-comic.module.css";

export const NavbarComic = () => {
  return (
    <nav className={styles.navbar}>
      <div className="wrapper">
        <Link href="/comics">
          <a className={styles.backContainer}>
            <Image
              src="/assets/icons/back-primary.svg"
              alt="Back Icon"
              width={24}
              height={24}
            />
            VOLVER
          </a>
        </Link>
      </div>
    </nav>
  );
};
