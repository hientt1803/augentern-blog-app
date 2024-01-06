import Image from "next/image";
import Link from "next/link";
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
          <Image
            src={
              "https://images.pexels.com/photos/18434233/pexels-photo-18434233/free-photo-of-balcony-and-windows-in-house-building.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" ||
              "/p1.jpeg"
            }
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            How to make a good blog web app with Next.js 14 and mongoDB, i dont
            know. Maybe we could find out after discovering this stories
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            itaque? Quis voluptatum similique quisquam hic a unde ratione error
            iusto! Nam tempore ab qui alias? Nemo quas vel non corporis
            consequatur fugiat quidem libero eius?
          </p>
          <Link href="/posts/how-to-make-a-good-blog">
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
