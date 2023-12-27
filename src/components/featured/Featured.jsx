import Image from "next/image";
import React from "react";
import styles from "./featured.module.scss";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey,Tran Hien here!</b> Discover my stories
        and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
            atque?
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            itaque? Quis voluptatum similique quisquam hic a unde ratione error
            iusto! Nam tempore ab qui alias? Nemo quas vel non corporis
            consequatur fugiat quidem libero eius?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
