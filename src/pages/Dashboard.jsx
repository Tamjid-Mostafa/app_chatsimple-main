import { useEffect, useState } from "react"
import Chatbot from "../components/Chatbot"
import DashboardC from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import "../styles/dashboard.css"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const [dashboardTab, setDashboardTab] = useState(1)
  const changeDashboardTab = (tab) => {
    setDashboardTab(tab)
  }
  const { loading, user } = useSelector((state) => {
    return state.auth
  })
  useEffect(() => {
    if (!loading && !user) {
      // window.alert("Please login to continue")
    } else {
    }
  }, [user, loading])
  let userToSend = {
    email: "admin@local.host",
    first_name: "Lillian",
    last_name: "Ye",
    login_type: "LoginType.EMAIL",
    plan: "none",
    timezone: "UTC",
    user_fb_id: "131383809861123",
    user_id: "user_0",
    user_type: "UserType.ADMIN"
  }
  return (
    <div className="flex w-[100vw]">
      <div className="fixed sidebar_container z-50">
        <Sidebar changeDashboardTab={changeDashboardTab} />
      </div>
      <div className="pl-64 w-full bg-[#f1efef] ">
        {dashboardTab === 1 && <div className="dashboard_tab_container"><DashboardC user={user} /></div>}
        {dashboardTab === 2 && <div className="dashboard_tab_container"><Chatbot user={user} /></div>}
      </div>
    </div>
  )
}

export default Dashboard