import { TextField, Switch, Alert, CircularProgress } from '@mui/material';
import { Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from "react-redux";

import ConversationCard from './ConversationCard';
import ActionAlert from '../Alert/ActionAlert';
import MySnackbar from '../ui/MySnackbar/MySnackbar';
const Chatbot_business_goal = ({ changeChatBotTab }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
        setSuccess(false);
    };


    const { user } = useSelector((state) => state.user);

    const handleCreate = async () => {
        setLoading(true);
        let data = {
            expertise_title: "Business Goal",
            expertise_type: "FREE_FORM",
            form_information: {
                business_small_talk: [
                    {
                        name: name,
                        position: position,
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
            setSuccess(true);
            setLoading(false);
            setSnackbarMessage(response.data.message)
            //window.alert(response.data.message);

        }
        catch (e) {
            setError(true);
            setSnackbarMessage(e.message)
            // window.alert(e.message)
        }
    }


    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className='display_flex'>


                <div className='chatbot_dsplay_column'>
                    <div className='chatbot_display_text'>
                        <h1 className='bold_text font_32 margintop'>Business Goal</h1>
                        <p >
                            Design a chatbot that knows your goal and acts like a brand ambassador! depending on the position <br /> you assigns, the bot will model itself after the corporate
                            identity in appearance, demanour and values. <br /> <br />
                            Name Your chatbot and tell us what position you wish your bot to taken on.
                        </p>

                        <div className='display_flex margintop'>
                            <div>
                                <TextField
                                    label="Name"
                                    className='muitextfield'
                                    variant="outlined"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className='display_flex margintop'>
                            <div>
                                <TextField
                                    label="Position"
                                    className='muitextfield_position'
                                    variant="outlined"
                                    value={position}
                                    onChange={(event) => setPosition(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className=''>
                            <button className='text-sm text-white px-5 w-32 h-10 bg-[#66B467] py-2 rounded-full disabled:bg-gray-200'
                                disabled={loading}
                                onClick={handleCreate}>
                                {loading ? <CircularProgress
                                    size={16}
                                /> : "Create"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <MySnackbar
                open={success}
                handleClose={handleClose}
                message={snackbarMessage}
                variant='success'
            />
            <MySnackbar
                open={error}
                handleClose={handleClose}
                message={snackbarMessage}
                variant='error'
            />
        </>
    )
}

export default Chatbot_business_goal;