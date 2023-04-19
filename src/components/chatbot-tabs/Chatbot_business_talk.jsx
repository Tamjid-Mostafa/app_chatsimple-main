import { TextField, Switch } from '@mui/material';
import { Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from "react-redux";
import trash from '../../assets/images/svg/trash.svg'
import ConversationCard from './ConversationCard';
import Cross from '../../icons/Cross';
import Add from "../../assets/images/svg/Add.svg";
import AddChannelButton from '../Buttons/AddChannelButton';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { EditableElement } from '../EditableElement/EditableElement';


const Chatbot_business_talk = ({ changeChatBotTab }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [businessName, setBusinessName] = useState("")
    const [businessHours, setBusinessHours] = useState("")
    const [industry, setIndustry] = useState("")
    const [history, setHistory] = useState("")
    const [supportEmail, setSupportEmail] = useState("")
    const [open, setOpen] = useState(false);
    const [data, setData] = useState("")
    const [inputs, setInputs] = useState([""]);
    const [edit, setEdit] = useState(false)
    const initialValue = "Custom Fields";
    const [value, setValue] = useState(initialValue);

    const handleClose = () => {
        setOpen(false);
    };
    const { user } = useSelector((state) => state.user);


    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleBusinessDetails = async () => {
        const data = {
            expertise_title: "Business Small Talk",
            expertise_type: "FAQ",
            form_information: {
                business_small_talk: [
                    {
                        businessName: businessName,
                        businessHours: businessHours,
                        industry: industry,
                        history: history,
                        supportEmail: supportEmail,
                        custom_fields: {inputs, value}
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
            console.log(response.data.message)
            // window.alert(response.data.message);
        }
        catch (e) {
            setOpen(true);
            setData(e.message)
            //window.alert(e.message)
        }
    }




    const handleInputChange = (e, index) => {
        const { value } = e.target;
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
        console.log(inputs)
    };
    const handleChange = (value) => {
        setValue(value);
    };

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index);
        setInputs(newInputs);
    };


    return (
        <div className='display_flex'>
            <div>
                <div className='chatbot_header_top'>
                    <h2 className='bold_text'>Name your Chatbot</h2>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={''}
                    />
                </div>

                <div>
                    <h2 className='bold_text'>Select Chatbot Expertise</h2>

                    <div className='expertise_box display_flex'>
                        <div className='faq_text'>
                            <p> FAQ</p>
                        </div>
                        <div className='chatbot_toggle_button'>
                            <Switch />
                        </div>
                    </div>

                    <div className='expertise_box display_flex'>
                        <div className='faq_text'>
                            <p> Business small talk</p>
                        </div>
                        <div className='chatbot_toggle_button2'>
                            <Switch
                                checked={true}
                                onClick={() => changeChatBotTab(2)}
                            />
                        </div>
                    </div>

                    <div className='expertise_box display_flex'>
                        <div className='faq_text'>
                            <p>Business Goal</p>
                        </div>
                        <div className='chatbot_toggle_button3'>
                            <Switch />
                        </div>
                    </div>

                </div>

            </div >

            <div className='chatbot_dsplay_column'>
                <div className='chatbot_display_text'>
                    <h1 className='bold_text font_32 margintop'>Business Small Talk</h1>
                    <p className='text-sm'>
                        Tell us somethings about your business so that ChatSimple will chat with your customers and provide appropriate <br /> human like responses to help you handle general inquiries
                        related to your business. All we need is name of your<br />  business. If you would like chatbot to be more robust, select additional custom fields to personalise the bot to<br />  your business needs
                    </p>
                    <div className='display_flex margintop'>
                        <div>
                            <TextField
                                label="Business Name"
                                variant="outlined"
                                value={businessName}
                                onChange={(event) => setBusinessName(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='margintop'>
                        <h2 className='chatbot_business-text'>Personalise your bot</h2>
                        <p className='text-sm margintoptext'>
                            Select from a list of common fields other businesses use or build your own custom fields.
                        </p>
                    </div>

                    <div className='margintop'>
                        <TextField
                            label="Business Hours"
                            variant="outlined"
                            value={businessHours}
                            onChange={(event) => setBusinessHours(event.target.value)}
                        />
                    </div>
                    <div className='margintop'>
                        <TextField
                            label="Industry"
                            variant="outlined"
                            value={industry}
                            onChange={(event) => setIndustry(event.target.value)}
                        />
                    </div>
                    <div className='margintop'>
                        <TextField
                            label="History"
                            variant="outlined"
                            value={history}
                            onChange={(event) => setHistory(event.target.value)}
                        />
                    </div>
                    <div className='margintop'>
                        <TextField
                            label="Support Email"
                            variant="outlined"
                            value={supportEmail}
                            size="small"
                            onChange={(event) => setSupportEmail(event.target.value)}
                        />
                    </div>
                    <button className='flex items-center gap-2 bg-[#66B467] text-xs text-white px-4 py-2.5 rounded-full' onClick={handleAddInput}>
                        <img src={Add} alt="" />
                        Add Field
                    </button>

                    {inputs.map((input, index) => (
                        <div key={index} className="flex items-center gap-5">
                            <div className='margintop'>
                                <EditableElement onChange={handleChange}>
                                    <div style={{ outline: "none" }}
                                    className='flex items-center gap-3'
                                    >
                                        <p>{initialValue}</p>
                                        <DriveFileRenameOutlineIcon className='cursor-pointer'
                                        />
                                    </div>
                                </EditableElement>
                                <TextField
                                    variant="outlined"
                                    value={input}
                                    size="small"
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                            </div>
                            {inputs.length >= 2 ?
                                <button button type="button" onClick={() => handleRemoveInput(index)}>
                                    <img src={trash} alt="" />
                                </button> : ""}

                        </div>
                    ))
                    }

                    <div className=''>
                        <div className='margintop'>
                            <TextField
                                label="Comments"
                                variant="outlined"
                                value={supportEmail}
                                size="normal"
                                onChange={(event) => setSupportEmail(event.target.value)}
                            />
                        </div>
                        <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full' onClick={handleBusinessDetails}>
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

export default Chatbot_business_talk;