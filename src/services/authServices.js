import http from "./http"

export const userLogin = async(data) => {

    const login = await http.post("/login", data)

    localStorage.setItem("AUTH_TOKEN", login.data.data.token)
    localStorage.setItem("USER_EMAIL", login.data.data.email)

    return login.data
} 


export const userSignUp = async(data) => {
    
    const register = await http.post("/register", data)
    localStorage.setItem("AUTH_TOKEN", register.data.data.token)
    localStorage.setItem("USER_EMAIL", register.data.data.email)


    return register.data 
} 

