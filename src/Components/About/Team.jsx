import React from 'react';
import "./about.css"

const Team = () => {
  return (
    <div className="container mx-auto my-24 space-y-10">
      <div className="text-center space-y-5">
        <h1 className="space-x-4 ">
          <span className="text-4xl font-bold">Our</span>{" "}
          <span className="text-4xl text-palevioletred font-bold">Team</span>
        </h1>
        <div className="flex justify-center items-center space-x-2">
          <p className="h-[2px] w-[60px] bg-zinc-400"></p>
          <span>
            <i className="fa fa-scissors text-zinc-400"></i>
          </span>
          <p className="h-[2px] w-[60px] bg-zinc-400"></p>
        </div>
      </div>
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 ">
        <figure class="snip1301">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample78.jpg"
            alt="sample78"
          />
          <figcaption>
            <h3>Parsley Montana YO</h3>
            <p>
              We are so busy watching out for what's just ahead of us that we
              don't take the time to enjoy where we are.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1301">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample78.jpg"
            alt="sample78"
          />
          <figcaption>
            <h3>Parsley Montana YO</h3>
            <p>
              We are so busy watching out for what's just ahead of us that we
              don't take the time to enjoy where we are.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1301">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample78.jpg"
            alt="sample78"
          />
          <figcaption>
            <h3>Parsley Montana YO</h3>
            <p>
              We are so busy watching out for what's just ahead of us that we
              don't take the time to enjoy where we are.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1301">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample80.jpg"
            alt="sample80"
          />
          <figcaption>
            <h3>Fleece Marigold</h3>
            <p>
              Summer is butter on your chin and corn mush between every tooth.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1301">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample80.jpg"
            alt="sample80"
          />
          <figcaption>
            <h3>Fleece Marigold</h3>
            <p>
              Summer is butter on your chin and corn mush between every tooth.
            </p>
          </figcaption>
        </figure>
        <figure class="snip1301">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample80.jpg"
            alt="sample80"
          />
          <figcaption>
            <h3>Fleece Marigold</h3>
            <p>
              Summer is butter on your chin and corn mush between every tooth.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Team