import { useEffect, useState } from "react"
import Chatbot from "../components/Chatbot"
import DashboardC from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import "../styles/dashboard.css"
import { useSelector } from "react-redux"
import Topbar from "../components/Topbar/Topbar"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [dashboardTab, setDashboardTab] = useState(1)
  const changeDashboardTab = (tab) => {
    setDashboardTab(tab)
  }
  const { loading, user } = useSelector((state) => {
    return state.user
  })
  const navigate = useNavigate()
 
  return (
    <div className="flex w-[100vw]">
      <div className="fixed sidebar_container z-50">
        <Sidebar changeDashboardTab={changeDashboardTab} />
      </div>
      <div className="pl-[248px] w-full relative">
        {dashboardTab === 1 && <div className="dashboard_tab_container"><DashboardC user={user} /></div>}
        {dashboardTab === 2 && <div className="dashboard_tab_container"><Chatbot user={user} /></div>}
      </div>
    </div>
  )
}

export default Dashboard