import React from 'react';
import axios from 'axios';
import cookies from 'browser-cookies';
import styles from '../../../css/beer-list/beerList.css';
import BeerListItem from './BeerListItem';

class BeerList extends React.Component {
    state = {
        beers: [],
    }
    componentDidMount() {
        const csrftoken = cookies.get('csrftoken');
        axios.get('/api/beers', { headers: { 'X-CSRFToken': csrftoken } })
            .then((response) => {
                response.data.forEach((item) => {
                    const beer = {
                        id: item.id,
                        name: item.name,
                        style: item.style,
                    };
                    this.setState({
                        beers: this.state.beers.concat(beer),
                    });
                });
            })
            .catch((error) => {});
    }

    getListItems() {
        const list = this.state.beers.map(beer => (
            <BeerListItem
                key={beer.id}
                name={beer.name}
                style={beer.style}
            />
        ));
        return list;
    }

    render() {
        return (
            <div className={styles.sidebar} >
                <h3>Your Beers</h3>
                {this.getListItems()}
            </div>
        );
    }
}

export default BeerList;
