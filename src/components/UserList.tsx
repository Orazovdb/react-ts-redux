import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { GetUsers } from '../api/Getter/Getter'
import UserAction from '../store/action-creators/user'

const UserList: React.FC = () => {
  /* eslint-disable */
  const { users, error, loading } = useTypedSelector((state) => state.user)
  const dispatch = useDispatch()

  const {
    data, 
    isLoading, 
    isError
  } = useQuery('getUsers', GetUsers)

  useEffect(() => {
    if(!isLoading && !isError){
      console.log("data", data)
      dispatch(UserAction.setUsers(data))

    }
  }, [data])

  useEffect(() => {
    console.log('users', users)
  }, [users])


  if (loading) {
    return <h1>idyot zagruzka...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList
