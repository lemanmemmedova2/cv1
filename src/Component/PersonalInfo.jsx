import './PersonalInfo.css'
import React from 'react'
import Photo from './Photo.jpeg'
const PersonalInfo = () => {
let name = "Leman Memmedova";
    let age = 'Age:' +19;
    let location = 'Location:Baki,Xetai rayonu'
  return (
    <div className='Personal'>
      
    <img src={Photo} alt='myphoto'/>
    <div className='main'>
 <h1 className='name'>{name} </h1>  
  <p className='age'> {age} </p>
  <p className='location'> {location} </p>
  <h2>Computer engineering student</h2>
  </div>
  </div>
  )
}

export default PersonalInfo