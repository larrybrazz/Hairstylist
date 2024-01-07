import React from 'react'

const Awards = () => {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 container mx-auto mt-24 space-y-8">
        <div className="space-y-8 md:space-y-0">
          <div className="text-center space-y-8">
            <h1 className="space-x-2 ">
              <span className="text-4xl font-bold">Our</span>{" "}
              <span className="text-4xl text-palevioletred font-bold">
                Awards
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
                      <div className="grid grid-cols-2">
                          
                      </div>
          </div>
        </div>
        <div className="hover:translate-z-2 transition-transform duration-75">
          <img src="images/beauty5.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Awards