import React from 'react'

export default class TextArea extends React.Component {
    render() {
        return (
            <div>
                <label>
                    {this.props.label}
                    <textarea
                        name={this.props.name}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                </label>
            </div>
        )
    }
}
