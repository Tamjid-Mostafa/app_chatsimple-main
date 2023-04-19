import React from 'react';
import MessengerImage from '../../assets/images/svg/messenger.svg';
import barIcon from '../../assets/images/svg/barIcon.svg';
import { Switch } from '@mui/material';
import displayimg from '../../assets/chatbotcardpic.png';

const BootCard = ({ bot }) => {
  const handleActive = (event) => {
    console.log(event.target.checked);
    
  };

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
            <Switch onChange={handleActive} />
          </div>
        </div>
        <div className='chatbot_card_img'>
          <img src={displayimg} alt='My Image' />
        </div>
        <div>
          <h3>{bot.chatbot_title}</h3>
          <p>FAQ, Business small talk</p>
        </div>
        <div className='displayflex margintop'>
          <div className='marginleft'>
            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full'>
              Edit
            </button>
          </div>

          <div className='marginleft'>
            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootCard;
