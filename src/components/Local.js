import React from "react";
import useNews from "../hooks/useNews";
import styles from "./Local.module.scss";


const Local = () => {
    const { localNews } = useNews();

    return (
        <div className={styles.local}>
            <p className={styles.local__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br> do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>

    {localNews.map(({ title, items, description }) => {
        return (
          <div className={styles.news}>
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__description}>{description}</p>
              </div>

              <p className={styles.news__items}>{items}</p>
            </div>
            <div className={styles.news__line}></div>
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__items}>{items}</p>
              </div>
              <p className={styles.news__description}>{description}</p>
            </div>
            <div className={styles.news__line}></div>
            <div className={styles.news__content}>
              <div className={styles.news__box}>
                <p className={styles.news__title}>{title}</p>
                <p className={styles.news__items}>{items}</p>
              </div>
              <p className={styles.news__description}>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Local