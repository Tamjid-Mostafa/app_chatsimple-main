import { useDispatch, useSelector } from 'react-redux';

import addIcon from '../../assets/iconadd.png';

import { allChatBots } from '../../redux/reducers/chatbotSlice';
import { useEffect } from 'react';
import BootCard from '../Cards/BootCard';
import { CircularProgress } from '@mui/material';

// this file

const Chatbot_tab_1 = ({ changeChatBotTab }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { chatBots, loading } = useSelector((state) => state.chatbot); // this has all the chat-bots list for a user that is logged in


  useEffect(() => {
    const data = {
      userID: user?.user_id,
      pageToken: { last_time: new Date().toISOString().split('T')[0] }
    };
    dispatch(allChatBots(data));
  }, [user]);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen w-full'>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className='dashboard_tab chatbot_tab p-5'>
      <div className=''>
        <h1>Chatbot</h1>
        <p className='smaller__heading'>{chatBots?.chatbot?.length || '0'} custom chatbots</p>
        <div
          className='chatbot__tab__info__btn add_button'
          onClick={() => changeChatBotTab(2)}
        >
          <img src={addIcon} alt='add' />
          <p>Build</p>
        </div>
        {chatBots ? (
          <div className='chat__simple__main2 pt-10 mt-10'>
            <div className='chat__simple__container'>
              <div style={{ width: '90%' }} className='two__box__messenger__row flex flex-wrap'>
                {chatBots?.chatbot?.map((bot, i) => (
                  <BootCard key={i++} bot={bot} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='chatbot__tab1__info'>
            <div className='chatbot__tab1__elevations'>
              <div className='chatbot__tab1__elevations__card'>
                <div className='elevation__card__ellipse_combo'>
                  <div className='elevation__card__ellipse'>
                    <div></div>
                  </div>
                  <div className='elevation__card__lines_combo'>
                    <div className='elevation__card__line'></div>
                    <div className='elevation__card__line elevation__card__line__2'></div>
                  </div>
                </div>
              </div>
            </div>
            <p className='no_activity'>no activity yet</p>
          </div>
        )}


      </div>
    </div>
  );
};

export default Chatbot_tab_1;
