import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// this files

const options = {
  'x-access-token': 'skip_validation_for_admin',
  'Content-Type': 'application/json',
};

export const allChatBots = createAsyncThunk('chatbot/list', async (data) => {
  const response = await axios.post(
    `https://api.chatsimple.ai/v0/users/${data?.userID}/chatbots`,
    data?.pageToken,
    { headers: options }
  );
  return response.data;
});

export const createChatBot = createAsyncThunk(
  'chatbot/create',
  async (data) => {
    const response = await axios.post(
      `https://api.chatsimple.ai/v0/users/${data?.userID}/chatbots/${data?.chatbotID}`,
      data?.chatbotDetail,
      { headers: options }
    );
    return response.data;
  }
);

export const updateChatBot = createAsyncThunk(
  'chatbot/update',
  async (data) => {
    const response = await axios.put(
      `https://api.chatsimple.ai/v0/users/${data?.userID}/chatbots/${data?.chatbotID}?update_mask=${data?.update_mask}`,
      data?.data ,
      { headers: options }
    );
    return response.data;
  }
);

export const deleteChatBot = createAsyncThunk(
  'chatbot/delete',
  async (data) => {
    const response = await axios.delete(
      `https://api.chatsimple.ai/v0/users/${data?.user_id}/chatbots/${data?.chatbot_id}`,
      { headers: options }
    );
    return response.data;
  }
);

const initialState = {
  loading: false,
  chatBots: null,
  error: null,
  status: null,
};

const chatBotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {},
  extraReducers: {
    [allChatBots.pending]: (state, action) => {
      state.loading = true;
    },
    [allChatBots.fulfilled]: (state, action) => {
      state.loading = false;
      state.chatBots = action.payload;
    },
    [allChatBots.rejected]: (state, action) => {
      state.loading = false;
    },
    [createChatBot.pending]: (state, action) => {
      state.loading = true;
    },
    [createChatBot.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createChatBot.rejected]: (state, action) => {
      state.loading = false;
    },
    [updateChatBot.pending]: (state, action) => {
      state.loading = true;
    },
    [updateChatBot.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [updateChatBot.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteChatBot.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteChatBot.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [deleteChatBot.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export default chatBotSlice.reducer;
