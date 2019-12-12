import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../../../css/beer-list/beerList.css';

class BeerListItem extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        style: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className={styles.item} >
                <div>{this.props.name}</div>
                <div>{this.props.style}</div>
            </div>
        );
    }
}

export default BeerListItem;
