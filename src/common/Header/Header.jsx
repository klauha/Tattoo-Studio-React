import React from 'react'
import "./Header.css"
import { CustomLink } from '../CustomLink/CustomLink'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


export const Header = () => {
  const navigate = useNavigate()

  const [token, setToken] = useState(localStorage.getItem('token'))

  const handleLogout = () => {
    // Eliminamos el token del localStorage y actualizamos el estado local
    localStorage.removeItem("token")
    setToken(null)
    navigate("/login")
  }

  return (
    <>
      {
        token ? (<div className='headerDesign'>
          <CustomLink
            title={"Home"}
            path={"/home"}
          />
          <CustomLink
            title={"Services"}
            path={"/services"}
          />
          <CustomLink
            title={"Profile"}
            path={"/profile"}
          />
          <div className="header-logout" onClick={handleLogout}>
            Log Out
          </div>
        </div>

        ) : (
          <div className='headerDesign'>
            <CustomLink
              title={"Home"}
              path={"/"}
            />
            <CustomLink
              title={"Registro"}
              path={"/register"}

            />
            <CustomLink
              title={"Login"}
              path={"/login"}
            />
          </div>
        )}
    </>
  )
}

