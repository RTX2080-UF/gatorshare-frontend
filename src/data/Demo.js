import { getDummyAvatar } from "../utils/Utils"

const DEMO_DB = {
    posts: [
        {
            id: 1,
            title: "A sample post for the demo",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.",
            user: {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@example.com",
                avatar: getDummyAvatar()
            },
            participants: [],
            timestamp: 1643936763000
        }
    ],
    user: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        avatar: getDummyAvatar()
    },
    comments: [{
        id: 1,
        postId: 1,
        message: 'This is a test comment!',
        timestamp: 1643938848000,
        user: {
            id: 1,
            firstName: "Paul",
            lastName: "Smith",
            email: "psmith@example.com",
            avatar: getDummyAvatar()
        }
    }]
}


const data = {
    getPosts: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DEMO_DB.posts)
        }, 100)
    }),
    getCurrentUser: () => {
        return DEMO_DB.user
    },
    getPostById: (id) => new Promise((resolve, reject) => {
        const filtered = DEMO_DB.posts.filter(post => post.id === parseInt(id))
        setTimeout(() => {
            filtered.length > 0 ? resolve(filtered[0]) : resolve(null)
        }, 100)
    }),
    createPost: (postData) => new Promise((resolve, reject) => {
        DEMO_DB.posts.push(postData)
        setTimeout(() => {
            resolve(true)
        }, 100)
    }),
    getComments: (postId) => new Promise((resolve, reject) => {
        const filtered = DEMO_DB.comments.filter(comment => comment.postId === parseInt(postId))
        setTimeout(() => {
            resolve(filtered)
        }, 100)
    }),
    createComment: (commentData) => new Promise((resolve, reject) => {
        commentData.user = {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "jdoe@example.com",
            avatar: getDummyAvatar()
        }
        commentData.timestamp = Date.now()
        commentData.id = parseInt(Math.random() * 100)

        DEMO_DB.comments.push(commentData)

        setTimeout(() => {
            resolve(commentData)
        }, 100)
    })
}

export default data