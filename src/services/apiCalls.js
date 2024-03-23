

export const login = async (bodyCredentials) => {
    try {
        const response = await fetch(
            'http://localhost:4000/api/auth/login',
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyCredentials),
            }
        )
        const data = await response.json

        return data
    } catch (error) {
        return error
    }
}

