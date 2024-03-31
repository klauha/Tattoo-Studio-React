import { Cards } from "../../common/Cards/Cards"
import { getServices } from "../../services/apiCalls"
import "./ListServices.css"
import React, { useEffect, useState } from 'react'




export const ListServices = () => {

    const [services, setServices] = useState([{}])
    useEffect(() => {
        const fecthServices = async () => {
            const servicesFetched = await getServices()
            setServices(servicesFetched.data)
        }
        fecthServices()
    }, [])


    return (
        <div className="container-services">
            {
                services.map(service => (
                    <>
                        <Cards key={service.id} service={service} />
                    </>
                ))
            }
        </div>
    )
}

