"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./login.module.scss";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  console.log(data, status);

  if (status === "loading") {
    return <div>...Loading...</div>;
  }

  if (status === "authenticated") {
    return router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
