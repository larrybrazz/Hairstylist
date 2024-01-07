import React from 'react'
import SideBar from './SideBar'
import ShopContent from './ShopContent'

import "./shop.css"
import Header from './Header'

const Shop = () => {
    return (
      <div className=" bg-zinc-100">
        <Header/>
        <div className="shop-container">
          <div className="shop my-4 ">
            <SideBar />
            <ShopContent />
          </div>
        </div>
    </div>
    );
}

export default Shop