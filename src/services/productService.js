import http from './http'


export const getProductData = async () => {

    const products = await http.get("/api/v1/products")
    return products.data

}

export const getUserCart = async () => {

    const cart = await http.get("/api/v1/cart")
    return cart
    
}

export const getUserOrders = async () => {

    const orders = await http.get("/api/v1/orders")
    return orders.data
    
}

export const createOrder = async(newOrder) => {

    const order = await http.post("/api/v1/orders", newOrder)
    return order
}


export const createCartService = async(cart) => {

    const createCart = await http.post("/api/v1/cart", cart)
    return createCart
}

export const Oneproductservice  = async (id) => {
    const product = await http.get(`/api/v1/products/${id}`)
    return product.data
    
}

