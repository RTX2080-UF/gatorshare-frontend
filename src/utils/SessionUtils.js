const KEYS = {
    user: 'user',
    accessToken: 'accessToken'
}

export const isLoggedIn = () => {
    return getCurrentUser() !== null && getAccessToken() !== null
}


export const logOutUser = () => {
    if (isLoggedIn()) {
        clearAccessToken()
        clearUser()
    }
}

export const setUser = (userData) => {
    localStorage.setItem(KEYS.user, JSON.stringify(userData))
}

export const clearUser = () => {
    localStorage.removeItem(KEYS.user)
}

export const getCurrentUser = () => {
    return localStorage.getItem(KEYS.user) ? JSON.parse(localStorage.getItem(KEYS.user)) : null
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(KEYS.accessToken, accessToken)
}

export const clearAccessToken = () => {
    localStorage.removeItem(KEYS.accessToken)
}
 
export const getAccessToken = () => {
    return localStorage.getItem(KEYS.accessToken) ? localStorage.getItem(KEYS.accessToken) : null
}