import { createStore } from "redux";
import rootReducer from "./root.Reducer";

export const store = createStore(rootReducer);

export default store;
