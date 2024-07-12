/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./SignatureCollection.module.css";

const SignatureCollection = () => (
  <section className={styles.collectionWrapper}>
    <div className={styles.collectionContent}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.collectionImage}
          loading="lazy"
          src="http://b.io/ext_52-"
          alt="Signature Collection"
        />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.collectionSubtitle}>SIGNATURE COLLECTION</h3>
        <h2 className={styles.collectionTitle}>The Secret Garden</h2>
        <p className={styles.collectionDescription}>
          Marquise diamond accents, purposefully nestled within sweeping
          branches and vines,
          <br />
          give the illusion of climbing leaves and buds.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Shop Now</button>
          <button className={styles.secondaryButton}>
            Explore More Collections
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default SignatureCollection;