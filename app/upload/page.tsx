"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface Cloudinary 
{
    public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
      <>
      {publicId && <CldImage src={publicId} alt="This is shown image is not shown" height={180} width={270}/>}
      <CldUploadWidget
      uploadPreset="ezl8hdjh"
      onUpload={(result, widget) => 
        {
            if(result.event !== "success") return;
            
            const info = result.info as Cloudinary;
            setPublicId(info.public_id);
        }
    }

    options={
        {
            sources: ["local"],
            multiple: false,
            maxFiles: 5,
        }
    }
    >
      {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
      </>
  );
};

export default UploadPage;
