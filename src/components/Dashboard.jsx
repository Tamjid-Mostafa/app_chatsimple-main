import React, { useEffect } from 'react'
import DB_Tab_1 from './dashboard-tabs/DB_Tab_1'
import HomePage from './HomePage/HomePage'
import HomePageV2 from './HomePage/HomePageV2'
import { useSelector } from 'react-redux'

const DashboardC = () => {
  const [dashboardTab, setDashboardTab] = React.useState(2)
  const { loading, user: userData} = useSelector((state)=> {
    return state.auth
  })
  useEffect(()=> {
    if(!loading && !userData) {
      // window.alert("Please login to continue")
    } else{
      console.log(userData)
    }
  }, [userData, loading])
  const changeDashboardTab = (tab) => {
    setDashboardTab(tab)
  }
  // 
  return (
    <div>
      {/* {dashboardTab === 1 && <HomePage changeDashboardTab = {changeDashboardTab} />} */}
      {dashboardTab === 2 && <HomePageV2 changeDashboardTab = {changeDashboardTab} user = {userData} />}
    </div>
  )
}

export default DashboardC