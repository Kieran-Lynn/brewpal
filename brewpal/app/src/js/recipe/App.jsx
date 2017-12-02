import React from 'react';
import { Provider } from 'react-redux';
import Recipe from './components/Recipe';
import configureStore from './redux/RecipeStore';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Recipe />
            </Provider>
        );
    }
}
