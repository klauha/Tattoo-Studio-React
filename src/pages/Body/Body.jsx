import { Routes, Route } from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { Register } from "../Register/Register"
import { Artists } from "../Artists/Artists"
import { PrivateHome } from "../PrivateHome/PrivateHome"
import { Profile } from "../Profile/Profile"
import { MyAppointments } from "../MyAppointments/MyAppointments"
import { CreateAppointment } from "../CreateAppointment/CreateAppointment"
import { ListServices } from "../ListServices/ListServices"

export const Body = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/artists" element={<Artists />} />  
            <Route path="/my-appointments" element={<MyAppointments />} /> 
            <Route path="/create-appointment" element={<CreateAppointment />} /> 
            <Route path="/services" element={<ListServices />} />             
        </Routes>
    )
}