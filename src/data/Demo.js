import { getDummyAvatar } from "../utils/Utils"

export const DEMO_DB = {
    posts: [
        {
            ID: 1,
            title: "Carpool to Rosemary Hill Observatory",
            description: "The Astronomy and Astrophysics Society of UF is conducting a visit to the Rosemary Hill Observatory. We'll be able to look at the stars and the planets using great telescopes and other visual aids. This is also a good time for astrophotographers as the sky is very dark over there. I have space for 3 more people, and we'll be splitting the gas, which I don't think would be more than $2 each. If interested, please respond to this post.",
            User: {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@example.com",
                avatar: getDummyAvatar()
            },
            participantNum: 3,
            CreatedAt: 1643936763000,
            ExpiresAt: 1658852455000
        },
        {
            ID: 2,
            title: "Trip to St Augustine",
            description: "I'm going to St Augustine on Sunday. The forecast is sunny and warm. I can carry 4 people in the car. Gas splits equally. Who wants to join?",
            User: {
                id: 2,
                firstName: "Benedict",
                lastName: "Cucumber",
                email: "benedict@example.com",
                avatar: getDummyAvatar()
            },
            participantNum: 2,
            CreatedAt: 1643936854000,
            ExpiresAt: 1658852455000
        },

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
        message: 'I am interested! Count me in.',
        timestamp: 1643938848000,
        user: {
            id: 1,
            firstName: "Paul",
            lastName: "Smith",
            email: "psmith@example.com",
            avatar: getDummyAvatar()
        }
    }],
    categories: [
        {
            id: 1,
            icon: 'https://i.postimg.cc/bwF2zTP3/carpool.png',
            name: 'Carpooling',
            selected: false
        },
        {
            id: 2,
            icon: 'https://i.postimg.cc/Dz9JGw8G/food.png',
            name: 'Groceries',
            selected: false
        },
        {
            id: 3,
            icon: 'https://i.postimg.cc/rp0RzrFc/taxi.png',
            name: 'Ride Sharing',
            selected: false
        },
        {
            id: 4,
            icon: 'https://i.postimg.cc/vBTq4XxT/gift.png',
            name: 'Giveaways',
            selected: false
        }
    ],
    popularUsers: [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            avatar: getDummyAvatar()
        },
        {
            id: 2,
            firstName: "Paul",
            lastName: "Smith",
            email: "psmith@example.com",
            avatar: getDummyAvatar()
        },
        {
            id: 3,
            firstName: "Lily",
            lastName: "Evans",
            email: "evansl@example.com",
            avatar: getDummyAvatar()
        },
        {
            id: 4,
            firstName: "Lacrosse",
            lastName: "Josh",
            email: "ljosh@example.com",
            avatar: getDummyAvatar()
        },
        {
            id: 5,
            firstName: "Martha",
            lastName: "Matercod",
            email: "mmader@example.com",
            avatar: getDummyAvatar()
        },
        {
            id: 6,
            firstName: "Samantha",
            lastName: "Joe",
            email: "sjoe@example.com",
            avatar: getDummyAvatar()
        },
        {
            id: 7,
            firstName: "Rhyder",
            lastName: "Rhodes",
            email: "rrhodes@example.com",
            avatar: getDummyAvatar()
        }

    ]
}


const data = {
    getPosts: (userId) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({data: DEMO_DB.posts})
        }, 100)
    }),
    getCurrentUser: () => new Promise((resolve, reject) => {
        resolve(DEMO_DB.user)
    }),
    getPostById: (id) => new Promise((resolve, reject) => {
        const filtered = DEMO_DB.posts.filter(post => post.ID === parseInt(id))
        setTimeout(() => {
            filtered.length > 0 ? resolve({data: filtered[0]}) : resolve(null)
        }, 100)
    }),
    createPost: (postData) => new Promise((resolve, reject) => {
        DEMO_DB.posts.push(postData)
        setTimeout(() => {
            resolve(true)
        }, 100)
    }),
    getCommentsOfPost: (postId) => new Promise((resolve, reject) => {
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