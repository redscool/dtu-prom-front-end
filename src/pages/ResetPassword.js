import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Authform.module.css";
import { auth_request } from "../util/service";
export default function ResetPassword() {
  const params = useParams();
  const { token } = params;
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState();
  const [cpassword, setCPassword] = useState();
  const onClickReset = () => {
    if (password !== cpassword) {
      alert("Password didn't match");
      return;
    }

    auth_request(
      "post",
      "/resetpassword",
      { token, password },
      (res) => {
        setLoading(false);
        console.log(res.data);
      },
      console.log
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
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
        <div className={styles.signupButton} onClick={() => onClickReset()}>
          <p>Reset</p>
        </div>
        {loading ? <h1>Loading</h1> : <h1>Reset successfully</h1>}
      </div>
    </div>
  );
}
