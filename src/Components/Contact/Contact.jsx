import React from 'react'
import GetInTouch from './GetInTouch'
import SendMessage from './SendMessage'
import ContactHeader from './ContactHeader'

const Contact = () => {
  return (
      <div className=''>
          <ContactHeader/>
          <div className="grid md:grid-cols-2 gap-4 my-20">
              <GetInTouch />
              <SendMessage/>
          </div>   
    </div>
  )
}

export default Contact