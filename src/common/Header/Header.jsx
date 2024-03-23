import React from 'react'
import "./Header.css"
import { CustomLink } from '../CustomLink/CustomLink'

export const Header = () => {
  return (
    <div className='headerDesign'>
        <CustomLink
        title= {"Home"}
        path= {"/"}
        hideIfActive={true}
        />
        <CustomLink
        title= {"Registro"}
        path= {"/register"}
        hideIfActive={true}

        />
        <CustomLink
        title= {"Login"}
        path= {"/login"}
        hideIfActive={true}

        />
    </div>
  )
}
