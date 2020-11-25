import React, { Component } from 'react';

class FilterItems extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        };
    }

    render()
    {
        return ( 
        <React.Fragment>
            <input type="radio" id="NoFilter" onClick={() => this.props.onClick(0)} name="filter"/>
            <label htmlFor="NoFilter">No Filter</label><br/>

            <input type="radio" id="o1" onClick={() => this.props.onClick(1)} name="filter"/>
            <label htmlFor="o1">$0 - ${(this.props.increment).toFixed(2)}</label><br/>

            <input type="radio" id="o2" onClick={() => this.props.onClick(2)} name="filter"/>
            <label htmlFor="o2">${(this.props.increment).toFixed(2)} - ${(2 * (this.props.increment)).toFixed(2)}</label><br/>

            <input type="radio" id="o3" onClick={() => this.props.onClick(3)} name="filter"/>
            <label htmlFor="o3">${(2 * (this.props.increment)).toFixed(2)} - ${(3 * (this.props.increment)).toFixed(2)}</label><br/>

            <input type="radio" id="o4" onClick={() => this.props.onClick(4)} name="filter"/>
            <label htmlFor="o4">${(3 * (this.props.increment)).toFixed(2)} - ${(4 * (this.props.increment)).toFixed(2)}</label><br/>

            <input type="radio" id="o5" onClick={() => this.props.onClick(5)} name="filter"/>
            <label htmlFor="o5">${(4 * (this.props.increment)).toFixed(2)} - ${(5 * (this.props.increment)).toFixed(2)}</label><br/>
        </React.Fragment>
            );
    }
}

export default FilterItems;


