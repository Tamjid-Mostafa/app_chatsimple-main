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
      console.log(user)
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
    <div className="dashboard_page">
      <div className="sidebar_container">
        <Sidebar changeDashboardTab={changeDashboardTab} />
      </div>
      {dashboardTab === 1 && <div className="dashboard_tab_container"><DashboardC userToSend={userToSend} /></div>}
      {dashboardTab === 2 && <div className="dashboard_tab_container"><Chatbot user={userToSend} /></div>}
    </div>
  )
}

export default Dashboard