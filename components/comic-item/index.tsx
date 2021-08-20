import Image from "next/image";
import Link from "next/link";

import { Comic } from "../../models/marvel";
import styles from "./comic-item.module.css";

interface Props {
  comic: Comic;
}

export const ComicItem = ({ comic }: Props) => {
  return (
    <Link href={`/comic/${comic.id}`}>
      <a className={styles.link}>
        <article className={styles.container}>
          <div className={styles.imageContainer}>
            {comic.thumbnail.path !== "image_not_available" && (
              <Image
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={`${comic.title} Cover`}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{comic.title}</p>
            <p className={styles.autor}>{comic.creators.items[0]?.name}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};
