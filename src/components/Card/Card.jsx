import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.scss";

const Card = ({ item, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Link href={`/${item.id}`}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </Link>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/${item.id}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc}</p>
        <Link href={`/${item.id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
