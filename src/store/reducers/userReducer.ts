import { UserAction, UserActionTypes, UserState } from '../../types/user'

const initialState: UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USERS:
      return {
        ...state, 
        users: action.payload
      }
    case UserActionTypes.USERS_LOADING:
      return {
        ...state, 
        loading: action.payload
      }
    case UserActionTypes.USERS_ERROR:
      return {
        ...state, 
        error: action.payload
      }
    default:
      return state
  }
}
