import Image from "next/image";

import { Product } from "../../models/product";
import styles from "./product-list.module.css";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <div key={product.title} className={styles.product}>
          <Image
            src={product.image}
            alt={product.title}
            width={270}
            height={150}
            objectFit="cover"
          />

          <div className={styles.productContent}>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productTitle}>{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
