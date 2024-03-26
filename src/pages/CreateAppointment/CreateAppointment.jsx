import React, { useState } from 'react'
import "./CreateAppointment.css"
import { createAppointments } from '../../services/apiCalls'

export const CreateAppointment = () => {

  const [bodyDataAppointment, setBidyDataAppointment] = useState(
    {
      serviceId:"",
      appoinmentDate:"" 
    }
  )

  const postAppointment = async ()=> {
    const result = await createAppointments(bodyDataAppointment)
  }

  return (

    <div className='createAppoinmentDesign'>CreateAppointments</div>
  )
}
