import React from 'react'

const SendMessage = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="space-x-2 text-4xl">
        <span className=" text-black">Send a</span>
        <span className="text-palevioletred ">Message</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <p className="h-[2px] w-[60px] bg-zinc-400"></p>
        <span>
          <i className="fa fa-scissors text-zinc-400"></i>
        </span>
        <p className="h-[2px] w-[60px] bg-zinc-400"></p>
      </div>
      <p>
        Do you have any query or enquire? Do not hesitate to contact us today we
        are alwayss here to help you.
      </p>
      <form className=" space-y-6 p-2" action="">
        <div className="flex justify-between">
          <input
            className="placeholder:text-zinc-400 placeholder:pl-4 p-2 outline-palevioletred border border-zinc-400 rounded"
            type="text"
            placeholder="Full Name*"
          />
          <input
            className="placeholder:text-zinc-400 placeholder:pl-4 p-2 outline-palevioletred border border-zinc-400 rounded"
            type="text"
            placeholder="Email*"
          />
        </div>
        <input
          className="w-full placeholder:text-zinc-400 placeholder:pl-4 p-2 outline-palevioletred border border-zinc-400 rounded"
          type="text"
          placeholder="Email*"
        />
        <textarea
          className="w-full placeholder:text-zinc-400 placeholder:pl-4 p-2 outline-palevioletred border border-zinc-400 rounded"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="w-full uppercase font-bold hover: text-white p-4 bg-palevioletred rounded"> Send Message</button>
      </form>
    </div>
  );
}

export default SendMessage