"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./authlinks.module.scss";

const AuthLinks = () => {
  const status = "noauthenticated";
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "noauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/login" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === "noauthenticated" ? (
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          ) : (
            <>
              <Link href="/login" className={styles.link}>
                Write
              </Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
