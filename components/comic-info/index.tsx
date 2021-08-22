/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Comic } from "../../models/marvel";
import styles from "./comic-info.module.css";

interface Props {
  comic: Comic;
}

export const ComicInfo = ({ comic }: Props) => {
  return (
    <article className={`${styles.container} wrapper`}>
      <Image
        className={styles.coverImage}
        width={350}
        height={500}
        objectFit="contain"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{comic.title}</h3>
        <p>{comic.description}</p>

        <div className={styles.imagesGrid}>
          {comic.images.map((image) => (
            <div className={styles.imageWrapper} key={image.path}>
              <Image
                layout="fill"
                objectFit="contain"
                src={`${image.path}.${image.extension}`}
                alt={comic.title}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
