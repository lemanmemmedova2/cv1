import './Experience.css'
import React from 'react'

const Experience = () => {
let e1 = '2023 Dost Merkezi (konullu)';
let e2 = '2023 Formula1 (konullu)';
  return (
    <div className='Exp'>
      <p className='head'>Work Experience</p>
       <p className='exp'> {e1} </p>
       <p className='exp'> {e2} </p>   
    </div>
  )
}

export default Experience;