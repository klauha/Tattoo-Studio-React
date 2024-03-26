import { getMyAppointments } from "../../services/apiCalls"
import "./MyAppointments.css"

import React, { useEffect, useState } from 'react'

export const MyAppointments = () => {

  const [userAppointments, setUserAppointments] = useState([{}])  
  useEffect(() => {
    const getUserAppointments = async () => {
      const MyAppointments = await getMyAppointments()

      console.table(MyAppointments.data[0].service);
      setUserAppointments(

      )
    }
    getUserAppointments()
  }, [])





  return (
    <div className="myAppointmentsDesign">MyAppointments</div>
  )
}
