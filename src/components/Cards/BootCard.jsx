import React from 'react';
import MessengerImage from '../../assets/images/svg/messenger.svg';
import barIcon from '../../assets/images/svg/barIcon.svg';
import { Switch } from '@mui/material';
import displayimg from '../../assets/chatbotcardpic.png';
import { useDispatch, useSelector } from 'react-redux';
import { allChatBots, deleteChatBot } from '../../redux/reducers/chatbotSlice';

const BootCard = ({ bot }) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user);

  const handleDelete = () => {
      dispatch(deleteChatBot(bot))
      const data = {
        userID: user?.user_id,        
    };
      dispatch(allChatBots(data))
  }

  const types = [];

// filter expertises type

  bot?.expertises?.forEach((el) => {
    if (el.expertise_type.split('.')[1] === 'FAQ') {
      if (!types.includes('FAQ')) {
        types.push('FAQ');
      }
    } else if (el.expertise_type.split('.')[1] === 'BUSINSESS_SMALL_TALK') {
      if (!types.includes('Business small talk')) {
        types.push('Business small talk');
      }
    }
  });



  return (
    <>
      <div class='cards'>
        <div className='header'>
          <div className='flex items-center gap-3'>
            <img src={MessengerImage} alt='' />
            <h4>Messenger Chatbot</h4>
          </div>
          <div>
            <img src={barIcon} className='cursor-pointer' alt='' />
          </div>

          <div className='get_chatbot_toggle_button'>
            <Switch  />
          </div>
        </div>
        <div className='chatbot_card_img'>
          <img src={displayimg} alt='My Image' />
        </div>
        <div>
          <h3>{bot.chatbot_title}</h3>
          <p>{types?.map((item,i) => `${item}${i === types?.length -1 ? "" : ', '}`)}</p>
        </div>
        <div className='displayflex margintop'>
          <div className='marginleft'>
            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full'>
              Edit
            </button>
          </div>

          <div className='marginleft'>
            <button 
              onClick={handleDelete}
            className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootCard;
