import React, { useState } from "react";
import styles from "../styles/Authform.module.css";
import { auth_request } from "../util/service";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const clickLogin = () => {
    auth_request(
      "post",
      "/login",
      { email, password },
      console.log,
      console.log
    );
  };

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
        <div className={styles.passwordContainer}>
          <label>Password</label>

          <input
            type="password"
            value={password}
            className={styles.password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className={styles.signupButton} onClick={() => clickLogin()}>
          <p>Login</p>
        </div>
        <div
          className={styles.forgetPasswordButton}
          onClick={() => {
            navigate("/forgetpassword");
          }}
        >
          <p>Forget Password?</p>
        </div>
      </div>
    </div>
  );
}
