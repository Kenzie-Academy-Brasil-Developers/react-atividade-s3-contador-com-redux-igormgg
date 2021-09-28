import { combineReducers, createStore } from "redux";
import reducerCounter from "./modules/counter/reducer";

const reducers = combineReducers({ counter: reducerCounter });

const store = createStore(reducers);

export default store;
