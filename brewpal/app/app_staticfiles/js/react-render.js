import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Recipe from './components/recipe';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('ReactContainer')
    );
}

render(Recipe)

if(module.hot) {
    module.hot.accept();
}