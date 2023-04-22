import React, { useEffect, useState } from 'react';
import Chatbot_tab_1 from './chatbot-tabs/Chatbot_tab_1';
import Chatbot_tab_2_new from './chatbot-tabs/Chatbot_tab_2_new';
import Chatbot_faq_details from './chatbot-tabs/Chatbot_faq_details';
import Chatbot_business_talk from './chatbot-tabs/Chatbot_business_talk';
import Chatbot_business_goal from './chatbot-tabs/Chatbot_business_goal';
import Chatbotfinish from './Chatbotfinish/Chatbotfinish';
import CreateChatbotLast from './CreateChatbotLast/CreateChatbotLast';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { createChatBot, updateChatBot } from '../redux/reducers/chatbotSlice';
import { v4 as uuidv4 } from 'uuid';
import ActionAlert from './Alert/ActionAlert';
import messenger from '../assets/images/svg/messenger.svg'
import instagram from '../assets/images/svg/instagram.png'
import Topbar from './Topbar/Topbar';
import CustomSwitch from './ui/IOSSwitch/IOSSwitch';
import ListItem from './ui/ListItem';
import LogoListItem from './ui/LogoListItem/LogoListItem';

const Chatbot = () => {
  const [chatbotTab, setChatbotTab] = React.useState(1);
  const { loading, user: userData } = useSelector((state) => {
    return state.auth;
  });
  useEffect(() => {
    if (!loading && !userData) {
      // window.alert("Please login to continue")
    } else {
    }
  }, [userData, loading]);
  const changeChatBotTab = (tab) => {
    setChatbotTab(tab);
  };
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { chatBots } = useSelector((state) => state.chatbot); // this has all the chat-bots list for a user that is logged in
  const [isTyping, setIsTyping] = useState(false);
  const [chatbotTitle, setChatbotTitle] = useState('');
  const [prevTitle, setPrevTitle] = useState('');
  const [chatBotID, setChatBotID] = useState('');

  const [platforms, setPlatforms] = useState([]);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');


  const listItemsData =
  {
    channels: [
      {
        name: 'Messenger',
        img: messenger,
        slug: 'messenger'
      },
      {
        name: 'Instagram',
        img: instagram,
        slug: 'instagram'
      },
    ],
    chatBotExpertise: [
      {
        id: 3,
        name: 'FAQ',
      },
      {
        id: 4,
        name: 'Business small talk',
      },
      {
        id: 5,
        name: 'Business goal',
      },
    ],

  }

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
        setSuccess(true);
        setMessage('Chatbot name created')
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
      setSuccess(true);
      setMessage('Chatbot name updated')
    }
  }, [isTyping, chatbotTitle]);


  const handlePlatform = (value) => {
    let copyPlatform = platforms;

    if (!chatBotID) {
      setError(true)
      setMessage('Create chatbot name')
      return;
    }

    if (value === 'messenger') {
      if (platforms.includes(value)) {
        copyPlatform = copyPlatform.filter((pf) => pf !== value);
        setPlatforms(copyPlatform);
      } else {
        copyPlatform = [...platforms, value];
        setPlatforms([...platforms, value]);
      }
    }
    if (value === 'instagram') {
      if (platforms.includes(value)) {
        copyPlatform = copyPlatform.filter((pf) => pf !== value);

        setPlatforms(copyPlatform);
      } else {
        copyPlatform = [...platforms, value];
        setPlatforms([...platforms, value]);
      }
    }

    const data = {
      userID: user?.user_id,
      update: {
        platforms:
          copyPlatform?.length === 0
            ? null
            : { first: copyPlatform[0], scond: copyPlatform[1] },
      },
      chatbotID: chatBotID,
      update_mask: 'platforms',
    };

    dispatch(updateChatBot(data));
  };



  const handleBlur = () => {
    setIsTyping(false);
  };

  const handleFocus = () => {
    setIsTyping(true);
  };

  return (
    <>
      {success && (
        <ActionAlert
          variant='filled'
          severity='success'
          message={message}
          setData={setMessage}
        />)
      }
      {error && (
        <ActionAlert
          variant='filled'
          severity='error'
          message={message}
          setData={setMessage}
        />)
      }

      <div className='w-full relative'>
        {chatbotTab === 1 && (
          <Chatbot_tab_1 changeChatBotTab={changeChatBotTab} user={userData} />
        )}
        <div className={`w-full sticky top-0 z-10 ${chatbotTab !== 1 ? '' : 'hidden'}`}>
          <Topbar />
        </div>
        <div className='flex'>
          <div className={`${chatbotTab !== 1 ? 'relative' : 'hidden'}`}>

            <div className='p-5 min-h-screen bg-[#eeefee] fixed'>
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

              <>
                <h2 className='bold_text'>Display to connect channel(s)</h2>
                {
                  listItemsData?.channels?.map((ch) =>
                    <LogoListItem
                      checked={platforms?.includes(ch.slug)}
                      handleClick={() => handlePlatform(ch.slug)}
                    >
                      <img
                        className='w-8'
                        src={ch.img} alt={ch.name} />
                      <p>{ch.name}</p>
                    </LogoListItem>

                  )
                }
              </>

              <div className='mt-5'>
                <h2 className='bold_text'>Select Chatbot Expertise</h2>

                {
                  listItemsData?.chatBotExpertise?.map((item, i) =>
                    <ListItem
                      key={item.id}
                      id={item.id}
                      handleClick={changeChatBotTab}

                    >
                      {item.name}
                    </ListItem>)
                }
              </div>
            </div>

            {/* <div className='bg-white w-[100vw] mt-10'>

          {chatbotTab === 2 && <Chatbot_tab_2_new changeChatBotTab={changeChatBotTab} user={userData} />}
          {chatbotTab === 3 && <Chatbot_faq_details changeChatBotTab={changeChatBotTab} user={userData} />}
          {chatbotTab === 4 && <Chatbot_business_talk changeChatBotTab={changeChatBotTab} user={userData} />}
          {chatbotTab === 5 && <Chatbot_business_goal changeChatBotTab={changeChatBotTab} user={userData} />}
          {chatbotTab === 7 && <Chatbotfinish changeChatBotTab={changeChatBotTab} user={userData} />}
          {chatbotTab === 8 && <CreateChatbotLast changeChatBotTab={changeChatBotTab} user={userData} />}
        </div> */}
          </div>
          <div className='bg-white w-[100vw]  ml-[300px] mt-10'>
            {chatbotTab === 2 && (
              <Chatbot_tab_2_new
                changeChatBotTab={changeChatBotTab}
                user={userData}
              />
            )}
            {chatbotTab === 3 && (
              <Chatbot_faq_details
                changeChatBotTab={changeChatBotTab}
                user={userData}
              />
            )}
            {chatbotTab === 4 && (
              <Chatbot_business_talk
                changeChatBotTab={changeChatBotTab}
                user={userData}
              />
            )}
            {chatbotTab === 5 && (
              <Chatbot_business_goal
                changeChatBotTab={changeChatBotTab}
                user={userData}
              />
            )}
            {chatbotTab === 7 && (
              <Chatbotfinish
                changeChatBotTab={changeChatBotTab}
                user={userData}
              />
            )}
            {chatbotTab === 8 && (
              <CreateChatbotLast
                changeChatBotTab={changeChatBotTab}
                user={userData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
