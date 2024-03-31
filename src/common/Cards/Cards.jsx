import React from 'react'
import "./Cards.css"

export const Cards = ({ service }) => {
  return (
    <>
      <div className='card'>
        <h1>{service.serviceName}</h1>
        <img src={service.urlImg} alt={service.serviceName} />
        <p> {service.description}</p>
      </div>
    </>


  )
}
