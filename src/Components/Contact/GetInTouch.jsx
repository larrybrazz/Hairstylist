import React from 'react'

const GetInTouch = () => {
  return (
    <div className='text-center space-y-4'>
      <h1 className="space-x-2 text-4xl">
        <span className=" text-black">Get in</span>
        <span className="text-palevioletred ">Touch</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <p className="h-[2px] w-[60px] bg-zinc-400"></p>
        <span>
          <i className="fa fa-scissors text-zinc-400"></i>
        </span>
        <p className="h-[2px] w-[60px] bg-zinc-400"></p>
      </div>
      <p>
        You can alos find us at our location in the address below
          </p>
          <div className='space-y-2'>
              <p><i className='fa fa-location-dot text-palevioletred'></i></p>
              <p>st Mary college , Fenham Hall Drive, Newcastle</p>
          </div>
          <div className='space-y-4'> 
              <p><i className='fa-regular fa-clock text-palevioletred'></i></p>
              <p>Opening Hours 8:00AM - 10:00pm</p>
              <p>Monday -Sunday</p>
              <p>Call 00 07534567</p>
              <p>E-mail. contact@ghjko.org</p>
              <div className='flex justify-center space-x-4'>
                  <span><i className='fa fa-facebook hover:text-blue-500'></i></span>
                  <span><i className='fa fa-twitter hover:text-blue-500'></i></span>
                  <span><i className='fa fa-skype hover:text-blue-500'></i></span>
              </div>
          </div>
    </div>
  );
}

export default GetInTouch