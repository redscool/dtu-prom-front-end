import React from "react";
import styles from "../styles/components/ProfileTab.module.css";
const prof = {
  _id: "64454c76646168a8676722e8",
  userId: "64454c76646168a8676722e6",
  regComplete: true,
  age: "22",
  bio: "Nahi hai",
  branch: "COE",
  college: "DTU",
  company: "BALJEET",
  email: "kulbois007@yahoo.com",
  image: "https://cdn.filestackcontent.com/jTT28UsS5ZOUHVMUxfwF",
  instagram: "oliv",
  linkedin: "linked",
  location: "BIhar",
  name: "Kul bois",
  outsideDTU: true,
};

export default function ProfileTab({ profile }) {
  const {
    _id,
    userId,
    name,
    age,
    bio,
    branch,
    college,
    company,
    email,
    image,
    outsideDTU,
    location,
    instagram,
    linkedin,
    interest,
  } = profile;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt="profile pic" />
      </div>
      <div className={styles.left}>
        <div className={styles.fieldContainer}>
          <img src="/name.png"></img>
          <p> {name}</p>
        </div>
        <div className={styles.fieldContainer}>
          <img src="/bio.png"></img>
          <p>{bio}</p>
        </div>
        <div className={styles.fieldContainer}>
          <img src="/college.png"></img>
          <p>{college}</p>
        </div>
        <div className={styles.fieldContainer}>
          <a href={`instagram.com/${instagram}`}>
            <img src="/insta.svg" alt="" />
          </a>
          <p>{instagram}</p>
        </div>
        <div className={styles.fieldContainer}>
          <a href={linkedin}>
            <img src="/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.fieldContainer}>
          <img src="/age.png"></img>
          <p>{age}</p>
        </div>
        <div className={styles.fieldContainer}>
          <img src="/branch.png"></img>
          <p>{branch}</p>
        </div>
        <div className={styles.fieldContainer}>
          <img src="/company.png"></img>
          <p>{company}</p>
        </div>
        <div className={styles.fieldContainer}>
          <img src="/location.png"></img>
          <p>{location}</p>
        </div>
        <div className={styles.fieldContainer}>
          <img src="/interest.png"></img>
          <p>{interest}</p>
        </div>
      </div>
    </div>
  );
}
