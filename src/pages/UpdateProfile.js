import React, { useState } from "react";
import styles from "../styles/UpdateProfile.module.css";
import { auth_request_with_access_token } from "../util/service";
import Resizer from "react-image-file-resizer";
import UploadImg from "../components/Upload";
import * as filestack from "filestack-js";
import { useNavigate } from "react-router-dom";
const client = filestack.init("AAFjqftVMR0K83rNXHgM2z");
export default function UpdateProfile() {
  const [name, setName] = useState();
  const [college, setCollege] = useState();
  const [branch, setBranch] = useState();
  const [bio, setBio] = useState();
  const [instagram, setInstagram] = useState();
  const [linkedin, setLinkedin] = useState();
  const [age, setAge] = useState();
  const [company, setCompany] = useState();
  const [interest, setInterest] = useState();
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState("");
  const navigate = useNavigate();

  const resizeFile = (file, type) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        400,
        type,
        70,
        0,
        (file) => {
          resolve(file);
        },
        "file"
      );
    });

  const getType = (mime) => {
    if (mime === "image/png") return "PNG";
    if (mime === "image/jpeg") return "JPEG";
    return "PNG";
  };

  const updateFile = async (croppedImg, mime) => {
    const minified = await resizeFile(croppedImg, getType(mime));

    const view = document.getElementById("fileUploadView");
    view.src = URL.createObjectURL(minified);

    setUploadData(minified);
  };
  const uploadFile = async (myFile) => {
    const { url } = await client.upload(myFile);
    return url;
  };
  const clickUpdateProfile = async () => {
    setLoading(true);
    const image = await uploadFile(uploadData);
    const body = {
      name,
      college,
      branch,
      company,
      age,
      bio,
      instagram,
      linkedin,
      location,
      interest,
      image,
    };
    auth_request_with_access_token(
      "post",
      "/user/updateProfile",
      body,
      (res) => {
        const accessToken = res.data.accessToken;
        setLoading(false);
        console.log(res.data);
        if (accessToken) localStorage.setItem("accessToken", accessToken);
        navigate("/profiles");
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };

  return (
    <>
      {showUpload ? (
        <UploadImg show={setShowUpload} updateImg={updateFile} />
      ) : null}
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.imageUploadContainer}>
            <img
              id="fileUploadView"
              src="/face.png"
              alt=""
              className={styles.displayImage}
            />
            <div
              onClick={() => setShowUpload(true)}
              className={styles.uploadButton}
            >
              <p>Upload</p>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.leftContainer}>
              <div className={styles.fieldContainer}>
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>College</label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>Branch</label>
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>Instagram</label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>LinkedIn</label>
                <input
                  type="text"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.fieldContainer}>
                <label>Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>Company</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>Interests</label>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                ></input>
              </div>
              <div className={styles.fieldContainer}>
                <label>Bio</label>
                <input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div
            className={styles.updateButton}
            onClick={() => clickUpdateProfile()}
          >
            <p>{loading ? "Loading" : "Update"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
