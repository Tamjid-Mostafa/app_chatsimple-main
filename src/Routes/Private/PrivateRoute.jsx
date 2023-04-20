import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { loading, user } = useSelector((state) => {
        return state.user
      })
      console.log(user)
    const location = useLocation()
    if (loading) {
        return (
            <div className='text-center'>
                Loading...
            </div>
        )
    }

    if (user) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
}

export default PrivateRoute