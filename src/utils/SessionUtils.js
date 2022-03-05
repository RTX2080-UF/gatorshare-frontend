const KEYS = {
    user: 'user',
    accessToken: 'accessToken'
}

export const isLoggedIn = () => {
    return getCurrentUser() != null && getAccessToken() != null
}

export const logOutUser = () => {
    if (isLoggedIn()) {
        localStorage.removeItem(KEYS.user)
    }
}

export const setUser = (userData) => {
    localStorage.setItem(KEYS.user, userData)
}

export const getCurrentUser = () => {
    return localStorage.getItem(KEYS.user)
}

export const setAccessToken = (accessToken) => {
    localStorage.setItem(KEYS.accessToken, accessToken)
}

export const getAccessToken = () => {
    return localStorage.getItem(KEYS.accessToken)
}