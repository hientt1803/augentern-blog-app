import CardList from "@/src/components/cardList/CardList";
import Menu from "@/src/components/Menu/Menu";
import React from "react";
import styles from "./blogpage.module.scss";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
