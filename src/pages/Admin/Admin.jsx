import React, { useEffect, useState } from 'react'
import "./Admin.css"
import { deleteUserbyAdmin, getUsers } from '../../services/apiCalls'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom'

export const Admin = () => {
  const [usersData, setUsersData] = useState([{}])
  const [usersSelected, setUsersSelected] = useState([])
  const columns = [
    {
      name: "Nombre",
      selector: row => row.first_name
    },
    {
      name: "Apellidos",
      selector: row => row.last_name
    },
    {
      name: "email",
      selector: row => row.email
    },
    {
      name: "Fecha de creación",
      selector: row => {
        const date = new Date(row.createdAt)
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
      }
    }
  ]
  useEffect(() => {
    const getUserByAdmin = async () => {
      const users = await getUsers()
      console.log(users.data);
      setUsersData(users.data)
    }
    getUserByAdmin()
  }, [])

  const handleRowChange = ({ selectedRows }) => {
    console.log(selectedRows);
    setUsersSelected(selectedRows)
  }
  const deleteUser= async ()=> {
    try {
      const userToDelteSelected =usersSelected[0].id
      const userToDelete =await deleteUserbyAdmin(userToDelteSelected)

      const updateTableUsers = await getUsers()

      setUsersData(updateTableUsers.data)
    } catch (error) {
      console.log(error);
    }
   
  }

  return (
    <div className='adminDesign'>

      <div className="tableUser">
        <DataTable
          className='table'
          title="Usuarios"
          columns={columns}
          data={usersData}
          // onSelectedRowsChange={dataSelected => setUsersSelected(dataSelected.selectedRows)}
          onSelectedRowsChange={handleRowChange}
          selectableRows
          selectableRowsSingle
          pagination
          paginationPerPage={5}
          fixedHeader
        />
        <button onClick={deleteUser}>Eliminar usuario</button>
      </div>

      {/* <button onClick={deleteUser}>Eliminar usuario</button> */}
    </div>
  )
}
