import React, { useState } from "react";
import styles from "../styles/Upload.module.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
const defaultSrc = "/face.png";

function urltoFile(url, filename, mimeType){
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename,{type:mimeType});})
    );
}

export default function UploadImg({ show, updateImg }) {
    const [image, setImage] = useState(defaultSrc);
    const [cropper, setCropper] = useState();

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const crop = async () => {
        if (typeof cropper !== "undefined") {
            const dataUrl = cropper.getCroppedCanvas().toDataURL();
            const imgDataArr = dataUrl.split(",");
            const mime = imgDataArr[0].split(",")[0].match(/:(.*?);/)[1];

            const imgFile = await urltoFile(imgDataArr, "image", mime);
            
            updateImg(imgFile, mime);
            show(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.popUp}>
                <img
                    className={styles.close}
                    src="/close.png"
                    onClick={(_e) => show(false)}
                    alt="X"
                />
                <h1>Crop</h1>
                <div style={{ width: "100%" }}>
                    <div className={styles.inputDiv}>
                        <label className={styles.fileInput}>
                            <input
                                type="file"
                                onChange={onChange}
                                accept="image/png, image/jpeg"
                            />
                            Upload Image
                        </label>
                    </div>

                    <Cropper
                        style={{
                            height: "30vh",
                            width: "100%",
                            backgroundColor: "#CAEBF2",
                        }}
                        zoomTo={0}
                        aspectRatio={1}
                        src={image}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                        onInitialized={(instance) => setCropper(instance)}
                        guides={true}
                    />
                </div>

                <div className={styles.btnSave} onClick={() => crop()}>
                    <p>Save Image</p>
                </div>
            </div>
        </div>
    );
}
