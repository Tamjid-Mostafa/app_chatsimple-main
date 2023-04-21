import React, { useEffect, useState } from 'react';
import Chatbot_tab_1 from './chatbot-tabs/Chatbot_tab_1';
import Chatbot_tab_2_new from './chatbot-tabs/Chatbot_tab_2_new';
import Chatbot_faq_details from './chatbot-tabs/Chatbot_faq_details';
import Chatbot_business_talk from './chatbot-tabs/Chatbot_business_talk';
import Chatbot_business_goal from './chatbot-tabs/Chatbot_business_goal';
import Chatbotfinish from './Chatbotfinish/Chatbotfinish';
import CreateChatbotLast from './CreateChatbotLast/CreateChatbotLast';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, TextField } from '@mui/material';
import { createChatBot, updateChatBot } from '../redux/reducers/chatbotSlice';
import { v4 as uuidv4 } from 'uuid';
import ActionAlert from './Alert/ActionAlert';
import Topbar from './Topbar/Topbar';

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


  const [showModal, setShowModal] = useState(false);


  const handleBackTab = () => {
    setChatbotTab(prevTab => prevTab - 1);
  }


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
      <div className='w-full flex'>
        {chatbotTab === 1 && (
          <Chatbot_tab_1 changeChatBotTab={changeChatBotTab} user={userData} />
        )}
        <div className={`${chatbotTab !== 1 ? '' : 'hidden'}`}>


        {/* /////////////////////////////////////// Topbar //////////////////////////////////////////// */}

        <>
    <section>
      <div>
        <div className="left_top flex justify-between items-center h-[50px] px-[20px] text-white bg-[#454545] ">
          <div>
          <Link onClick={handleBackTab} className='duration-100 hover:opacity-80'>
            <ChevronLeftIcon /> Back
          </Link>
          </div>
          <div className='flex justify-end items-center gap-4'>
            <Link className='py-2 px-4 bg-[#625B71] rounded-full hover:opacity-75 duration-100'>
              <ChangeHistoryIcon className='rotate-90 ' style={{fontSize:"1.2rem", paddingBottom:"-2px"}} /> Preview
            </Link>

            <Link onClick={() => setShowModal(true)} to="#" className='py-2 px-5 bg-[#66B467] rounded-full hover:opacity-80 duration-100'>
              Publish
            </Link>
          </div>
        </div>
      </div>
      </section>

      <section>

{showModal ? (
  <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              Thank you . Your changes published !
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              If you have any question you talk or contact with us
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

            <button
              className="bg-red-500 text-white active:bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
) : null}
</section>

    </>

        {/* ////////////////////////////////////// Topbar ///////////////////////////////////////////// */}



          <div className='p-5 h-[calc(100vh)] w-[calc(300px)] bg-[#eeefee]'>
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
              <h2 className='bold_text'>Display to connect channel(s)</h2>

              <div className=' expertise_box display_flex justify-between'>
                <div
                  onClick={() => handlePlatform('messenger')}
                  className='faq_text cursor-pointer'
                >
                  <p>Messenger</p>
                </div>
                <div className='chatbot_toggle_button2'>
                  <Switch
                    checked={platforms?.includes('messenger')}
                    onClick={() => handlePlatform('messenger')}
                  />
                </div>
              </div>

              <div className=' expertise_box display_flex justify-between'>
                <div
                  onClick={() => handlePlatform('instagram')}
                  className='faq_text cursor-pointer'
                >
                  <p>Instagram</p>
                </div>
                <div className='chatbot_toggle_button2'>
                  <Switch
                    checked={platforms?.includes('instagram')}
                    onClick={() => handlePlatform('instagram')}
                  />
                </div>
              </div>
            </div>

            <div className='mt-5'>
              <h2 className='bold_text'>Select Chatbot Expertise</h2>

              <div className='expertise_box display_flex'>
                <div
                  onClick={() => changeChatBotTab(3)}
                  className='faq_text cursor-pointer'
                >
                  <p> FAQ</p>
                </div>
                <div className='chatbot_toggle_button'>
                  <Switch onClick={() => changeChatBotTab(3)} />
                </div>
              </div>

              <div className='expertise_box display_flex'>
                <div
                  onClick={() => changeChatBotTab(4)}
                  className='faq_text cursor-pointer'
                >
                  <p> Business small talk</p>
                </div>
                <div className='chatbot_toggle_button2'>
                  <Switch onClick={() => changeChatBotTab(4)} />
                </div>
              </div>

              <div className='expertise_box display_flex'>
                <div
                  onClick={() => changeChatBotTab(5)}
                  className='faq_text cursor-pointer'
                >
                  <p>Business Goal</p>
                </div>
                <div className='chatbot_toggle_button3'>
                  <Switch onClick={() => changeChatBotTab(5)} />
                </div>
              </div>
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
        <div className='bg-white w-[100vw]'>
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
    </>
  );
};

export default Chatbot;
