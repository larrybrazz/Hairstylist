import React from 'react'
import { Link } from 'react-router-dom';

import "./footer.css"

const Footer = () => {
  return (
    <div className="footer grid sm:grid-cols-2 md:grid-cols-4 bg-gray-800 py-12 text-white">
      <div className="flex items-center sm:border-r-2 border-r-palevioletred">
        <div className="  px-2 space-y-4">
          <h1 className="font-bold text-5xl"> HairSalon</h1>
          <div className="text-zinc-400 flex justify-between">
            <span>
              <i className="fa fa-facebook hover:text-blue-500"></i>
            </span>
            <span>
              <i className="fa fa-twitter  hover:text-blue-500"></i>
            </span>
            <span>
              <i className="fa fa-snap  hover:text-yellow-500"></i>
            </span>
            <span>
              <i className="fa fa-instagram  hover:text-black"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="about sm:border-r-2 border-r-palevioletred p-4 space-y-4">
        <h1 className="font-bold text-2xl uppercase"> About us</h1>
        <ul className="space-y-4">
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Book Online </Link>
          </li>
          <li>
            <Link>Meet Out Team</Link>
          </li>
          <li>
            <Link>Certtifications</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="about sm:border-r-2 border-r-palevioletred p-4 space-y-4">
        <h1 className="font-bold text-2xl uppercase"> Services</h1>
        <ul className="space-y-4">
          <li>
            <Link>Hair Cut</Link>
          </li>
          <li>
            <Link>Blow Wave </Link>
          </li>
          <li>
            <Link>Color</Link>
          </li>
          <li>
            <Link>Make Up</Link>
          </li>
          <li>
            <Link>Treatments</Link>
          </li>
        </ul>
      </div>
      <div className="about sm:border-r-2 p-4 space-y-4">
        <h1 className="font-bold text-2xl uppercase"> Contact</h1>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 text-sm">
            <span>
              <i className="fa fa-location-dot"></i>
            </span>
            <span>St MAry's College, Fenham, Newcastle NE$ 9YH</span>
          </li>

          <li className="flex items-center space-x-4 text-sm">
            <span>
              <i className="fa fa-phone"></i>
            </span>
            <span>+44(0)7823719099</span>
          </li>

          <li className="flex items-center space-x-4">
            <span>
              <i className="fa fa-message"></i>
            </span>{" "}
            
            <span style={{ whiteSpace: "nowrap" }}>
              olanrewajuadebayo004@gmail.com
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer