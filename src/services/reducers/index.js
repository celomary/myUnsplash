import { combineReducers } from "@reduxjs/toolkit";
import { postsReducer } from "./postsReducer";

export const rootReducer = combineReducers({
    postsReducer
});
