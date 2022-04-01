import Data from './src/data/Data'
import { DEMO_DB } from './src/data/Demo'


test('getCurrentUser', () => {
    Data.getCurrentUser().then(user => expect(user).toBe(DEMO_DB.user))
})

test('getPosts for userId = 1', () => {
    return Data.getPosts(1).then(posts => expect(posts).toStrictEqual({data: DEMO_DB.posts}))
})

test('getPostById with postId = 1', () => {
    return Data.getPostById(1).then(post => expect(post).toStrictEqual({data: DEMO_DB.posts[0]}))
})