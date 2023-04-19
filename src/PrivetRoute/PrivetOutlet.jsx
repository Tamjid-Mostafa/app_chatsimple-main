import React from 'react'
import useAuth from '../hooks/UseAuth'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const PrivetOutlet = () => {

    const auth = useAuth()
    return auth ? <Outlet /> : <Navigate to="/" />
}

export default PrivetOutlet