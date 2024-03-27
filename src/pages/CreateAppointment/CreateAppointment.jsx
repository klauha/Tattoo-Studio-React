import React, { useState, useEffect } from 'react'
import "./CreateAppointment.css"
import { createAppointments, getServices } from '../../services/apiCalls'
import { Input } from '../../common/Input/input'

export const CreateAppointment = () => {

  const [bodyDataAppointment, setBodyDataAppointment] = useState(
    {
      serviceId: 3,
      appointmentDate: "2024-03-05"
    }
  )
  const [services, setServices] = useState([])


  const postAppointment = async () => {
    console.log(bodyDataAppointment);
    const result = await createAppointments(bodyDataAppointment)
  }

  useEffect(() => {
    const getServicesAppointments = async () => {
      const services = await getServices()
      console.log(services);
      setServices(services.data)
    }
    getServicesAppointments()
  }, [])


  const inputHandler = (e) => {
    setBodyDataAppointment((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))

  }


  return (

    <div className='createAppoinmentDesign'>
      <select name="select">
        <option value="">Selecciona un servicio</option>
        <option value="1">Tatuajes</option>
        <option value="2">Restauración de tatuajes</option>
        <option value="3">Tapado de tatto</option>
        <option value="4">Piercings</option>
        <option value="5">Laser Tatoo</option>
      </select>
      <button onClick={postAppointment}>Enviar</button>

      {/* <Input
      className= "inputDesign"
      type="password"
      placeHolder="password"
      name="password"
      onChangeFunction={(e) => inputHandler(e)}
    />  */}
    </div>
  )
}
