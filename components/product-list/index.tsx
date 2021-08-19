/* eslint-disable @next/next/no-img-element */
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
          <div className={styles.productImageContainer}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.productContent}>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productTitle}>{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
