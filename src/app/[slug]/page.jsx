import Comment from "@/src/components/Comment/Comment";
import Menu from "@/src/components/Menu/Menu";
import Image from "next/image";
import React from "react";
import styles from "./singlepage.module.scss";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jonh Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a
              illo earum, voluptatum, perspiciatis eos nisi assumenda voluptates
              laudantium itaque, optio voluptate! Fuga quidem commodi saepe
              officia! Perferendis, earum cupiditate!
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a
              illo earum, voluptatum, perspiciatis eos nisi assumenda voluptates
              laudantium itaque, optio voluptate! Fuga quidem commodi saepe
              officia! Perferendis, earum cupiditate!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi architecto a, voluptatibus, animi deserunt totam fuga
              tempore quam voluptatum soluta temporibus iste, repudiandae odit
              labore assumenda! Vero fugit optio ratione porro inventore,
              sapiente, saepe nesciunt neque explicabo expedita quos,
              consequatur odit maiores atque quam tempore laboriosam officia
              voluptatum illo nemo?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi architecto a, voluptatibus, animi deserunt totam fuga
              tempore quam voluptatum soluta temporibus iste, repudiandae odit
              labore assumenda! Vero fugit optio ratione porro inventore,
              sapiente, saepe nesciunt neque explicabo expedita quos,
              consequatur odit maiores atque quam tempore laboriosam officia
              voluptatum illo nemo?
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
