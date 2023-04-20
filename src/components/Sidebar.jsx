import dashboardImg from '../assets/dashboard.png'
import chatbotImg from '../assets/chatbot.png'
import conversationImg from '../assets/conversation.png'
import settingImg from '../assets/setting.png'
import SettingsIcon from '@mui/icons-material/Settings';
import helpImg from '../assets/help.png'
import HelpIcon from '@mui/icons-material/Help';
import Logo from '../assets/white_transparent.svg'

const Sidebar = ({changeDashboardTab}) => {
  return (
    <div className='sidebar w-full'>
      <div className='sidebar__header'>
        <div className='sidebar__header__logo'>
          <img src={Logo} alt="logo" />
        </div>
        <hr />
        <div className='sidebar__header__links'>
          <div className='sidebar__header__links__combo' onClick={()=>changeDashboardTab(1)}>
            <img src={dashboardImg} alt="dashboard" />
            <p>Dashboard</p>
          </div>
          <div className='sidebar__header__links__combo' onClick={()=>changeDashboardTab(2)}>
            <img src={chatbotImg} alt="dashboard" />
            <p>Chatbot</p>
          </div>
          <div className='sidebar__header__links__combo'>
            <img src={conversationImg} alt="dashboard" />
            <p>Conversation</p>
          </div>
        </div>
      </div>
      <div className='sidebar__footer'>
        <div className='sidebar__footer__links'>
          <div className='sidebar__footer__links__combo'>
            {/* <img src={settingImg} alt="dashboard" /> */}
            <SettingsIcon />
            <p>Settings</p>
          </div>
          <div className='sidebar__footer__links__combo'>
            {/* <img src={helpImg} alt="dashboard" /> */}
            <HelpIcon />
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar