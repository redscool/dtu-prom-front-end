import React, { useState } from "react";
import styles from "../styles/Authform.module.css";
import { auth_request } from "../util/service";

export default function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const [gender, setGender] = useState("F");
  const [success, setSuccess] = useState(false);

  const clickSignUp = () => {
    if (password !== cpassword) {
      alert("Password didn't match");
      return;
    }

    const body = { email, password, type: gender };
    auth_request(
      "post",
      "/signup",
      body,
      (res) => {
        setSuccess(true);
        console.log(res.data);
      },
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
        <div className={styles.passwordContainer}>
          <label>confirm password</label>
          <input
            type="password"
            value={cpassword}
            className={styles.password}
            onChange={(e) => setCPassword(e.target.value)}
          ></input>
        </div>
        <div className={styles.genderContainer}>
          <div className={styles.male} onClick={() => setGender("M")}>
            <input type="radio" checked={gender === "M"} />
            <label>Male</label>
          </div>
          <div className={styles.male} onClick={() => setGender("F")}>
            <input type="radio" checked={gender === "F"} />
            <label>Female</label>
          </div>
        </div>
        <div className={styles.signupButton} onClick={() => clickSignUp()}>
          <p>Sign Up</p>
        </div>
        {success ? <h1>Please Check your email to verify</h1> : null}
      </div>
    </div>
  );
}
