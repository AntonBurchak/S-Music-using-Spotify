import * as constants from '../constants/constants';

const initialState = {
    categories: null
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_CATEGORIES: {
            const  { categories } = action;

            return { ...state, categories};
        }
        case constants.GET_CATEGORIES: {
            return state;
        }
        default: {
            return state;
        }
    }
};

export default categoriesReducer;