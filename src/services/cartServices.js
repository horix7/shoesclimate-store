import http from "./http"

export const createCart = async(data) => {
    const cart = await http.post("/api/v1/cart/add", data)

    return cart 
} 


export const UpdateCart = async(id) => {
    
    const updatedCart = await http.post(`/api/v1/cart/${id}`, data)
    return updatedCart 
} 

export const getUserCart = async(data) => {

    const userOrders = await http.get("/api/v1/cart")
    return userOrders.data 
}

