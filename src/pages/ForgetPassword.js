import React, { useState } from "react";
import styles from "../styles/Authform.module.css";
import { auth_request } from "../util/service";
export default function ForgetPassword() {
  const onClickReset = () => {
    auth_request(
      "post",
      "/forgotpassword",
      { email },
      console.log,
      console.log
    );
  };
  const [email, setEmail] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.emailContainer}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            className={styles.email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={styles.signupButton} onClick={() => onClickReset()}>
          <p>Reset</p>
        </div>
      </div>
    </div>
  );
}
