import styles from "./list-comics.module.css";
import { Comic } from "../../models/marvel";
import { ComicItem } from "../comic-item";

interface Props {
  title: string;
  comics: Comic[];
}

export const ListComics = ({ title, comics }: Props) => {
  console.log(comics);
  return (
    <section className={styles.listComicsContainer}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.listComics}>
        {comics.map((comic) => (
          <ComicItem key={comic.id} comic={comic} />
        ))}
      </div>
    </section>
  );
};
