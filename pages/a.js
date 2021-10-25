import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUploader({ img }) {
  const [postImage, setPostImage] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
      files.forEach(async file => {
        const base64Data = await convertToBase64(file)
        const base64Split = base64Data.split(",");
        const base64 = base64Split[1];
        const data = base64Split[0].slice(11, -7);
        setPostImage({data, base64});
      });
  },[files]);


  const { getRootProps, getInputProps } = useDropzone({
    accept: ".jpeg, .png, .jpg",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    multiple: false
  });

  console.log(postImage)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  return (
    <div>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-black h-32 flex justify-center items-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p>Drop files here</p>
      </div>
      <div>
        <img src={`data:image/png;base64,${postImage.base64}`} alt="" />
      </div>
    </div>
  );
}

