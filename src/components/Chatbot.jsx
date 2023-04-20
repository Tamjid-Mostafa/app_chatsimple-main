import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { Switch, TextField } from '@mui/material'
import { createChatBot, updateChatBot } from '../redux/reducers/chatbotSlice'
import { v4 as uuidv4 } from 'uuid';
import Topbar from './Topbar/Topbar'

const Chatbot = () => {
  const [chatbotTab, setChatbotTab] = React.useState(1)
  const { loading, user: userData } = useSelector((state) => {
    return state.auth
  })
  useEffect(() => {
    if (!loading && !userData) {
      // window.alert("Please login to continue")
    } else {
    }
  }, [userData, loading])
  const changeChatBotTab = (tab) => {
    setChatbotTab(tab)
  }
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { chatBots } = useSelector((state) => state.chatbot); // this has all the chat-bots list for a user that is logged in
  const [isTyping, setIsTyping] = useState(false);
  const [chatbotTitle, setChatbotTitle] = useState('');
  const [prevTitle, setPrevTitle] = useState('');
  const [chatBotID, setChatBotID] = useState('');

  useEffect(() => {
    if (!prevTitle) {
      // create new
      if (!isTyping && !!chatbotTitle) {
        setPrevTitle(chatbotTitle);

        const data = {
          userID: user?.user_id,
          chatbotDetail: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            platforms: null,
            chatbot_title: chatbotTitle,
          },
          chatbotID: uuidv4(),
        };
        setChatBotID(data.chatbotID);
        dispatch(createChatBot(data));
      }
    } else if (prevTitle !== chatbotTitle && !isTyping) {
      setPrevTitle(chatbotTitle);
      // update here
      const data = {
        userID: user?.user_id,
        update: { chatbot_title: chatbotTitle },
        chatbotID: chatBotID,
        update_mask: 'chatbot_title',
      };
      dispatch(updateChatBot(data));
    }
  }, [isTyping, chatbotTitle]);



  const handleBlur = () => {
    setIsTyping(false);
  };

  const handleFocus = () => {
    setIsTyping(true);
  };

  return (
    <>
    <div className='w-full flex'>
      {chatbotTab === 1 && <Chatbot_tab_1 changeChatBotTab={changeChatBotTab} user={userData} />}
      <div className={`${chatbotTab !== 1 ? "" : "hidden"}`}>

        <div className='p-5 h-[calc(100vh-50px)]'>
          <div className='chatbot_header_top'>
            <h2 className='bold_text'>Name your Chatbot</h2>
            <TextField
              label='Name'
              variant='outlined'
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={(e) => setChatbotTitle(e.target.value)}
              value={chatbotTitle}
            />
          </div>

          <div>
            <h2 className='bold_text'>Select Chatbot Expertise</h2>

            <div className='expertise_box display_flex'>
              <div onClick={() => changeChatBotTab(3)} className='faq_text cursor-pointer'>
                <p> FAQ</p>
              </div>
              <div className='chatbot_toggle_button'>
                <Switch onClick={() => changeChatBotTab(3)} />
              </div>
            </div>

            <div className='expertise_box display_flex'>
              <div onClick={() => changeChatBotTab(4)} className='faq_text cursor-pointer'>
                <p> Business small talk</p>
              </div>
              <div className='chatbot_toggle_button2'>
                <Switch onClick={() => changeChatBotTab(4)} />
              </div>
            </div>

            <div className='expertise_box display_flex'>
            <div onClick={() => changeChatBotTab(5)} className='faq_text cursor-pointer'>
                <p>Business Goal</p>
              </div>
              <div className='chatbot_toggle_button3'>
                <Switch onClick={() => changeChatBotTab(5)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white w-[100vw]'>
        {chatbotTab === 2 && <Chatbot_tab_2_new changeChatBotTab={changeChatBotTab} user={userData} />}
        {chatbotTab === 3 && <Chatbot_faq_details changeChatBotTab={changeChatBotTab} user={userData} />}
        {chatbotTab === 4 && <Chatbot_business_talk changeChatBotTab={changeChatBotTab} user={userData} />}
        {chatbotTab === 5 && <Chatbot_business_goal changeChatBotTab={changeChatBotTab} user={userData} />}
        {chatbotTab === 7 && <Chatbotfinish changeChatBotTab={changeChatBotTab} user={userData} />}
        {chatbotTab === 8 && <CreateChatbotLast changeChatBotTab={changeChatBotTab} user={userData} />}
      </div>
    </div>
    </>
  )
}

export default Chatbot