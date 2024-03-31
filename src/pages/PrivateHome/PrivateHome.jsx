import React from 'react'
import "./PrivateHome.css"
import { useNavigate } from 'react-router-dom'
import { Header } from '../../common/Header/Header'

export const PrivateHome = () => {
  const navigate = useNavigate()

  const redirectToCreateAppointments = () => {
    navigate('/create-appointment')
  }
  const redirectToMyAppointments = () => {
    navigate('/my-appointments')
  }

  return (
    <>
      <Header />
      <div className='privateHomeDesign'>
        <div className="imgHome">
        </div>
        <div className="optionsHome">
          <h1 className='createAppointment' onClick={redirectToCreateAppointments}>Crear citas</h1>
          <h1 className='myAppointments' onClick={redirectToMyAppointments}>Mis citas</h1>
        </div>
      </div>
    </>
  )
}
