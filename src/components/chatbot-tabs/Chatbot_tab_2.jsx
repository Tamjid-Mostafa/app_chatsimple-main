import cancelIcon from "../../assets/cancel.jpg";

import ConversationCard from './ConversationCard';
const Chatbot_tab_2 = ({ changeChatBotTab }) => {
    return (
        <div className='dashboard_tab chatbot_tab'>
            <div>
                <h1>Chatbot</h1>
                <p className="smaller__heading">0 custom chatbots</p>
                <div className="chatbot__tab2__main">
                    <div className='header'>
                        <div className="header__left">
                            What will your chatbot do
                        </div>
                        <div className="header__right cursor-pointer" onClick={() => changeChatBotTab(1)}>
                            <img src={cancelIcon} alt="add" />
                        </div>
                    </div>
                    <div className="chat__conversations">
                        <ConversationCard content="Create an FAQ" changeTab={changeChatBotTab} />
                        <ConversationCard content="Create a bussiness small talk" changeTab={changeChatBotTab} />
                        <ConversationCard content="Create a recommendation bot" changeTab={changeChatBotTab} />
                        <ConversationCard content="Create a mentorship bot" changeTab={changeChatBotTab} />
                    </div>
                    <div className='chat__conversation__action'>
                        <div className="chat__conversation__action__btns">
                            <button className="chat__conversation__action__btn">Test </button>
                            <button className="chat__conversation__action__btn" onClick={() => changeChatBotTab(3)}>Next </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chatbot_tab_2