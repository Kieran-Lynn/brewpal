import React from 'react';
import Recipe from './recipe/components/Recipe';
import BeerList from './beer-list/components/BeerList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <BeerList />
                <Recipe />
            </div>
        );
    }
}
