import React from 'react'
import "./Profile.css"
import { Input } from '../../common/Input/input'

export const Profile = () => {


  return (
    <div className='profileDesign'>
      <div className='dataUser'>
        <div className='profileImg'>
          <img src="/img/imgprofile.jpg" alt="profilImg" />
        </div>
        <Input
        className= "inputProfileDesign"
        type="text"
        name="firts_name"
        ></Input>
       <Input
       className= "inputProfileDesign"
        type="text"
        name="firts_name"
        ></Input>
        <Input
        className= "inputProfileDesign"
        type="text"
        name="firts_name"
        ></Input>

      </div>
    </div>
  )
}