import { DEMO_DB } from './src/data/Demo';
import {clearAccessToken, clearUser, getAccessToken, getCurrentUser, isLoggedIn, logOutUser, setAccessToken, setUser} from './src/utils/SessionUtils';

// Mocks the Local Storage as Jest runs outside the Browser DOM 
// and hence the original Local Storage is not available.
class LocalStorageMock {
    constructor() {
        this.store = {}
    }

    clear() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key] || null
    }

    setItem(key, value) {
        this.store[key] = String(value)
    }

    removeItem(key) {
        delete this.store[key]
    }
}

beforeEach(() => {
    global.localStorage = new LocalStorageMock
})

afterEach(() =>{
    global.localStorage = undefined
})

// TESTS FROM HEREON

test('isLoggedIn returns false when no user is logged in', () => {
    // Removing any user data
    clearUser()
    clearAccessToken()

    expect(isLoggedIn()).toBe(false)
})

test('isLoggedIn returns true when there is a user data available and access token is set', () => {
    // Setting some mock user data
    setUser(DEMO_DB.user)
    setAccessToken('dummyAccessToken')

    expect(isLoggedIn()).toBe(true)
})

test('isLoggedIn returns true when logout is called', () => {
    // Setting some mock user data
    setUser(DEMO_DB.user)
    setAccessToken('dummyAccessToken')

    logOutUser()

    expect(isLoggedIn()).toBe(false)
})

test('Get User returns the correct user', () => {
    // Setting some mock user data
    setUser(DEMO_DB.user)
    expect(getCurrentUser() === DEMO_DB.user)
})

test('Get Access Token return the correct access token', () => {
    setAccessToken('dummyAccessToken')
    expect(getAccessToken() === 'dummyAccessToken')
})

test('isLoggedIn returns false if either of user or accesstoken are missing', () => {
    clearAccessToken()
    setUser(DEMO_DB.user)

    expect(isLoggedIn()).toBe(false)
})

