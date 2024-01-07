import React from 'react'

const Newsletter = () => {
  return (
      <div className='text-center py-24 space-y-6 bg-zinc-200'> 
          <h1 className='text-3xl capitalize'>Get the Latest hair and beauty tips weekly</h1>
      <form className="space-x-6" action="">
        <input
          className="outline-none border-b border-black p-3 bg-zinc-200 placeholder:text-black"
          type="text"
          placeholder="Enter your email address"
        />
        <button className="uppercase py-3 px-6 bg-palevioletred text-white font-bold ">
          Suscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter