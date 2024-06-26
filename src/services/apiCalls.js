
const apiUrl = "http://localhost:4000"


export const register = async (bodyCredentials) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyCredentials),
            }
        )
        const data = await response.json()

        return data

    } catch (error) {
        return error
    }
}

export const login = async (bodyCredentials) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/auth/login`,
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyCredentials),
            }
        )
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}

export const getProfile = async () => {
    try {
        const response = await fetch(
            `${apiUrl}/api/users/profile`,
            {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await response.json()

        return data
    } catch (error) {
        return error
    }
}

export const editProfile = async (bodyDataToUpdate) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/users/profile`,
            {
                method: "Put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(bodyDataToUpdate),
            }
        )

        const data = await response.json()

        return data
    } catch (error) {
        console.log(error); error

    }
}
export const getMyAppointments = async () => {
    try {
        const response = await fetch(
            `${apiUrl}/api/appointments`,
            {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}
export const createAppointments = async (bodyDataAppointment) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/appointments`,
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify(bodyDataAppointment)
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }

}
export const getServices = async () => {
    try {
        const response = await fetch(
            `${apiUrl}/api/services`,
            {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",

                }
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}
export const getUsers = async () => {
    try {
        const response = await fetch(
            `${apiUrl}/api/users/`,
            {
                method: "Get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export const deleteUserbyAdmin = async (id)=> {
    try {
        const response = await fetch(
            `${apiUrl}/api/users/${id}`,
            {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}
export const deleteAppoinmentById= async (id)=>{
    try {
        const response = await fetch(
            `${apiUrl}/api/appointments/${id}`,
            {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }
        )
        const data = await response.json()
        return data

    } catch (error) {
        return error
    }
}