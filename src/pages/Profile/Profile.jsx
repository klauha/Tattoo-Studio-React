import React, { useEffect, useState } from 'react'
import "./Profile.css"
import { Input } from '../../common/Input/input'
import { editProfile, getProfile } from '../../services/apiCalls'
import { Header } from '../../common/Header/Header'
import { Button } from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {

  const [userProfileData, setUserProfileData] = useState({})
  const [hadleInputDisable, setHandleInputDisable] = useState(true)

  const [token, setToken] = useState(localStorage.getItem('token'))

  const navigate = useNavigate()


  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [token])
  

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


  const editProfileUser = async () => {
    try {

      const dataToUpdate = {
        firstName: userProfileData.first_name,
        lastName: userProfileData.last_name
      }

      console.log(dataToUpdate);
      const updateUserProfile = await editProfile(dataToUpdate)

    } catch (error) {

    } finally {
      setHandleInputDisable(!hadleInputDisable)
    }

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
    <>
    <Header />
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
        <div className="buttons">
          <Button
         title={"Editar"}
        className="ButtonDesign"
        onClick={editData}
        />
         <Button
         title={"Actualizar"}
        className="ButtonDesign"
        onClick={editProfileUser}
        />
        </div>
      
      </div>
    </div>
    </>
  )
}