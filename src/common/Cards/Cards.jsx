import React from 'react'

export const Cards = ({services}) => {
  return (
    <div className='serviceCard'>
      {
        services.map( service => (
          <div>
            <h2>{service.serviceName}</h2>
            <p> {service.description}</p>
            <div>{service.urlImg}</div>
          </div>
        ))
      }
    </div>

    
  )
}
