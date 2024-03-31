import React, { useState, useEffect } from 'react'
import "./CreateAppointment.css"
import { createAppointments, getServices } from '../../services/apiCalls'
import { Input } from '../../common/Input/input'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../common/Header/Header'

export const CreateAppointment = () => {

  const [bodyDataAppointment, setBodyDataAppointment] = useState(
    {
      serviceId: 3,
      appointmentDate: "2024-03-05"
    }
  )
  const [services, setServices] = useState([])

  const navigate = useNavigate()


  const postAppointment = async () => {
    const result = await createAppointments(bodyDataAppointment)
    navigate("/my-appointments")

  }

  useEffect(() => {
    const fetchServicesAppointments = async () => {
      const services = await getServices()
      console.log(services);
      setServices(services.data)
    }
    fetchServicesAppointments()
  }, [])


  const inputHandler = (e) => {
    setBodyDataAppointment((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  const inputDateHandler = (e) => {
    setBodyDataAppointment((prevState) => (
      {
        ...prevState,
        "appointmentDate": e.target.value
      }
    ))
  }


  return (
    <>
    <Header />
    <div className='createAppoinmentDesign'>
    
      <div className="formCreateAppointment">
        <h1>Crear cita</h1>
      <select className='inputForm' name="serviceId" onChange={inputHandler}>
        <option value="0">Selecciona un servicio</option>
        <option value="1">Tatuajes</option>
        <option value="2">Restauración de tatuajes</option>
        <option value="3">Tapado de tatto</option>
        <option value="4">Piercings</option>
        <option value="5">Laser Tatoo</option>
      </select>

      <input className='inputForm' name="appointmentDate" onChange={inputDateHandler} type="date" />

      <button className='inputForm' onClick={postAppointment}>Enviar</button>
        
      </div>

      <div className="imgCreateAppointment">  </div>
    </div>
    </>
  )
}
