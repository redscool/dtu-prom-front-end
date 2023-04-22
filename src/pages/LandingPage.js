import React from "react";
import styles from "../styles/LandingPage.module.css";
export default function LandingPage() {
  return (
    <div className={styles.container}>
      <h1>Welcome To Dtu-Prom</h1>
      <h2></h2>
      <div className={styles.signup}>
        <p>Sign Up</p>
      </div>
      <div className={styles.login}>
        <p>Log in</p>
      </div>
    </div>
  );
}
