export const getBlogs = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json()
        })
}

