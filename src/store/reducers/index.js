import { combineReducers } from "redux";

import feedbackReducer from './userReducer'

export const rootReducer = combineReducers({

    // reducer: {
        feedback: feedbackReducer
    // }
});
