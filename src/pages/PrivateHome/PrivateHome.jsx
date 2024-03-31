import React from 'react'
import "./PrivateHome.css"
import { useNavigate } from 'react-router-dom'

export const PrivateHome = () => {
  const navigate = useNavigate()

  const redirectToCreateAppointments = () => {
    navigate('/create-appointment')
  }

  return (
    <div className='privateHomeDesign'>
      <div className="containerHome"></div>
      <div className="options">
        <div className='createAppointment' onClick={redirectToCreateAppointments}>Crear citas</div>
        <div className='myAppointments'>Mis citas</div>
      </div>
    </div>
  )
}
