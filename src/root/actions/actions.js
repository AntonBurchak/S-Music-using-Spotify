import * as constants from '../constants/constants';
import apiClient from '../../apiClient/apiClient';

export const getCategoriesList = () => (dispatch) => {
    dispatch(getCategories);

    apiClient.getListOfCategories()
        .then(response => {
            dispatch(setCategories(response.categories))
        })
        .catch(error => {
            console.log('ERR ', error)
        })
}

export const getCategories = () => ({
    type: constants.GET_CATEGORIES
})

export const setCategories = (categories) => ({
    type: constants.SET_CATEGORIES,
    categories
})