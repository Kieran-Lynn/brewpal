import React from 'react'
import RecipeContainer from './containers/RecipeContainer';
import {Provider} from 'react-redux';
import configureStore from './redux/RecipeStore'

let store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RecipeContainer/>
            </Provider>
        )
    }
}