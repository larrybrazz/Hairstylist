import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./gallery.css";

const Gallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: "gallery/hair9.webp",
    },
    {
      id: 2,
      imgSrc: "gallery/hair.webp",
    },
    {
      id: 3,
      imgSrc: "gallery/hair1.webp",
    },
    {
      id: 4,
      imgSrc: "gallery/hair2.webp",
    },
    {
      id: 5,
      imgSrc: "gallery/hair3.webp",
    },
    {
      id: 6,
      imgSrc: "gallery/hair4.webp",
    },
    {
      id: 7,
      imgSrc: "gallery/hair5.webp",
    },
    {
      id: 8,
      imgSrc: "gallery/hair6.webp",
    },
    {
      id: 9,
      imgSrc: "gallery/hair7.webp",
    },
    {
      id: 10,
      imgSrc: "galleryIihair8.webp",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTemptImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTemptImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((img, i) => (
          <div className="pics" key={i} onClick={() => getImg(img.imgSrc)}>
            <img src={img.imgSrc} alt="" style={{ with: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
