import axios from "axios"

export const GetUsers = async () => {
    return (await axios.get('https://jsonplaceholder.typicode.com/users')).data
}