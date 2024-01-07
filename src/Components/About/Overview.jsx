import React, { useEffect, useRef, useState } from "react";
import "./about.css"

const Overview = () => {
  const carouselData = [
    {
      img: "images/beauty.webp",
      title: "Dream Space",
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...`,
    },
    {
      img: "images/beauty1.webp",
      title: "Dream Space",
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...`,
    },
    {
      img: "images/beauty2.webp",
      title: "Dream Space",
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...`,
    },
    {
      img: "images/beauty3.webp",
      title: "Dream Space",
      info: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. ...`,
    },
    // Add more carousel items
  ];

  const carouselRef = useRef(null);
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((currentState + 1) % carouselData.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

 
  const slideCarousel = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      const transformValue = `translateX(-${currentState * slideWidth}px)`;

      carouselRef.current.style.transform = transformValue;
    }
  };

  useEffect(() => {
    slideCarousel();
  }, [currentState]);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 container mx-auto mt-24 space-y-8">
        <div className="space-y-8 md:space-y-0">
          <div className="text-center space-y-8">
            <h1 className="space-x-2 ">
              <span className="text-4xl font-bold">Who</span>{" "}
              <span className="text-4xl text-palevioletred font-bold">
                We Are
              </span>
            </h1>
            <div className="flex justify-center items-center space-x-2">
              <p className="h-[2px] w-[60px] bg-zinc-400"></p>
              <span>
                <i className="fa fa-scissors text-zinc-400"></i>
              </span>
              <p className="h-[2px] w-[60px] bg-zinc-400"></p>
            </div>
          </div>
          <div className="space-y-6 text-lg">
            <p>
              Our hair salon is proud to provide a unique combination of
              professional hairstylists and premium organic products, giving our
              clients access to top-notch hair care and grooming services.
            </p>
            <p>
              Our aim is to make your salon experience as remarkable and unique
              as you are. By keeping up with the latest trends and expanding our
              understanding of best practises, we are committed to consistently
              offering the newest innovations and styles. Our team of stylists
              works together to support one another's goals and unique abilities
              in the community and in the beauty business. We promise to exceed
              your expectations, maintain the highest standards of cleanliness
              in our salon, carefully attention to the details of your service,
              and make sure you're satisfied every step of the way.
            </p>
            <p>
              For anyone looking for a hairstyling location that offers superior
              hair care, outstanding customer service, and outstanding hair
              services, Hair Salon is the ideal choice.
            </p>
          </div>
        </div>
        <div className="overview-carousel-container">
          <div ref={carouselRef} className="overview-carousel">
            {carouselData.map((item, index) => (
              <div key={index} className="slide h-[60vh]">
                <img className="h-[100%] w-[100%]" src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
