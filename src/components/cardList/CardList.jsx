import React from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import styles from "./cardlist.module.scss";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  if (page === undefined) {
    page = 1;
  }

  const { posts, count } = await getData(page, cat);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          {posts?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
          {posts.length === 0 && (
            <h2
              className={styles.title}
              style={{
                maxWidth: "800px",
                textAlign: "center",
                margin: "200px auto",
              }}
            >
              There is no blog for this Category. {"Let's"} create one blog for
              this category
            </h2>
          )}
        </div>
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
