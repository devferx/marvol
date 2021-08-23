import Image from "next/image";

import { Product } from "../../models/product";
import { ProductList } from "../product-list";

import styles from "./home-section.module.css";

interface Props {
  title: string;
  description: string;
  tag?: string;
  imageUrl: string;
  callToAction: string;
  products?: Array<Product>;
}

export const HomeSection = ({
  tag,
  title,
  description,
  imageUrl,
  callToAction,
  products,
}: Props) => {
  return (
    <section className={styles.homeSection}>
      <article className={styles.container}>
        <div className={styles.content}>
          {tag && <p className={styles.tag}>{tag}</p>}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <button className={styles.callToAction}>{callToAction}</button>
        </div>

        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </div>
      </article>

      {products && <ProductList products={products} />}
    </section>
  );
};
