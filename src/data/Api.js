import { DEMO_DB } from "./Demo"

const SERVER_URL = 'https://gatorshare.herokuapp.com'

const VERSION = '/v1'

const ENDPOINTS = {
    getAllPostsOfUser: (userId) => `/posts/getAll/${userId}`,
    createPost: () => '/posts/create',
    getCommentsOfPost: (postId) => `/comments/getAll/${postId}`,
    createComment: () => '/comments/create',
    login: () => '/users/login',
    register: () => '/users/register',
    getPostById: (postId) => `/posts/getOne/${postId}`
}

const getRequest = (url, resolve, reject) => {
    fetch(url).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            reject({ code: response.status, msg: 'Error occurred' })
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const postRequest = (url, data, resolve, reject) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            reject({ code: response.status, msg: 'Error occurred' })
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const data = {
    getPosts: (userId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getAllPostsOfUser(userId)}`
        getRequest(url, resolve, reject)
    }),

    getPostById: (postId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getPostById(postId)}`
        getRequest(url, resolve, reject)
    }), 

    createPost: (postData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.createPost()}`
        postRequest(url, postData, resolve, reject)
    }),

    getCommentsOfPost: (postId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getCommentsOfPost(postId)}`
        getRequest(url, resolve, reject)
    }),

    createComment: (commentData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.createComment()}`
        postRequest(url, commentData, resolve, reject)
    }),

    login: (loginData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.login()}`
        postRequest(url, loginData, resolve, reject)
    }),

    register: (signupData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.register()}`
        postRequest(url, signupData, resolve, reject)
    }),

    getCurrentUser: () => {
        return DEMO_DB.user
    },

    getAllCategories: () => new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(DEMO_DB.categories)
        }, 500);
    }),

    getPopularUsers: () => new Promise((resolve, reject) => {
        setInterval(() => {
            resolve(DEMO_DB.popularUsers)
        }, 500);
    }),
}

export default data