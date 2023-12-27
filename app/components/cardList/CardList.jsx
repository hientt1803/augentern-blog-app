import Image from "next/image";
import React from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import styles from "./cardlist.module.scss";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
