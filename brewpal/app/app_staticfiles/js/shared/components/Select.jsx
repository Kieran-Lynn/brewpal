import React from 'react'
import PropTypes from 'prop-types';

export default class Select extends React.Component {

    getOptionElements = () => {
        let options = [];
        for(let option of this.props.options){
            options.push(<option key={option.value} value={option.value}>{option.option}</option>)
        }

        return options;
    };

    render() {
        return (
            <div>
                {this.props.label}
                <select
                    name={this.props.name}
                    value={this.props.value}
                    onChange={(event) => this.props.onChange(event, this.props.index)}
                >
                    {this.getOptionElements()}
                </select>
            </div>
        )
    }
}

Select.PropTypes = {
    label: PropTypes.string,
    index: PropTypes.number.required,
    name: PropTypes.string.required,
    value: PropTypes.string.required,
    options: PropTypes.array.required,
    onChange: PropTypes.func.required
}