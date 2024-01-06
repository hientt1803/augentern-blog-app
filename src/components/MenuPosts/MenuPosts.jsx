import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuposts.module.scss";

const MenuPosts = ({ withImage, menuPostsData }) => {
  console.log(menuPostsData);
  return (
    <div className={styles.items}>
      {menuPostsData?.map((menu) => (
        <Link
          href={`/posts/${menu.slug}`}
          className={styles.item}
          key={menu.id}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={menu.img || "/p1.jpeg"}
                alt=""
                fill
                className={styles.image}
                loading="lazy"
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              {menu.catSlug}
            </span>
            <h3 className={styles.postTitle}>{menu.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{menu.user.name}</span>
              <span className={styles.date}>
                {" "}
                - {menu.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
