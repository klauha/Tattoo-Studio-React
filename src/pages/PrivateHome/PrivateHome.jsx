import React from 'react'
import "./PrivateHome.css"

export const PrivateHome = () => {
  return (
    <div className='privateHomeDesign'>
      <div className="container"></div>
      <div className="options">
        <div className='createAppointment'>Crear citas</div>
        <div className='myAppointments'>Mis citas</div>

      </div>
    </div>
  )
}
