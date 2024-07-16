import axios from 'axios'

const api = axios.create({
    baseURL: 'https://gorest.co.in/public/v2/users',

    headers: {
        'Authorization': 'Bearer 9690fb8196780608aa1199cadbf3901b8d6679995f2667a259a1f07fb7617cd'
    }

})

export default api