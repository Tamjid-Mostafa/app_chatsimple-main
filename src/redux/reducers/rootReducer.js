import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import facebookSlice from "./facebookSlice";
import userSlice from "./userSlice";
import chatbotSlice from "./chatbotSlice";

// this file

const rootReducer = combineReducers({
  auth: authSlice,
  fb: facebookSlice,
  user: userSlice,
  chatbot: chatbotSlice,
});

export default rootReducer;