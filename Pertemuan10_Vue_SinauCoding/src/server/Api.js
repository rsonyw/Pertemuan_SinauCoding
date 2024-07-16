import axios from 'axios'

const apiPost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const apiAuthor = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
})

export default { apiPost, apiAuthor }