import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./categorylist.module.scss";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "default",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}` || "/blog?cat=style"}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img || "/style.png"}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}

            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
