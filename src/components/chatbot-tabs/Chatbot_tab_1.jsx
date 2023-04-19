import { useDispatch, useSelector } from "react-redux";
import MessengerImage from "../../assets/images/svg/messenger.svg";
import InstaImage from "../../assets/images/svg/instagram.png";
import barIcon from "../../assets/images/svg/barIcon.svg";
import addIcon from "../../assets/iconadd.png";
import { TextField, Switch } from '@mui/material';

import displayimg from "../../assets/chatbotcardpic.png";
import { allChatBots, createChatBot } from "../../redux/reducers/chatbotSlice";
import { useEffect, useState } from "react";

// this file

const Chatbot_tab_1 = ({ changeChatBotTab }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { chatBots } = useSelector((state) => state.chatbot); // this has all the chat-bots list for a user that is logged in


    console.log(user)
    useEffect(() => {
        const data = {
            userID: user?.user_id,
            pageToken: {
                page_token: { last_time: "2023-03-20 04:54:32.547084+00:00" },
            },
        };
        dispatch(allChatBots(data));
    }, [user]);

    return (
        <div className="dashboard_tab chatbot_tab">
            <div>
                <h1>Chatbot</h1>
                <p className="smaller__heading">0 custom chatbots</p>
                <div
                    className="chatbot__tab__info__btn add_button"
                    onClick={() => changeChatBotTab(2)}
                >
                    <img src={addIcon} alt="add" />
                    <p>Build</p>
                </div>
                {chatBots ?
                    <main className="chat__simple__main2 margintop">
                        <div className="chat__simple__container">
                            <div className="two__box__messenger__row">
                                <div class="cards">
                                    <div className="header">
                                        <div className="flex items-center gap-3">
                                            <img src={MessengerImage} alt="" />
                                            <h4>Messenger Chatbot</h4>
                                        </div>
                                        <div>
                                            <img src={barIcon} className="cursor-pointer" alt="" />
                                        </div>

                                        <div className='get_chatbot_toggle_button'>
                                            <Switch />
                                        </div>
                                    </div>
                                    <div className="chatbot_card_img">
                                        <img src={displayimg} alt="My Image" />
                                    </div>
                                    <div>
                                        <h3>2 Expertise </h3>
                                        <p>FAQ, Business small talk</p>
                                    </div>
                                    <div className="displayflex margintop">
                                        <div className="marginleft">
                                            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' >
                                                Edit
                                            </button>
                                        </div>

                                        <div className="marginleft">
                                            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' >
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </main> : ""}

                <div className="chatbot__tab1__info">
                    <div className="chatbot__tab1__elevations">
                        <div className="chatbot__tab1__elevations__card">
                            <div className="elevation__card__ellipse_combo">
                                <div className="elevation__card__ellipse">
                                    <div>
                                    </div>
                                </div>
                                <div className="elevation__card__lines_combo">
                                    <div className="elevation__card__line"></div>
                                    <div className="elevation__card__line elevation__card__line__2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="no_activity">no activity yet</p>
                </div>
            </div>
        </div>
    );
};

export default Chatbot_tab_1;