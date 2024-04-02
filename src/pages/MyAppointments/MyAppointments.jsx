import { deleteAppoinmentById, getMyAppointments } from "../../services/apiCalls"
import "./MyAppointments.css"
import DataTable, {createTheme} from "react-data-table-component"
import React, { useEffect, useState } from 'react'
import { Header } from "../../common/Header/Header"
import { Button } from "../../common/Button/Button"



export const MyAppointments = () => {
  const [userAppointments, setUserAppointments] = useState([{}])
  const [appointmentSelected, setAppoinmentSelected] = useState([])

  createTheme(
    'klauha',
    {
      background: {
        default: 'transparent',
      },
      text: {
        primary: 'black',
      },
    },
    'dark',
  )

  const columns = [
    {
      name: "Número de cita",
      selector: (row, index) => index + 1,
    },
    {
      name: "Servicio contratado",
      selector: row => row.service?.serviceName
    },
    {
      name: "Fecha",
      selector: row => {
        const date = new Date(row.appointmentDate);
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric',  hour: '2-digit', minute: '2-digit', })
      }
    }
  ]

 // Efecto para obtener las citas del usuario cuando el componente se monta
  useEffect(() => {
    const getUserAppointments = async () => {
      const MyAppointments = await getMyAppointments()

      setUserAppointments(
        MyAppointments.data
      )
    }
    getUserAppointments()
  }, [])
// Función para manejar cambios en las filas seleccionadas
  const handleRowChange = ({ selectedRows }) => {
    console.log(selectedRows);
    setAppoinmentSelected(selectedRows)
  }
// Función para eliminar una cita seleccionada
  const deleteAppointment = async () => {
    try {
      const appointmentToDeleteSelected = appointmentSelected[0].id
      const appointmentToDelete = await deleteAppoinmentById(appointmentToDeleteSelected)
      const updateTableAppoinments = await getMyAppointments()
      setUserAppointments(updateTableAppoinments.data)
    } catch (error) {
      console.log();
    }

  }

  return (
    
    <>
    <Header />
    <div className="myAppointmentsDesign">
      <div className="tableAppointments">
        <div className="tableAppo">
          <DataTable
            theme="klauha"
            className="Myappintmentstable"
            title="Mis citas"
            columns={columns}
            data={userAppointments}
            onSelectedRowsChange={handleRowChange}
            selectableRows
            selectableRowsSingle
            pagination
            paginationPerPage={5}
            fixedHeader
          />
        </div>
        <div className="btn-container">
        <Button
         title={"Eliminar cita"}
        className="ButtonDesign"
        onClick={deleteAppointment}
        />
        </div>
      </div>
      <div className="imgMyappointment"></div>
    </div>
  </>
)
  }