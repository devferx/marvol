import { Article } from "../article";
import { Article as ArticleInterface } from "../../models/article";
import styles from "./latest-news.module.css";

export const LatestNews = () => {
  const articles: ArticleInterface[] = [
    {
      image: "/assets/images/new-1.png",
      title: "¡Los orígenes de BATTLEWORLD! | Marvel Reino de Campeones",
      subtitle: "REMOLQUES Y EXTRAS",
    },
    {
      image: "/assets/images/new-2.png",
      title:
        "Women of Marvel le da la bienvenida a Brittney Morris, autora de la novela precuela de 'Marvel's Spider-Man: Miles Morales'",
      subtitle: "REMOLQUES Y EXTRAS",
    },
    {
      image: "/assets/images/new-3.png",
      title: `Dónde leer el trabajo de las mujeres que aparecen en Marvel's 616: "Más alto, más rápido"`,
      subtitle: "PROGRAMAS DE TELEVISIÓN",
    },
  ];

  return (
    <div className="wrapper">
      <div className={styles.latestNewsContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>Latest News</h2>

          <div>
            {articles.map((article) => (
              <Article key={article.title} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
