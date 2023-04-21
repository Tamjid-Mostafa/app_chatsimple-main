
import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

const PvRoutes = () => {
    const auth = useAuth()


  return auth ? <Outlet /> : <Navigate to="/" />

}

export default PvRoutes
