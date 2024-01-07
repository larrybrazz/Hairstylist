import React from 'react'
import BillingDetails from './BillingDetails'
import YourPurchase from './YourPurchase'

const Checkout = () => {
  return (
      <div className='container mx-auto grid gap-4 md:grid-cols-2'>
          <BillingDetails />
          <YourPurchase />
    </div>
  )
}

export default Checkout