import { TextField, Switch } from '@mui/material';
import { Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import ConversationCard from './ConversationCard';
const Chatbot_faq_details = ({ changeChatBotTab }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [isChecked, setIsChecked] = useState(false);
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [url, setUrl] = useState('');
  const [faqs, setFaqs] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // handleFAQSubmit(data)
    console.log({ data });
  };

  const handleFAQSubmit = async () => {
    let data = {
      expertise_title: 'FAQ',
      expertise_type: 'FAQ',
      form_information: {
        faqs: [
          {
            question: question1,
            answer: answer1,
          },
          {
            question: question2,
            answer: answer2,
          },
        ],
      },
      is_active: 'True',
      chatbot_id: uuidv4(),
    };
    let headers = {
      'x-access-token': 'skip_validation_for_admin',
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post(
        `https://api.chatsimple.ai/v0/users/${
          user.user_id
        }/chatbot_expertises/${uuidv4()}`,
        data,
        { headers }
      );
      setOpen(true);
      setData(response.data.message);
      // window.alert(response.data.message);
    } catch (e) {
      setOpen(true);
      setData(e.message);
      //window.alert(e.message)
    }
  };

  const buildFaq = async () => {
    try {
      let headers = {
        'x-access-token': 'skip_validation_for_admin',
        'Content-Type': 'application/json',
      };
      const response = await axios.post(
        `https://api.chatsimple.ai/v0/users/${user.user_id}/chatbot_expertises/extractfaq`,
        { url: url },
        { headers }
      );
      setFaqs(response.data);
    } catch (error) {
      setData(e.message);
    }
  };

  //   console.log(faqs?.question[0]);

  //   const result = Array.from(Object.keys(faqs?.question), (item, index) => {
  //     return [question1: item.key[]];
  //   });

  const faqArray = [];

  // faqs &&
  //   Object.keys(faqs?.question).forEach((qKey) => {
  //     Object.keys(faqs?.answer).forEach((aKey) => {

  //       if (faqArray.some(ele => ele.question !== faqs?.question[qKey] && ele.answer !== faqs?.answer[aKey])) {
  //         faqArray.push({
  //           question: faqs.question[qKey],
  //           answer: faqs.answer[aKey],
  //         });
  //         console.log('Hello')
  //       }
  //       console.log(faqArray.some(ele => ele.question !== faqs?.question[qKey] && ele.answer !== faqs?.answer[aKey]))
      
  //     });
  //   });
  // console.log(faqArray);

  return (
    <div className='display_flex'>
      <div>
        <div className='chatbot_header_top'>
          <h2 className='bold_text'>Name your Chatboat</h2>
          <TextField label='Name' variant='outlined' value={''} />
        </div>

        <div>
          <h2 className='bold_text'>Select Chatbot Expertise</h2>

          <div className='expertise_box display_flex'>
            <div className='faq_text'>
              <p> FAQ</p>
            </div>
            <div className='chatbot_toggle_button'>
              <Switch checked={true} onClick={() => changeChatBotTab(2)} />
            </div>
          </div>

          <div className='expertise_box display_flex'>
            <div className='faq_text'>
              <p> Business small talk</p>
            </div>
            <div className='chatbot_toggle_button2'>
              <Switch />
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
      </div>

      <div className='chatbot_dsplay_column'>
        <div className='chatbot_display_text'>
          <h1 className='bold_text font_32 margintop'>FAQ</h1>
          <p className='text-sm'>
            ChatSimple uses technology to create FAQ automatically. Start
            generating a list of FAQ by inputing an <br /> URL where you would
            like answers to created from. You can also fine tune the
            auto-generated questions <br />
            answers to your satisfaction
          </p>
          <div className='display_flex margintop'>
            <div>
              <TextField
                onChange={(event) => setUrl(event.target.value)}
                label='Enter Url'
                variant='outlined'
              />
            </div>
            <div className='build_button'>
              <button
                onClick={buildFaq}
                className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full'
              >
                Build
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
          <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
              <div className='overflow-hidden'>
                <table className='min-w-full border-t-4 border-solid mt-4 border-green-400 rounded-md text-center text-sm font-light border-l border-r border-l-gray-200 shadow border-r-black'>
                  <thead className='border-b font-medium border-gray-300'></thead>
                  <tbody>
                    <tr className='border-b border-gray-300 bg-gray-100'>
                      <td className='whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300'></td>
                      <td className='whitespace-nowrap border-r px-6 py-4 font-bold text-left border-gray-300'>
                        Question
                      </td>
                      <td className='whitespace-nowrap border-r px-6 py-4 font-bold text-left border-gray-300'>
                        Answer
                      </td>
                    </tr>
                    {!faqs && (
                      <>
                        <tr className='border-b border-gray-300'>
                          <td className='whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300'>
                            1
                          </td>
                          <td className=' border-r text-left px-6 py-4 border-gray-300'>
                            <input type='text' {...register('question1')} />
                          </td>
                          <td className='whitespace-nowrap border-r text-left px-6 py-4 border-gray-300'>
                            <input type='text' {...register('answer1')} />
                          </td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                          <td className='whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300'>
                            2
                          </td>
                          <td className=' border-r text-left px-6 py-4 border-gray-300'>
                            <input type='text' {...register('question2')} />
                          </td>
                          <td className='whitespace-nowrap border-r text-left px-6 py-4 border-gray-300'>
                            <input type='text' {...register('answer2')} />
                          </td>
                        </tr>
                      </>
                    )}

                    {faqs &&
                      Object.keys(faqs?.question).map((key, i) => (
                        <tr
                          key={i++}
                          className='border-b border-gray-300'
                          colspan='2'
                        >
                          <td className='whitespace-nowrap border-r px-6 py-4 font-medium border-gray-300'>
                            {++i}
                          </td>
                          <td className='whitespace-nowrap text-left border-r px-6 py-4 border-gray-300'>
                            <input
                              defaultValue={faqs.question[key]}
                              type='text'
                              name={++i}
                              {...register(`question${i++}`)}
                            />
                          </td>
                          <td className='whitespace-nowrap text-left border-r px-6 py-4 border-gray-300'>
                            <input
                              defaultValue={faqs.answer[key]}
                              name={++i}
                              type='text'
                              // {...register(`answer${i++}`)}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-6'>
            <button className='text-sm text-white px-5 bg-[#66B467] py-2 rounded-full'>
              Save
            </button>
          </div>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={data}
        onClose={handleClose}
        className='muiclass'
      />
    </div>
  );
};

export default Chatbot_faq_details;
