import http from "./http"

export const userLogin = async(data) => {
    console.log(data)
    const login = await http.post("/login", data)

    return login 
} 


export const userSignUp = async(data) => {
    
    const register = await http.post("/register", data)
    return register 
} 

