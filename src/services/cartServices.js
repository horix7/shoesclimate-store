import http from "./http"

export const createCart = async(data) => {
    const cart = await http.post("/api/v1/cart/add", data)

    return cart.data.data
} 


export const removeCart = async(id) => {
    
    const cart = await http.delete("/api/v1/cart/removeitem/" +  id)
    return cart.data.data
} 


export const UpdateCart = async(id) => {
    
    const updatedCart = await http.post(`/api/v1/cart/${id}`, data)
    return updatedCart 
} 

export const getUserCart = async() => {

    const userOrders = await http.get("/api/v1/cart")
    return userOrders.data.data
}

