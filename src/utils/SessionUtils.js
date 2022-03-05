const KEYS = {
    user: 'user',
    accessToken: 'accessToken'
}

export const isLoggedIn = () => {
    return getCurrentUser() !== null && getCurrentUser() !== undefined
        && getAccessToken() !== null && getAccessToken !== undefined
}

export const logOutUser = () => {
    if (isLoggedIn()) {
        localStorage.removeItem(KEYS.user)
        localStorage.removeItem(KEYS.accessToken)
    }
}

export const setUser = (userData) => {
    localStorage.setItem(KEYS.user, userData)
}

export const clearUser = () => {
    localStorage.removeItem(KEYS.user)
}

export const getCurrentUser = () => {
    return localStorage.getItem(KEYS.user)
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(KEYS.accessToken, accessToken)
}

export const clearAccessToken = () => {
    localStorage.removeItem(KEYS.accessToken)
}
 
export const getAccessToken = () => {
    return localStorage.getItem(KEYS.accessToken)
}