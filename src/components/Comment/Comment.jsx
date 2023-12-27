import Image from "next/image";
import Link from "next/link";
import styles from "./comment.module.scss";

const Comment = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jonh Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
            esse culpa impedit nulla. Eligendi nam voluptatum officiis rem
            repellat? Possimus itaque quisquam dolorum vel provident fugit
            corrupti assumenda voluptatibus.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jonh Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
            esse culpa impedit nulla. Eligendi nam voluptatum officiis rem
            repellat? Possimus itaque quisquam dolorum vel provident fugit
            corrupti assumenda voluptatibus.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jonh Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui
            esse culpa impedit nulla. Eligendi nam voluptatum officiis rem
            repellat? Possimus itaque quisquam dolorum vel provident fugit
            corrupti assumenda voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
