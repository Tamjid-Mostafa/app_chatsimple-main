import { TextField, Switch } from '@mui/material';
import { Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


import ConversationCard from './ConversationCard';
const Chatbot_faq_details = ({ changeChatBotTab }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    const [isChecked, setIsChecked] = useState(false);
    const [question1, setQuestion1] = useState("")
    const [question2, setQuestion2] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("")

    const handleClose = () => {
        setOpen(false);
    };

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleFAQSubmit = async () => {
        let data = {
            expertise_title: "FAQ",
            expertise_type: "FAQ",
            form_information: {
                faqs: [
                    {
                        question: question1,
                        answer: answer1,
                    },
                    {
                        question: question2,
                        answer: answer2,
                    }
                ]
            },
            is_active: "True",
            chatbot_id: uuidv4()
        }
        let headers = {
            "x-access-token": "skip_validation_for_admin",
            "Content-Type": "application/json"
        }

        try {
            const response = await axios.post(
                `https://api.chatsimple.ai/v0/users/${user.user_id}/chatbot_expertises/${uuidv4()}`,
                data,
                { headers }
            );
            setOpen(true);
            setData(response.data.message)
            // window.alert(response.data.message);
        }
        catch (e) {
            setOpen(true);
            setData(e.message)
            //window.alert(e.message)
        }
    };

    return (
        <div className=''>
           

            <div className='chatbot_dsplay_column'>
                <div className='chatbot_display_text'>
                    <h1 className='bold_text font_32 margintop'>FAQ</h1>
                    <p className='text-sm'>
                        ChatSimple uses technology to create FAQ automatically. Start generating a list of FAQ by inputing an <br /> URL where you would like answers to created from.
                        You can also fine tune the auto-generated questions  <br />answers to your satisfaction
                    </p>
                    <div className='display_flex margintop'>
                        <div>
                            <TextField
                                label="Enter Url"
                                variant="outlined"
                                value={''}
                            />
                        </div>
                        <div className='build_button'>
                            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' >
                                Build
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table
                                    className="min-w-full border-t-4 border-solid mt-4 border-green-400 rounded-md text-center text-sm font-light border-l border-r border-l-gray-200 shadow border-r-black">
                                    <thead className="border-b font-medium border-gray-300">

                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-300 bg-gray-100">
                                            <td
                                                className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">

                                            </td>
                                            <td
                                                className="whitespace-nowrap border-r px-6 py-4 font-bold text-left border-gray-300">
                                                Question
                                            </td>
                                            <td
                                                className="whitespace-nowrap border-r px-6 py-4 font-bold text-left border-gray-300">
                                                Answer
                                            </td>

                                        </tr>
                                        <tr className="border-b border-gray-300" >
                                            <td
                                                className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">
                                                1
                                            </td>
                                            <td
                                                className=" border-r text-left px-6 py-4 border-gray-300">
                                                <input type="text" onChange={(event) => { setQuestion1(event.target.value) }} />
                                            </td>
                                            <td

                                                className="whitespace-nowrap border-r text-left px-6 py-4 border-gray-300">
                                                <input type="text" onChange={(event) => { setAnswer1(event.target.value) }} />
                                            </td>

                                        </tr>
                                        <tr className="border-b border-gray-300" colSpan="2">
                                            <td
                                                className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300">
                                                2
                                            </td>
                                            <td
                                                className="whitespace-nowrap text-left border-r px-6 py-4 border-gray-300">
                                                <input type="text" onChange={(event) => { setQuestion2(event.target.value) }} />
                                            </td>
                                            <td
                                                className="whitespace-nowrap text-left border-r px-6 py-4 border-gray-300">
                                                <input type="text" onChange={(event) => { setAnswer2(event.target.value) }} />
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-6'>
                        <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' onClick={handleFAQSubmit}>
                            Save
                        </button>
                    </div>
                </div>

            </div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                message={data}
                onClose={handleClose}
                className="muiclass"
            />
        </div>
    )
}

export default Chatbot_faq_details;