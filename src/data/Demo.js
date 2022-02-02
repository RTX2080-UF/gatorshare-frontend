const data = {
    getPosts: new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                // Will include demo posts, to be filled later
            ])
        }, 300);
    })
}

export default data