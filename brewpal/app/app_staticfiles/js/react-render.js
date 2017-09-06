import ReactDOM from "react-dom";
import React from "react";
import Recipe from './components/recipe';
import {AppContainer} from "react-hot-loader";

ReactDOM.render(
    <AppContainer>
        <Recipe/>
    </AppContainer>,
    document.getElementById('ReactContainer')
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/recipe.js', () => {
        ReactDOM.render(
            <AppContainer>
                <Recipe/>
            </AppContainer>,
            document.getElementById('ReactContainer')
        );
    });
}