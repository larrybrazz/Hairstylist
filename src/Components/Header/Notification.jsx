import React from 'react'

const Notification = () => {
  return (
    <div className="container mx-auto">
      <div className="text-xm text-zinc-600 md:flex justify-between hidden py-2 border-b">
        <div className="flex flex-wrap space-x-4">
          <p>
            T. <span className="hover:text-palevioletred"> +447823719099</span>{" "}
          </p>
          <p>
            E.{" "}
            <span className="hover:text-palevioletred">
              {" "}
              olanrewajuadebayo004@gmail.com
            </span>{" "}
          </p>
          <p>A. 23 Ama kip kip, Newcastle, United Kingdom</p>
        </div>

        <div className="flex space-x-4">
          <span>
            <i className="fa fa-facebook hover:text-blue-500 transition-all" />{" "}
          </span>
          <span>
            <i className="fa fa-instagram hover:text-black transition-all" />{" "}
          </span>
          <span>
            <i className="fa fa-snapchat hover:text-yellow-500 transition-all" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Notification