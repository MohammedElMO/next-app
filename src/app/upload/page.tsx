"use client";

import { useState } from "react";
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
function UploadImageWidget() {
  const [publicId, setpublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={200} height={200} alt={"image"} />
      )}
      <CldUploadWidget
        options={{
          styles: {
            palette: {
              window: "#F5F5F5",
              sourceBg: "#FFFFFF",
              windowBorder: "#2F71C0",
              tabIcon: "#0094c7",
              inactiveTabIcon: "#2F5E9F",
              menuIcons: "#0094C7",
              link: "#5FA397",
              action: "#8F5DA5",
              inProgress: "#0194c7",
              complete: "#53ad9d",
              error: "#CE3939",
              textDark: "#000000",
              textLight: "#FFFFFF",
            },
            fonts: {
              default: null,
              "'Poppins', sans-serif": {
                url: "https://fonts.googleapis.com/css?family=Poppins",
                active: true,
              },
            },
          },
          sources: ["local"],
          googleApiKey: "<image_search_google_api_key>",
          showAdvancedOptions: true,
          cropping: true,
          multiple: false,
          defaultSource: "local",
          maxFiles:2
        }}
        uploadPreset={"dvzh4sxz"}
        onSuccess={(results, widget) => {
          const { public_id } = results.info as CloudinaryUploadWidgetInfo;
          setpublicId(public_id);
        }}
      >
        {({ open, close }) => {
          return (
            <button onClick={() => open()} className="btn btn-outline m-3">
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
}

export default UploadImageWidget;
