import { Cards } from "../../common/Cards/Cards"
import { getServices } from "../../services/apiCalls"
import "./ListServices.css"
import React, { useEffect,useState } from 'react'




export const ListServices = () => {

    const [services, setServices] = useState([{}])
    useEffect(()=>{
        const fecthServices = async ()=> {
            const services = await getServices ()
            setServices(services.data)
            console.log(services);
        }
        fecthServices()
    }, [])


    return (
        <div className="listServices">
            <Cards services={services} />
        
        </div>
    )
}
