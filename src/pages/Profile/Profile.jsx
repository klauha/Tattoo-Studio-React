import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { Input } from '../../common/Input/input'
import { getProfile } from '../../services/apiCalls'


export const Profile = () => {

  const [userProfileData, setUserProfileData] = useState({})


  useEffect(() => {
    const getUserProfile = async ()=>{
      const profile = await getProfile()
      setUserProfileData(profile.data)
      console.log(userProfileData.email);
    }

    getUserProfile()
  }, [])


  return (
    <div className='profileDesign'>
      <div className='dataUser'>
        <div className='profileImg'>
          <img src="/img/imgprofile.jpg" alt="profilImg" />
        </div>
        <Input
          className="inputProfileDesign"
          type="text"
          name="firts_name"
          value={userProfileData.first_name}
          disabled={true}
        ></Input>
        <Input
          className="inputProfileDesign"
          type="text"
          name="last_name"
          value={userProfileData.last_name}
          disabled={true}
        ></Input>
        <Input
          className="inputProfileDesign"
          type="text"
          name="email"
          value={userProfileData.email}
          disabled={true}
        ></Input>

      </div>
    </div>
  )
}