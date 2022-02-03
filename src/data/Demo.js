const data = {
    getPosts: new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                // Will include demo posts, to be filled later
            ])
        }, 300);
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
    }
}

export default data