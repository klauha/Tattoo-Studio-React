import React from 'react'
import "./Home.css"
import { Header } from '../../common/Header/Header'

export const Home = () => {
  return (
    <>
    <Header/>
    <div className='homeDesign'>
      <div className="conatinerImg">
        <img className='img-logo' src="../../../img/logo-2018.jpg" alt="" />
      </div>

    </div>
    </>
  )
}
