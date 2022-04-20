import { DEMO_DB } from "./Demo"
import * as sessionUtils from "../utils/SessionUtils"

const SERVER_URL = 'https://gatorshare.herokuapp.com'

const VERSION = '/v1'

const ENDPOINTS = {
    getAllPostsOfUser: () => `/posts/getAll`,
    createPost: () => '/posts/create',
    getCommentsOfPost: (postId) => `/comments/getAll/${postId}`,
    createComment: () => '/comments/create',
    getCommentById: (commentId) => `/comments/getOne/${commentId}`,
    deleteComment: (commentId) => `/comments/delete/${commentId}`,
    login: () => '/users/login',
    register: () => '/users/register',
    followTagsOnboarding: () => '/tags/selectTags',
    getPostById: (postId) => `/posts/getOne/${postId}`,
    updateProfile: () => '/users/updateProfile',
    getForYouPosts: () => '/home/user',
    getLatestPosts: () => '/home/latest?page=1&page_size=25',
    getPopularTags: () => '/tags/popularTags'
}

const getRequest = (url, resolve, reject) => {
    fetch(url, {
        headers: {
            'Authorization': `Bearer ${sessionUtils.getAccessToken()}`
        }
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            if(response.status === 403) {
                window.location.href = '/login'
                reject({ code: response.status, msg: 'Error occurred' })
            } else {
                reject({ code: response.status, msg: 'Error occurred' })
            }
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const postRequest = (url, data, resolve, reject) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionUtils.getAccessToken()}`
        },
        method: 'POST',
        body: data
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            if(response.status === 403) {
                window.location.href = '/login'
                reject({ code: response.status, msg: 'Error occurred' })
            } else {
                reject({ code: response.status, msg: 'Error occurred' })
            }
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const patchRequest = (url, data, resolve, reject) => {
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionUtils.getAccessToken()}`
        },
        method: 'PATCH',
        body: data
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) {
            response.json().then(result => {
                resolve(result)
            })
        } else {
            if(response.status === 403) {
                window.location.href = '/login'
                reject({ code: response.status, msg: 'Error occurred' })
            } else {
                reject({ code: response.status, msg: 'Error occurred' })
            }
        }
    }).catch(error => reject({ code: 999, msg: 'Unknown error occurred' }))
}

const data = {
    getPosts: () => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getAllPostsOfUser()}`
        getRequest(url, resolve, reject)
    }),

    getPostById: (postId) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getPostById(postId)}`
        getRequest(url, resolve, reject)
    }), 

    createPost: (postData) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.createPost()}`
        // console.log("create post - ", postData);
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

    getCurrentUser: () => new Promise((resolve, reject) => {
        resolve(sessionUtils.getCurrentUser())
    }),

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

    followTagsOnboarding: (tags) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.followTagsOnboarding()}`
        postRequest(url, JSON.stringify(tags), resolve, reject)
    }),

    getPopularTags: () => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getPopularTags()}/10`
        getRequest(url,  resolve, reject)
    }),

    updateProfile: (profileDetails) => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.updateProfile()}`
        patchRequest(url, profileDetails, resolve, reject)
    }),

    getForYouPosts: () => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getForYouPosts()}`
        getRequest(url, resolve, reject)
    }),

    getLatestPosts: () => new Promise((resolve, reject) => {
        const url = `${SERVER_URL}${VERSION}${ENDPOINTS.getLatestPosts()}`
        getRequest(url, resolve, reject)
    }),
}

export default data