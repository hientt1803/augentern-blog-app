import Link from "next/link";
import React from "react";
import styles from "./menucategories.module.scss";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=travel"
        className={`${styles.category} ${styles.travel}`}
      >
        travel
      </Link>
      <Link
        href="/blog?cat=food"
        className={`${styles.category} ${styles.food}`}
      >
        food
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.category} ${styles.coding}`}
      >
        coding
      </Link>
      <Link
        href="/blog?cat=fashion"
        className={`${styles.category} ${styles.fashion}`}
      >
        fashion
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.category} ${styles.culture}`}
      >
        culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.category} ${styles.style}`}
      >
        style
      </Link>
    </div>
  );
};

export default MenuCategories;
