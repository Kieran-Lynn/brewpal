/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import configureStore from './recipe/redux/RecipeStore';
// LEAVE THIS IMPORT FOR BOOTSTRAP STYLING
import styles from './../css/global/global.css';

const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('ReactContainer'),
    );
};


render(App);

if (module.hot) {
    module.hot.accept();
}
