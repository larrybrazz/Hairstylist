import React from 'react'

const ServicesPage = () => {
  return (
      <div style={{
          backgroundImage: "url(images/beauty4.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
          
      }}>
      <div className="container mx-auto py-16 space-y-8 text-center">
        <h1 className="space-x-4">
          <span className="text-4xl font-bold">Our</span>{" "}
          <span className="text-4xl text-palevioletred font-bold">Services</span>
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <p className="h-[2px] w-[60px] bg-white"></p>
          <span>
            <i className="fa fa-scissors text-white"></i>
          </span>
          <p className="h-[2px] w-[60px] bg-white"></p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div style={{ backgroundImage: "url(images/beauty4.webp)" }}>
            <div className="m-2 bg-white p-8 space-y-4">
              <h1 className="font-bold text-3xl">Hair Cuts</h1>
              <div className="flex justify-center items-center">
                <p className="h-[2px] w-[60px] bg-zinc-400"></p>
              </div>
              <div className="text-xl space-y-4">
                <p className="flex justify-between items-center">
                  <span>Women's Haircut</span>
                  <span>$96+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Men's Haircut</span>
                  <span>$56+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Teen's Haircut</span>
                  <span>$86+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Children's Haircut</span>
                  <span>$46+</span>
                </p>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: "url(images/beauty4.webp)" }}>
            <div className="m-2 bg-white p-8 space-y-4">
              <h1 className="font-bold text-3xl">Color</h1>
              <div className="flex justify-center items-center">
                <p className="h-[2px] w-[60px] bg-zinc-400"></p>
              </div>
              <div className="text-xl space-y-4">
                <p className="flex justify-between items-center">
                  <span>Women's Haircut</span>
                  <span>$96+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Men's Haircut</span>
                  <span>$56+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Teen's Haircut</span>
                  <span>$86+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Children's Haircut</span>
                  <span>$46+</span>
                </p>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: "url(images/beauty4.webp)" }}>
            <div className="m-2 bg-white p-8 space-y-4">
              <h1 className="font-bold text-3xl">Makeup</h1>
              <div className="flex justify-center items-center">
                <p className="h-[2px] w-[60px] bg-zinc-400"></p>
              </div>
              <div className="text-xl space-y-4">
                <p className="flex justify-between items-center">
                  <span>Women's Haircut</span>
                  <span>$96+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Men's Haircut</span>
                  <span>$56+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Teen's Haircut</span>
                  <span>$86+</span>
                </p>
                <p className="flex justify-between items-center">
                  <span>Children's Haircut</span>
                  <span>$46+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage