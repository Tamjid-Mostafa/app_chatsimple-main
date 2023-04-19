import { useDispatch, useSelector } from 'react-redux';

import addIcon from '../../assets/iconadd.png';

import { allChatBots } from '../../redux/reducers/chatbotSlice';
import { useEffect } from 'react';
import BootCard from '../Cards/BootCard';

// this file

const Chatbot_tab_1 = ({ changeChatBotTab }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { chatBots } = useSelector((state) => state.chatbot); // this has all the chat-bots list for a user that is logged in

  useEffect(() => {
    const data = {
      userID: user?.user_id,
    };
    dispatch(allChatBots(data));
  }, [user]);


  return (
    <div className='dashboard_tab chatbot_tab'>
      <div>
        <h1>Chatbot</h1>
        <p className='smaller__heading'>0 custom chatbots</p>
        <div
          className='chatbot__tab__info__btn add_button'
          onClick={() => changeChatBotTab(2)}
        >
          <img src={addIcon} alt='add' />
          <p>Build</p>
        </div>
        {chatBots ? (
          <main className='chat__simple__main2 margintop'>
            <div className='chat__simple__container'>
              <div className='two__box__messenger__row'>
                {chatBots.chatbot?.map((bot, i) => (
                  <BootCard key={i++} bot={bot} />
                ))}
              </div>
            </div>
          </main>
        ) : (
          ''
        )}

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
      </div>
    </div>
  );
};

export default Chatbot_tab_1;
