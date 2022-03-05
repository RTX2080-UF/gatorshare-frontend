const KEYS = {
    user: 'user'
}
const SessionUtils = () => {
    const isLoggedIn = () => {
        return getCurrentUser != null
    }

    const logOutUser = () => {
        if (isLoggedIn) {
            localStorage.removeItem(KEYS.user)
        }
    }

    const setUser = (userData) => {
        localStorage.setItem(KEYS.user, userData)
    }

    const getCurrentUser = () => {
        return localStorage.getItem(KEYS.user)
    }

    const setAccessToken = (accessToken) => {
        const user = getCurrentUser()
        user.accessToken = accessToken
        setUser(user)
    }

    const getAccessToken = () => {
        return getCurrentUser().accessToken
    }
}

export default SessionUtils