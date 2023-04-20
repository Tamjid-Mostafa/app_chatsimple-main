import React, { useEffect } from 'react'
import Chatbot_tab_1 from './chatbot-tabs/Chatbot_tab_1'
import Chatbot_tab_2 from './chatbot-tabs/Chatbot_tab_2'
import Chatbot_tab_2_new from './chatbot-tabs/Chatbot_tab_2_new'
import Chatbot_faq_details from './chatbot-tabs/Chatbot_faq_details'
import Chatbot_business_talk from './chatbot-tabs/Chatbot_business_talk'
import Chatbot_business_goal from './chatbot-tabs/Chatbot_business_goal'
import Chatbot_tab_3 from './chatbot-tabs/Chatbot_tab_3'
import ChatbotConnectToChannel from './ChatbotConnectToChannel/ChatbotConnectToChannel'
import ChatbotConnectToChannelFirst from './ChatbotConnectToChannel/ChatbotConnectToChannelFirst'
import Chatbotfinish from './Chatbotfinish/Chatbotfinish'
import CreateChatbotLast from './CreateChatbotLast/CreateChatbotLast'
import { useSelector } from 'react-redux'
import PopUp from './PopUp/PopUp'
import Topbar from './Topbar/Topbar'

const Chatbot = () => {
    const [chatbotTab, setChatbotTab] = React.useState(1)
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
    const changeChatBotTab = (tab) => {
        setChatbotTab(tab)
    }
    return (
        <div className='w-[100vw]'>
          <Topbar />
           <div className='p-5'>
           {chatbotTab === 1 && <Chatbot_tab_1 changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 2 && <Chatbot_tab_2_new changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 3 && <Chatbot_faq_details changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 4 && <Chatbot_business_talk changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 5 && <Chatbot_business_goal changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 7 && <Chatbotfinish changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 8 && <CreateChatbotLast changeChatBotTab={changeChatBotTab} user = {userData} />}
           </div>
        </div>
    )
}

export default Chatbot