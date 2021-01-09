import { combineReducers } from 'redux';
import categoriesReducer from "./reducers/categories.reducer";

const rootReducer = combineReducers({
    categoriesReducer
});

export default rootReducer;

