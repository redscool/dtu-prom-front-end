import React from "react";
import styles from "../styles/LandingPage.module.css";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.centralWidget}>
        <div className={styles.welcomeHeading}>
          <h1>Welcome To Dtu-Prom</h1>
        </div>
        <div
          className={styles.signup}
          onClick={() => {
            navigate("/signup");
          }}
        >
          <p>Sign Up</p>
        </div>
        <div
          className={styles.login}
          onClick={() => {
            navigate("/login");
          }}
        >
          <p>Log in</p>
        </div>
      </div>
    </div>
  );
}
