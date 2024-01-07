import React, { useState } from "react";

const DisplayTwo = () => {
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <div className=" bg-gray-300 ">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center h-[100vh] bg-white ">
          <div>
            <img src="gallery/hair.webp" alt="" />
          </div>
          <div className="flex flex-col text-center p-20 space-y-6">
            <p className="text-2xl ">Before and After</p>
            <p className="uppercase font-mono ">Watch the Video</p>
            <span
              onClick={() => setOpenVideo((prev) => !prev)}
              className="p-4  border-2 text-palevioletred border-palevioletred rounded-full hover:bg-palevioletred  hover:text-white"
            >
              <i className="fa fa-play "></i>
            </span>
          </div>
          <div>
            <img src="gallery/hair2.webp" alt="" />
          </div>
          {openVideo && (
            <div className={`video_display ${openVideo ? "open" : ""}`} >
              <span onClick={()=>setOpenVideo(prev=> !prev)} className="absolute top-0 ">
                <i className="fa fa-close text-2xl text-white"></i>
              </span>
              <video controls width="800" height="300">
                <source src="path_to_your_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayTwo;
