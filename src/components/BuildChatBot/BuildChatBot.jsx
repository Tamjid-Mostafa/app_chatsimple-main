import { Switch, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const BuildChatBot = () => {
    const [chatbotTab, setChatbotTab] = React.useState(2)
    const { loading, user: userData} = useSelector((state)=> {
        return state.auth
      })
      useEffect(()=> {
        if(!loading && !userData) {
          // window.alert("Please login to continue")
        } else{
        }
      }, [userData, loading])
    const changeChatBotTab = (tab) => {
        setChatbotTab(tab)
    }
  return (
    <div className='display_flex'>
        <div>
                <div className='chatbot_header_top'>
                    <h2 className='bold_text'>Name your Chatbot</h2>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={''}
                    />
                </div>

                <div>
                    <h2 className='bold_text'>Select Chatbot Expertise</h2>

                    <div className='expertise_box display_flex'>
                        <div onClick={() => changeChatBotTab(3)} className='faq_text cursor-pointer'>
                            <p> FAQ</p>
                        </div>
                        <div className='chatbot_toggle_button'>
                            <Switch
                            onClick={() => changeChatBotTab(3)} />
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
                        <div className='faq_text'>
                            <p>Business Goal</p>
                        </div>
                        <div className='chatbot_toggle_button3'>
                            <Switch />
                        </div>
                    </div>

                </div>

            </div >
         {chatbotTab === 3 && <Chatbot_faq_details changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 4 && <Chatbot_business_talk changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 5 && <Chatbot_business_goal changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 7 && <Chatbotfinish changeChatBotTab={changeChatBotTab} user = {userData} />}
            {chatbotTab === 8 && <CreateChatbotLast changeChatBotTab={changeChatBotTab} user = {userData} />}
    </div>
  )
}

export default BuildChatBot