import { getMyAppointments } from "../../services/apiCalls"
import "./MyAppointments.css"
import DataTable from "react-data-table-component"


import React, { useEffect, useState } from 'react'

export const MyAppointments = () => {
  const columns = [
    {
      name: "Número de cita",
      selector: (row,index) => index+1,
      
    },
    {
      name: "Servicio contratado",
      selector: row => row.service?.serviceName

    },
    {
      name: "Fecha",
      selector: row => {
        const date = new Date(row.appointmentDate);
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
    }
  ]
  const [userAppointments, setUserAppointments] = useState([{}])

  useEffect(() => {
    const getUserAppointments = async () => {
      const MyAppointments = await getMyAppointments()
      console.table(MyAppointments.data)
      console.table(MyAppointments.data[0].service);
      setUserAppointments(
        MyAppointments.data
      )
    }
    getUserAppointments()
  }, [])





  return (
    <div className="myAppointmentsDesign">

      <DataTable
      title="Mis citas"
        columns={columns}
        data={userAppointments}
        selectableRows
        onSelectedRowsChange={data =>console.log(data)}
        log
      />


    </div>
  )
}
