import axios from "axios"
import UserAction from '../action-creators/user'

// export const fetchUsers =async  (dispatch: Function) => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//         if(response)
//             dispatch(UserAction.setUsers(response))
//         console.log('no repsonse found')
//         return 
//     } catch (error) {
//         console.log("error", error)
//         return error
//     }
// }
