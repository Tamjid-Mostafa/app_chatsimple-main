import { useEffect, useState } from "react"
import Chatbot from "../components/Chatbot"
import DashboardC from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import "../styles/dashboard.css"
import { useSelector } from "react-redux"
import Topbar from "../components/Topbar/Topbar"

const Dashboard = () => {
    const [dashboardTab, setDashboardTab] = useState(1)
    const changeDashboardTab = (tab) => {
        setDashboardTab(tab)
    }
    const { loading, user} = useSelector((state)=> {
        return state.auth
      })
      useEffect(()=> {
        if(!loading && !user) {
          // window.alert("Please login to continue")
        } else{
          console.log(user)
        }
      }, [user, loading])
    let userToSend = {
        first_name: "test",
        last_name: "user",
        email: "abc@gmail.com",
        password: "123456",
        user_type: "user",
        plan: "free",
        timezone: "UTC"
      }
    return (
        <div className="dashboard_page">
            <div className="sidebar_container">
                <Sidebar changeDashboardTab = {changeDashboardTab} />
            </div>
            {dashboardTab === 1 && <div className="dashboard_tab_container">

              <DashboardC user = {userToSend} /></div>}
            {dashboardTab === 2 && <div className="dashboard_tab_container"><Chatbot user = {userToSend} /></div>}
        </div>
    )
}

export default Dashboard