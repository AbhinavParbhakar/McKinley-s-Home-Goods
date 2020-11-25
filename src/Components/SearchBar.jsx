import React, { Component } from 'react';

class SearchBar extends Component
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
                 <input type="search"
                    className="search"
                    placeholder={"Search"+this.props.department}
                    onChange={(e) => this.props.handleChange(e)}
                    />
                );
    }
}

export default SearchBar;

