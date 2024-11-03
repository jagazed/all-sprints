export type AuthorApiType = {
    id: number
    name: string
}

export type CommentApiType = {
    id: number
    text: string
    author: AuthorApiType
}

export type PostApiType = {
    id: number
    text: string
    likes: number
    author: AuthorApiType,
    lastComments: CommentApiType[]
}

export const api = {
    getPost(): Promise<PostApiType[]> {
        return new Promise((res) => {
            setTimeout(() => {
                res([
                    {
                        id: 1,
                        text: "Hello",
                        likes: 10,
                        author: {
                            id: 1,
                            name: 'Dimych'
                        },
                        lastComments: [
                            {id: 998, text: 'Cool', author: {id:3, name: 'Sveta'}},
                            {id: 997, text: 'Very Cool', author: {id:3, name: 'Sveta'}}
                        ]
                    },
                    {
                        id: 2,
                        text: "I like React",
                        likes: 1002,
                        author: {
                            id: 2,
                            name: 'Valera'
                        },
                        lastComments: []
                    },
                    {
                        id: 3,
                        text: "I like Angular",
                        likes: 99,
                        author: {
                            id: 1,
                            name: 'Dimych'
                        },
                        lastComments: [
                            {id: 829, text: 'Yeap', author: {id:1, name: 'Dimych'}},
                            {id: 828, text: 'Really?', author: {id:2, name: 'Valera'}},

                        ]
                    }
                ])
            }, 2000)
        })
    },
    getComments(postId: number) {
        return Promise.resolve([
            {id: 829, text: 'Yeap', author: {id:1, name: 'Dimych'}},
            {id: 828, text: 'Really?', author: {id:2, name: 'Valera'}},
            {id: 827, text: 'Bullshit', author: {id:3, name: 'Sveta'}},
            {id: 826, text: 'Hey? where comments?', author: {id:1, name: 'Dimych'}},
        ])
    },
    updatePost(postId: number, text: string) {
        return Promise.resolve({})
    },
    deleteComment(postId: number, commentId: number) {
        return Promise.resolve({})
    },
    updateAuthorName(authorId: number, text: string) {
        return Promise.resolve({})
    },
    deletePost(postId: number) {
        return Promise.resolve({})
    }
}