import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.scss";

const Card = ({ item }) => {
  return (
    <div className={styles.container} key={item?.id}>
      <div className={styles.imageContainer}>
        <Link href={`/posts/${item?.slug}`}>
          <Image
            src={item?.img || "/p1.jpeg"}
            alt={item.slug}
            fill
            className={styles.image}
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item?.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item?.catSlug}</span>
        </div>
        <Link href={`/posts/${item?.slug}`}>
          <h1 className={styles.title}>{item?.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 100) }}
        />
        <Link href={`/posts/${item?.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
