import { TextField, Switch } from '@mui/material';
import displayimg from '../../assets/chatbot_display_img.png';
import {
  createChatBot,
  updateChatBot,
} from '../../redux/reducers/chatbotSlice';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

const Chatbot_tab_2_new = ({ changeChatBotTab }) => {
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
        data: { chatbot_title: chatbotTitle },
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

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='display_flex'>
      <div>
        <div className='chatbot_header_top'>
          <h2 className='bold_text'>Name your Chatboat</h2>
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
            <div className='faq_text'>
              <p> FAQ</p>
            </div>
            <div className='chatbot_toggle_button'>
              <Switch onClick={() => changeChatBotTab(3)} />
            </div>
          </div>

          <div className='expertise_box display_flex'>
            <div className='faq_text'>
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
              <Switch onClick={() => changeChatBotTab(5)} />
            </div>
          </div>
        </div>
      </div>
      <div className='chatbot_dsplay_column'>
        <div className='chatbot_display_text'>
          <h1 className='bold_text font_32'>
            Discover the world of chat simple
          </h1>
        </div>
        <div className='chatbot_display_img_style'>
          <img src={displayimg} alt='My Image' />
        </div>

        <div className='chatbot_display_img_style'>
          <img src={displayimg} alt='My Image' />
        </div>
      </div>
    </div>
  );
};

export default Chatbot_tab_2_new;
