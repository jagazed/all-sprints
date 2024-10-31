export type AuthorType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    text: string
    likes: number
    author: AuthorType
}

export const api = {
    getPost(): Promise<PostType[]> {
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
                    }
                ])
            }, 2000)
        })
    },
    updatePost(postId: number, text: string) {
        return Promise.resolve({})
    }
}