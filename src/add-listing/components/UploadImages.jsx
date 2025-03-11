import { Button } from "@/components/ui/button";
import { storage } from "./../../../configs/firebaseConfig";
import React, { useEffect, useState } from "react";
import { getDownloadURL,ref, uploadBytes } from "firebase/storage";
import { IoClose } from "react-icons/io5";
import { db } from "./../../../configs";
import { CarImages } from "./../../../configs/schema";

function UploadImages({triggleUploadImages,setLoader}) {
  const [selectedFileList, setSelectedFileList] = useState([]);

  useEffect(() => {
    if(triggleUploadImages)
      {
        UploadImageToServer();
      }
  },[triggleUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  const UploadImageToServer = async() => {
    setLoader(true);
    await selectedFileList.forEach(async(file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "car-market/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            console.log(downloadURL);
            await db.insert(CarImages).values({
              imageUrl: downloadURL,
              carListingId: triggleUploadImages,
          });
        });
    });
    setLoader(false);
  });
  };

  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {selectedFileList.map((image, index) => (
          <div key={index}>
            <IoClose
              className="absolute m-2 text-lg"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}
        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-blue-500 bg-blue-100 p-10 cursor-pointer hover:shadow-md">
            <h2 className="text-lg text-center text-blue-500">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
}

export default UploadImages;
