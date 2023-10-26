export interface UserState {
  users: any[]
  loading: boolean
  error: null | string
}

export enum UserActionTypes {
  SET_USERS = 'SET_USERS',
  USERS_LOADING = 'USERS_LOADING',
  USERS_ERROR = 'USERS_ERROR'
}

export interface FetchUsersAction {
  type: UserActionTypes.SET_USERS
  payload: any
}

export interface FetchUserSuccessAction {
  type: UserActionTypes.USERS_LOADING
  payload: any
}
export interface FetchUsersErrorAction {
  type: UserActionTypes.USERS_ERROR
  payload: any
}

export type UserAction = FetchUsersAction | FetchUserSuccessAction | FetchUsersErrorAction