import Image from "next/image";
import styles from "./navbar-suggestions.module.css";

interface Suggestion {
  image: string;
  title: string;
  date: string;
}

interface Props {
  title: string;
  suggestions: Suggestion[];
  show: boolean;
}

export const NavbarSuggestions = ({ title, show, suggestions }: Props) => {
  return (
    <section className={`${styles.container} ${show && styles.show}`}>
      <div className="wrapper">
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.itemList}>
          {suggestions.map((suggestion) => (
            <article className={styles.item} key={suggestion.title}>
              <div className={styles.imageContainer}>
                <Image
                  src={suggestion.image}
                  alt={`${suggestion.title} poster`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className={styles.itemContent}>
                <p className={styles.itemTitle}>{suggestion.title}</p>
                <p className={styles.itemDate}>{suggestion.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
