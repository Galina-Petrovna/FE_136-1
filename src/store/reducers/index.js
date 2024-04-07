import { combineReducers } from "redux";
import feedbackReducer from './userReducer'

export const rootReducer = combineReducers({
        feedback: feedbackReducer
});
