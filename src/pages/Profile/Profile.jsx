import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { Input } from '../../common/Input/input'
import { editProfile, getProfile } from '../../services/apiCalls'


export const Profile = () => {

  const [userProfileData, setUserProfileData] = useState({})
  const [hadleInputDisable, setHandleInputDisable] = useState(true)


  useEffect(() => {
    const getUserProfile = async () => {
      const profile = await getProfile()
      setUserProfileData(profile.data)
    }
    getUserProfile()
  }, [])


  const editData = () => {
    console.log('edit data');
    setHandleInputDisable(!hadleInputDisable)
  }


  const editProfileUser = () => {
    try {

      const dataToUpdate = {
        firstName: userProfileData.first_name,
        lastName: userProfileData.last_name
      }

      console.log(dataToUpdate);
      const updateUserProfile = editProfile(dataToUpdate)
    } catch (error) {
      console.log(error);
    }
    // setHandleInputDisable(!hadleInputDisable)


  }
  const inputHandler = (e) => {
    setUserProfileData((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))

  }

  return (
    <div className='profileDesign'>
      <div className='dataUser'>
        <div className='profileImg'>
          <img src="/img/imgprofile.jpg" alt="profilImg" />
        </div>
        <Input
          className="inputProfileDesign"
          type="text"
          name="first_name"
          value={userProfileData.first_name || ""}
          disabled={hadleInputDisable}
          onChangeFunction={inputHandler}
        ></Input>
        <Input
          className="inputProfileDesign"
          type="text"
          name="last_name"
          value={userProfileData?.last_name ?? ""}
          disabled={hadleInputDisable}
          onChangeFunction={(e) => inputHandler(e)}
        ></Input>
        <Input
          className="inputProfileDesign"
          type="text"
          name="email"
          value={userProfileData.email || ""}
          disabled={true}
        ></Input>
        <button onClick={editData}> Editar </button>
        <button onClick={editProfileUser}> Guardar </button>
      </div>
    </div>
  )
}