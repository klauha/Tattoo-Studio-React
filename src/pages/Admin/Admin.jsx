import React from 'react'
import "./Admin.css"
import { getUsers } from '../../services/apiCalls'
import DataTable from 'react-data-table-component'

export const Admin = () => {
  const columns = [
    // {
    //   name: "Nombre",
    //   selector: row =>row.user.first_name
    // },
    // // {
    // //   name: "Nombre",
    // //   selector: row =>row.user.first_name
    // // },
    // // {
    // //   name: "Nombre",
    // //   selector: row =>row.user.first_name
    // // }


  ]
  const [user, setUser] = useState([{}])
  useEffect(() => {
    const getUserByAdmin = async () => {
      const Users = await getUsers()
      setUser()
    }
    getUserByAdmin()
  }, [])

  return (
    <div className='adminDesign'>

      <DataTable
        title="Usuarios"
        columns={columns}
        data={users}
      />
    </div>
  )
}
