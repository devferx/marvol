import Image from "next/image";
import { Article as ArticleInterface } from "../../models/article";
import styles from "./article.module.css";

interface Props {
  article: ArticleInterface;
}

export const Article = ({ article }: Props) => {
  return (
    <>
      <article className={styles.container} key={article.title}>
        <div className={styles.imageContainer}>
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <p className={styles.subtitle}>{article.subtitle}</p>
          <h3 className={styles.title}>{article.title}</h3>
        </div>
      </article>
      <div className={styles.divider} />
    </>
  );
};
