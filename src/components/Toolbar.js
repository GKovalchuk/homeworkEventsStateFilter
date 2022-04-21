import React, { Component } from 'react';

export class Toolbar extends Component {
    onSelectFilter = () => {
        this.props.onSelectFilter(this.props.item);
    }


    render() {
        const { filter, selected } = this.props;
        return (
            <button className={selected === filter ? 'filter selected' : 'filter'} onClick={this.onSelectFilter}>{filter}</button>
        )
    }
}
export default Toolbar;