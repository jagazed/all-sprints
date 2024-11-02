export type AuthorApiType = {
    id: number
    name: string
}

export type PostApiType = {
    id: number
    text: string
    likes: number
    author: AuthorApiType
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
                        }
                    },
                    {
                        id: 2,
                        text: "I like React",
                        likes: 1002,
                        author: {
                            id: 2,
                            name: 'Valera'
                        }
                    },
                    {
                        id: 3,
                        text: "I like Angular",
                        likes: 99,
                        author: {
                            id: 1,
                            name: 'Dimych'
                        }
                    }
                ])
            }, 2000)
        })
    },
    updatePost(postId: number, text: string) {
        return Promise.resolve({})
    }
}