import React, { useState } from "react";
import styles from "../styles/Authform.module.css";
import { auth_request } from "../util/service";

export default function UpdateProfile() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [placedIn, setPlacedIn] = useState();
  const [interests, setInterests] = useState();
  const [livesIn, setLivesIn] = useState();
  const [success, setSuccess] = useState(false);

  const clickUpdateProfile = () => {
    //     const body = { email, password, type: gender };
    //     auth_request(
    //       "post",
    //       "/signup",
    //       body,
    //       (res) => {
    //         setSuccess(true);
    //         console.log(res.data);
    //       },
    //       console.log
    //     );
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.nameContainer}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            className={styles.name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={styles.ageContainer}>
          <label>Age</label>
          <input
            type="number"
            value={age}
            className={styles.age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div className={styles.placedInContainer}>
          <label>Placed in</label>
          <input
            type="text"
            value={placedIn}
            className={styles.placedIn}
            onChange={(e) => setPlacedIn(e.target.value)}
          ></input>
        </div>
        <div className={styles.interestsContainer}>
          <label>Interests</label>
          <input
            type="text"
            value={interests}
            className={styles.interests}
            onChange={(e) => setInterests(e.target.value)}
          ></input>
        </div>
        <div className={styles.livesInContainer}>
          <label>Current Location</label>
          <input
            type="text"
            value={livesIn}
            className={styles.liveIn}
            onChange={(e) => setLivesIn(e.target.value)}
          ></input>
        </div>
        <div
          className={styles.signupButton}
          onClick={() => clickUpdateProfile()}
        >
          <p>Update</p>
        </div>
        {success ? <h1>Please Check your email to verify</h1> : null}
      </div>
    </div>
  );
}
