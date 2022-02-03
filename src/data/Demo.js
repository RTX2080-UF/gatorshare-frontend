const data = {
    getPosts: new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Hello, sample post',
                    desc: 'This is a sample post to test out whether the posts are being shown correctly or not',
                    user: {
                        firstName: 'John',
                        lastName: 'Doe',
                        avatar: 'https://i.pravatar.cc/300'
                    },
                    participants: [{
                        firstName: 'Jane',
                        lastName: 'Doe'
                    }],
                    comments: [],
                    timestamp: 1643847237000
                },
                {
                    title: 'Hello, sample post 2',
                    desc: 'This is a sample post 2 to test out whether the posts are being shown correctly or not',
                    user: {
                        firstName: 'John',
                        lastName: 'Doe',
                        avatar: 'https://i.pravatar.cc/300'
                    },
                    participants: [{
                        firstName: 'Jane',
                        lastName: 'Doe'
                    }],
                    comments: [],
                    timestamp: 1643842731000
                },
                {
                    title: 'Hello, sample post 3',
                    desc: 'This is a sample post 3 to test out whether the posts are being shown correctly or not',
                    user: {
                        firstName: 'John',
                        lastName: 'Doe',
                        avatar: 'https://i.pravatar.cc/300'
                    },
                    participants: [{
                        firstName: 'Jane',
                        lastName: 'Doe'
                    }],
                    comments: [],
                    timestamp: 1643842731000
                },
                {
                    title: 'Hello, sample post 4',
                    desc: 'This is a sample post 4 to test out whether the posts are being shown correctly or not',
                    user: {
                        firstName: 'John',
                        lastName: 'Doe',
                        avatar: 'https://i.pravatar.cc/300'
                    },
                    participants: [{
                        firstName: 'Jane',
                        lastName: 'Doe'
                    }],
                    comments: [],
                    timestamp: 1643842731000
                }
            ])
        }, 100);
    }),

    getDummyPost: {
        title: 'Hello, sample post',
        desc: 'This is a sample post to test out whether the posts are being shown correctly or not',
        user: {
            firstName: 'John',
            lastName: 'Doe',
            avatar: 'https://i.pravatar.cc/300'
        },
        participants: [{
            firstName: 'Jane',
            lastName: 'Doe'
        }],
        comments: [],
        timestamp: 1643847237000
    },
    getDummyUser: {
        firstName: 'Moser',
        lastName: 'Baer',
        avatar: 'https://i.pravatar.cc/300'
    }
}

export default data