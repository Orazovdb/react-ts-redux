import { FetchUsersAction,UserActionTypes } from "../../types/user"

const setUsers = (data: any): FetchUsersAction => {
  return {
    type: UserActionTypes.SET_USERS,
    payload: data
  }
}

const exportDefault = {
  setUsers
}

export default exportDefault