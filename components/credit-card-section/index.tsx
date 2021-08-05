import Image from "next/image";

import styles from "./credit-card-section.module.css";

export const CreditCardSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/credit-card.png"
          alt="Iron Man Credit Card"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <p className={styles.primaryLabel}>MARVEL MASTERCARD</p>
          <p className={styles.title}>
            Obtenga un crédito de estado de cuenta de $ 25
          </p>
          <button className={styles.button}>APRENDER MÁS</button>
        </div>
      </div>
    </section>
  );
};
