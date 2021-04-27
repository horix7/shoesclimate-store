import http from './http'


export const getProductData = async () => {

    const products = await http.get("/api/v1/products")
    return products.data

}

export const getUserReferalInfo = async (email) => {

    const products = await http.get("/api/v1/referal/" + email)
    return products.data

}


export const getProductDataShop = async () => {

    const products = await http.get("/api/v1/shop")
    return products.data

}


export const getProductDataByCollection = async (collection) => {

    const products = await http.get("/api/v1/products/collection/" + collection)
    return products.data

}


export const getProductDataByCollectionHome = async () => {

    const products = await http.get("/api/v1/products/home")
    
    return products.data

}



export const searchProducts = async (search) => {

    const products = await http.get("/api/v1/product/search?q=" + search)
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
    return order.data
}


export const createCartService = async(cart) => {

    const createCart = await http.post("/api/v1/cart", cart)
    return createCart
}

export const Oneproductservice  = async (id) => {
    const product = await http.get(`/api/v1/products/${id}`)
    return product.data
    
}

