import { useState, useEffect } from "react";
import styles from "../styles/Authform.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { auth_request } from "../util/service";

export default function VerifyEmail() {
  const params = useParams();
  const { token } = params;
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    auth_request(
      "post",
      "/verify",
      { token },
      (res) => {
        navigate("/updateprofile");
        console.log(res.data);
      },
      console.log
    );
  }, []);
  return (
    <div>
      {loading ? <h1>Loading</h1> : <h1>Verified</h1>}
      <div className={styles.signupButton}>
        <p>Login in again</p>
      </div>
    </div>
  );
}
