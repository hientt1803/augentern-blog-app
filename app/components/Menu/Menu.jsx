import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuCategories from "../MenuCategories/MenuCategories";
import MenuPosts from "../MenuPosts/MenuPosts";
import styles from "./menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Hot section */}
      <div>
        <h2 className={styles.subTitle}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most Popular</h1>
        <MenuPosts withImage={false} />
      </div>

      {/* Category */}
      <div>
        <h2 className={styles.subTitle}>Discover by topic</h2>
        <h1 className={styles.title}>Categories</h1>
        <MenuCategories />
      </div>

      {/* Editor pick section */}
      <div>
        <h2 className={styles.subTitle}>Chosen by the editor</h2>
        <h1 className={styles.title}>Editors Pick</h1>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
