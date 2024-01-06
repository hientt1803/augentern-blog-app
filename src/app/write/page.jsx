"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import styles from "./write.module.scss";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/src/utils/firebase";
import { async } from "@firebase/util";

// TOAST
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// FIREBASE
const storage = getStorage(app);

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  // action button
  const [open, setOpen] = useState(false);

  // file upload
  const [file, setFile] = useState(null);
  const media = useRef("");

  // title and desc
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [cat, setCatSlug] = useState("style");

  // FIREBASE
  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          toast.info(`Upload is ${Math.round(progress)}% done`, {
            position: toast.POSITION.TOP_RIGHT,
          });

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          toast.error(`Upload failed: ${error.message}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            media.current = downloadURL;
          });
          toast.success("Upload successful!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!status === "authenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media.current,
        slug: slugify(title),
        catSlug: cat || "style",
      }),
    });

    console.log(res);

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <>
      <ToastContainer />

      <div className={styles.container}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <label htmlFor="cat" className={styles.label}>
          Choose your category:{" "}
        </label>
        <select
          name="cat"
          id="cat"
          className={styles.select}
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <div className={styles.editor}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className={styles.add}>
              <input
                type="file"
                id="image-file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className={styles.addButton}>
                <label htmlFor="image-file">
                  <Image
                    src="/add_image.png"
                    alt=""
                    width={16}
                    height={16}
                    style={{ cursor: "pointer" }}
                  />
                </label>
              </button>
              <button className={styles.addButton}>
                <Image
                  src="/external.png"
                  alt=""
                  width={16}
                  height={16}
                  style={{ cursor: "pointer" }}
                />
              </button>
              <button className={styles.addButton}>
                <Image
                  src="/video.png"
                  alt=""
                  width={16}
                  height={16}
                  style={{ cursor: "pointer" }}
                />
              </button>
            </div>
          )}
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
        <button className={styles.publish} onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </>
  );
};

export default WritePage;
