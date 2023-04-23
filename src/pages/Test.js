import { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import UploadImg from "../components/Upload";

import * as filestack from 'filestack-js';
const client = filestack.init('AAFjqftVMR0K83rNXHgM2z');

export default function Test() {
  const [showUpload, setShowUpload] = useState(false);
  const [uploadData, setUploadData] = useState('');

  useEffect(() => {

  }, []);

  const uploadFile = async (myFile) => {
    const { url } = await client.upload(myFile);
    return url;
  }

  const clickSubmit = async () => {
    console.log(await uploadFile(uploadData));
  }

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

  const getType = mime => {
    if (mime === "image/png") return "PNG";
    if (mime === "image/jpeg") return "JPEG";
    return "PNG";
  }

  const updateFile = async (croppedImg, mime) => {
    const minified = await resizeFile(croppedImg, getType(mime));

    const view = document.getElementById('fileUploadView');
    view.src = URL.createObjectURL(minified)

    setUploadData(minified);
  }

  return (
    <>
      {
        showUpload ?
          <UploadImg show={setShowUpload} updateImg={updateFile} />
          : null
      }
      <div>
        <img id="fileUploadView" src="" alt="" />
        <button onClick={() => setShowUpload(true)}>Upload</button>
        <button onClick={() => clickSubmit()}>Submit</button>
      </div>
    </>
  );
}
