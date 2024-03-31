import { Cards } from "../../common/Cards/Cards"
import { Header } from "../../common/Header/Header"
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
        <>
            <Header />
            <div className="listServices">
                <div className="container-services">
                    {
                        services.map(service => (
                            <>
                                <Cards key={service.id} service={service} />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

