import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import APIController, { getCookie } from './apiClient/apiClient';
import store from './root/configureStore';
import './player';
import 'normalize-scss';
import {Provider} from "react-redux";


window.getCookie = getCookie;

const apiInstance = APIController;
apiInstance.getListOfCategories()
apiInstance.searchByTrackName('triflin');



const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

const root = document.getElementById('root');


ReactDOM.render(app, root);
reportWebVitals();
