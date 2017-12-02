import React from 'react'
import Recipe from './components/Recipe';
import { Provider } from 'react-redux';
import configureStore from './redux/RecipeStore'

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Recipe/>
            </Provider>
        )
    }
}