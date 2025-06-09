import axios from "axios"

const authService = {
    authLogin: async (email, password) => {
        return await axios.post(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/login`,
            { email, password }
        )
    },
    checkLogin: async (token) => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/me/${token}`
        )
    },
    logout: async (token) => {
        return await axios.get(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/logout/${token}`
        )
    },
    updateUserWishList: async (userId, item) =>{
        return await axios.put(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/wishlist/${userId}`,
            item,
            { headers: { "Content-Type": "application/json" } }
        )
    },
    updateUserCart: async (userId, item) =>{
        return await axios.put(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users/cart/${userId}`,
            item,
            { headers: { "Content-Type": "application/json" } }
        )
    },
    addUser: async (
        firstName,
        lastName,
        username,
        email,
        password,
        token,
        role,
        avatar,
        contactNumber,
        cart,
        wishList
    ) => {
        return axios.post(
            `${import.meta.env.VITE_NODE_SERVER_URL}/users`,
            { 
                firstName,
                lastName,
                username,
                email,
                password,
                token,
                role,
                avatar,
                contactNumber,
                cart,
                wishList
            },
            { headers: { "Content-Type": "application/json" } }
        )

    }

}

export default authService