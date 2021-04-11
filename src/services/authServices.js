import http from "./http"

export const userLogin = async(data) => {

    const login = await http.post("/login", data)
    return login.data 
} 


export const userSignUp = async(data) => {
    
    const register = await http.post("/register", data)
    return register.data 
} 

