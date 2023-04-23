import React, { useEffect, useState } from "react";
import { resource_request_with_access_token } from "../util/service";
import ProfileTab from "../components/ProfileTab";
import styles from "../styles/ProfilePage.module.css";

export default function ProfilePage() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    const body = {};
    resource_request_with_access_token(
      "get",
      "/getOpposite",
      body,
      ({ data }) => {
        const arr = data.data;
        setProfiles(arr);
        console.log(arr);
      },
      console.log
    );
  }, []);
  return (
    <div className={styles.page}>
      {profiles.map((profile) => {
        return <ProfileTab profile={profile} />;
      })}
    </div>
  );
}
