import './Contacts.css'
import React from 'react'

const Contacts = () => {
    let email = 'memmedovaleman212@gmail.com'
    let telNumber = '050-384-81-16'
    
  return (
<div className='Contact'>
<p className='contact'>Contact</p>
<p className='email'>Email: {email}</p>
<p className='number'>Phone number: {telNumber}</p>
    </div>
  )
}

export default Contacts