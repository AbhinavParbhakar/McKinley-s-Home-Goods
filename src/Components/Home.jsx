import React, { Component } from 'react';
import Items from './Items';
import SearchBar from './SearchBar';


class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchField : '----'
        };
    }

    renderItems()
    {
        if (this.state.searchField !='')
        {
            return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).map(i => <Items item={i} 
                value={parseInt(i.id)}
                onClick={this.props.clickSave}
                dValue={0}
                pValue={this.props.value} 
                clicked={this.props.inventoryBoolean}
            />));
        }
    }

    handleChange = (e) =>
    {
        this.setState({searchField : e.target.value});
    }

    render()
    {
        if (this.props.value === 0)
        {
            return(
                <div>
                    <img src="/Images/logo.png" className="Home" alt="Logo"/>
                    <div className="Search"><SearchBar handleChange={this.handleChange} department=" "/></div>
                    <div className="items">{this.renderItems()}</div>
               </div>
            );
        }
    }
}

export default Home;