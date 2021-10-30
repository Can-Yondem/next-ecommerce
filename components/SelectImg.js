import React, { useEffect, useState } from "react";
import { UilUpload } from "@iconscout/react-unicons";


import { useDropzone } from "react-dropzone";


export const SelectImg = ({ callback, name }) => {
  const [postImage, setPostImage] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
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

    files.forEach(async (file) => {
      const base64Data = await convertToBase64(file);
      const base64Split = base64Data.split(",");
      const base64 = base64Split[1];

      setPostImage(base64);

    });
  }, [files]);

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
    multiple: false,
  });

  const cover = useDropzone({
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
    multiple: false,
  });

  const resetImage = () => {
    setPostImage("");
    setFiles([]);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  return (
    <div className="flex flex-col pr-8 pt-5">
      <label className="font-interregular font-bold text-linkButtontext">
        {name}
      </label>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-black h-32 flex justify-center items-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col justify-center items-center">
          <label className="font-interregular font-light text-loginWhyJoinUs">
            Drag & Drop Your files or Browse
          </label>
        </div>
      </div>
      <div className="mt-10 w-full">
        <p className="font-bold">Profile Avatar</p>,
        <div className="flex gap-5">
          <div className="border-2 border-dashed border-black h-40 w-1/2 p-4">
            <img src={`data:image/${postImage};base64,${postImage}`} alt="" className="h-full" />
          </div>
          <div className="w-1/2">
            <p className="font-semibold text-gray-500 mb-3">Yüklenenler</p>
            {files.length !== 0 ?
              <div className="flex">
                <img src={`data:image/${postImage};base64,${postImage}`} alt="" className="w-20 h-20 mr-5 rounded-full" />
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <div className="w-full flex gap-4 items-center">
                      <p className="text-lg font-semibold text-gray-500">{files[0]?.path}</p>
                      <p className="text-sm text-gray-500">{formatBytes(files[0]?.size)}</p>
                    </div>
                    <button onClick={resetImage}>X</button>
                  </div>
                  <div className="border-2 border-gray-300 rounded-2xl bg-gray-100 overflow-hidden my-1">
                    <div className="bg-green-500 h-2 rounded-2xl w-1/2" />
                  </div>
                  <p  className="text-sm text-gray-500">%37 tamamlandı.</p>
                </div>
              </div> : <p>Henüz resim yüklemediniz.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};