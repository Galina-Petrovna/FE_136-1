// import { combineReducers, configureStore} from "@reduxjs/toolkit";
// import userReducer from "./reducers/userReducer";

// const rootReducer = combineReducers({
//     calc: userReducer

// });

// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer
//     })
// };

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { rootReducer } from "./../store/reducers";

export const store = createStore(
	rootReducer,

	composeWithDevTools(applyMiddleware(thunk))

);
