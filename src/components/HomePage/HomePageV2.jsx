import React, { useEffect } from "react";
import "./HomePageV2.css";
// import AddChannelButton from '../../components/Buttons/AddChannelButton';
import MessengerImage from "../../assets/images/svg/messenger.svg";
import InstaImage from "../../assets/images/svg/instagram.png";
import barIcon from "../../assets/images/svg/barIcon.svg";
import CalenderIcon from "../../assets/images/svg/Calender.svg";
import ArrowLeftIcon from "../../assets/images/svg/ArrowLeft.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChartContainerIcon from "../../assets/images/svg/Chart.svg";
import ChartMapIcon from "../../assets/images/svg/ChartMap.png";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../../redux/reducers/userSlice";

// this file

export default function HomePageV2({ changeDashboardTab }) {
  const dispatch = useDispatch();
  const { fbUserID } = useSelector((state) => state.fb);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(userDetails(fbUserID));
  }, [fbUserID]);

  return (
    <React.StrictMode>
      <main className="chat__simple__main2">
        <div className="chat__simple__container">
          <h1>{user?.first_name && `${user?.first_name}!`}</h1>
          <div className="small__two__connextios__row">
            <span>2 connected channels</span>
            <span>838 contacts</span>
          </div>
          <div className="active__channel__row">
            <h4>Active Channels</h4>
            {/* <AddChannelButton changeDashboardTab={changeDashboardTab} dashboardTab={1} /> */}
          </div>

          <div className="two__box__messenger__row">
            <div class="cards">
              <div className="header">
                <div className="flex items-center gap-3">
                  <img src={MessengerImage} alt="" />
                  <h4>Messenger</h4>
                </div>
                <div>
                  <img src={barIcon} className="cursor-pointer" alt="" />
                </div>
              </div>
              <div className="bars__text">
                <span className="text-sm font-medium">Active contact</span>
                <span className="text-sm text-green-500">376/508</span>
              </div>

              <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  class="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="bars__texts">
                <span className="text-sm font-medium">
                  Total number of message
                </span>
                <span className="text-sm text-green-500">2,109</span>
              </div>

              <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  class="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "49%" }}
                ></div>
              </div>
            </div>
            <div className="cards">
              <div className="header">
                <div className="flex items-center gap-3">
                  <img src={InstaImage} alt="" className="w-12 h-12" />
                  <h4>Instagram</h4>
                </div>
                <div>
                  <img src={barIcon} className="cursor-pointer" alt="" />
                </div>
              </div>
              <div className="bars__text">
                <span className="text-sm font-medium">Active contact</span>
                <span className="text-sm text-green-500">220/430</span>
              </div>

              <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  class="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "39%" }}
                ></div>
              </div>
              <div className="bars__texts">
                <span className="text-sm font-medium">
                  Total number of message
                </span>
                <span className="text-sm text-green-500">1,580</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
            <div className="cards_three">
              <h5>+ Add channel</h5>
            </div>
          </div>

          <div className="reports__hading">
            <h3>Reports</h3>
          </div>
          <div className="starts__date__end__date">
            <div className="first__input">
              <input type="text" placeholder="10-02-2023" />
              <img src={CalenderIcon} alt="" />
            </div>
            <button className="bg-[#EEF8F0] w-[48px] h-[46px]">
              <img src={ArrowLeftIcon} alt="" />
            </button>
            <div className="first__input">
              <input type="text" placeholder="30-03-2023" />
              <img src={CalenderIcon} alt="" />
            </div>
          </div>

          <div className="boxes__grid__sec">
            <div className="card">
              <h6>Total contacts</h6>
              <div className="flex justify-between items-center">
                <h5>838</h5>
                <div className="percent">+2.5%</div>
              </div>
            </div>
            <div className="card">
              <h6>New Contacts</h6>
              <div className="flex justify-between items-center">
                <h5>23</h5>
                <div className="bg-[#F9DEDC] rounded-full px-4 py-1 text-sm">
                  -1.2%
                </div>
              </div>
            </div>
            {/* <div className='card'>
                            <h6>TBD</h6>
                            <div className='flex justify-between items-center'>
                                <h5>num</h5>
                                <div className='percent'>+X%</div>
                            </div>
                        </div>
                        <div className='card'>
                            <h6>TBD</h6>
                            <div className='flex justify-between items-center'>
                                <h5>num</h5>
                                <div className='percent'>+X%</div>
                            </div>
                        </div> */}
          </div>

          <div className="grid__box__second">
            <div className="cardss">
              <h6>Bot task completion rate</h6>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">Achieved</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                  <span className="text-xs text-gray-400"> Remaining</span>
                </div>
              </div>
              <div style={{ width: 200, height: 200 }} className="mt-8">
                <CircularProgressbar
                  text={`67%`}
                  value={67}
                  styles={buildStyles({
                    backgroundColor: "#66B467",
                    pathColor: "#66B467",
                    textColor: "#333",
                    textSize: "15px",
                  })}
                />
              </div>
            </div>

            <div className="cardss">
              <h6>Most Active Account Types</h6>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">Very Active</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                  <span className="text-xs text-gray-400"> Inactive</span>
                </div>
              </div>
              <div style={{ width: 200, height: 200 }} className="mt-8">
                <img src={ChartContainerIcon} alt="" />
              </div>
            </div>
            <div className="active__cardss">
              <h6>Active Countries</h6>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">Very Active</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                  <span className="text-xs text-gray-400"> Active</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-3 h-3 bg-gray-100 rounded-full"></div>
                  <span className="text-xs text-gray-400"> Inactive</span>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <img src={ChartMapIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.StrictMode>
  );
}