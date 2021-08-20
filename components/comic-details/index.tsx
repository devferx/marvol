import { Comic } from "../../models/marvel";
import styles from "./comic-details.module.css";

interface Props {
  comic: Comic;
}

export const ComicDetails = ({ comic }: Props) => {
  return (
    <section className={styles.comicDetails}>
      <div className="wrapper">
        <h3 className={styles.title}>MÁS DETALLES</h3>

        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.listTitle}>
              INFORMACIÓN Y CRÉDITOS EXTENDIDOS
            </li>
            <li>
              <span className={styles.textBold}>Formato:</span> {comic.format}
            </li>
            <li>
              <span className={styles.textBold}>Precio:</span>{" "}
              {comic.prices[0].price}
            </li>
            <li>
              <span className={styles.textBold}>UPC:</span> {comic.upc}
            </li>
            <li>
              <span className={styles.textBold}>Fecha FOC:</span>{" "}
              {comic.dates[1].date}
            </li>
          </ul>

          <ul className={styles.list}>
            <li className={styles.listTitle}>CUENTOS</li>
            {comic.creators.items.map((creator) => (
              <li key={`${creator.role}-${creator.name}`}>
                <span className={styles.textBold}>{creator.role}</span>:{" "}
                {creator.name}
              </li>
            ))}
          </ul>

          <ul className={styles.list}>
            <li className={styles.listTitle}>INFORMACIÓN DE PORTADA</li>
            {comic.creators.items
              .filter((creator) => creator.role.includes("cover"))
              .map((creator) => (
                <li key={`${creator.role}-${creator.name}`}>
                  <span className={styles.textBold}>{creator.role}</span>:{" "}
                  {creator.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
