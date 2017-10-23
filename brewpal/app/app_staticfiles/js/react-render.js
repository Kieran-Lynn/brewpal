import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './recipe/App';
//LEAVE THIS IMPORT FOR BOOTSTRAP STYLING
import styles from './../css/global/global.css'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('ReactContainer')
    );
};

render(App);

if(module.hot) {
    module.hot.accept();
}