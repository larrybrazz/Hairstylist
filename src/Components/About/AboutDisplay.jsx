import React from 'react'

const AboutDisplay = () => {
  return (
      <div style={{
          backgroundImage: "url(images/beauty4.webp",
          backgroundRepeat: "no-repeat",
          backgroundSize:"cover"
      }}>
      <div className="text-center container mx-auto text-white py-24 space-y-6">
        <h2 className=' font-bold text-xl'>
          We enjoy working together with people who are really talented. If you
          think you would be a fantastic addition to our team, tell us why you
          are interested. Better yet, give us a sample of what you can
          accomplish.
              </h2>
              <button className='bg-palevioletred py-4 px-10 uppercase font-bold'> Contact US</button>
      </div>
    </div>
  );
}

export default AboutDisplay