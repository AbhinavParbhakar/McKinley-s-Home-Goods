import React, { Component } from 'react';
import AboutUs from './AboutUs';
import SearchBar from './SearchBar';
import FilterItems from './FilterItems';
import CurrentPage from './CurrentPage';
import Home from './Home';

class Page extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        };
    }

    renderCurrentPage()
    {
        switch(this.props.value)
        {
            case 0:
                return <Home value={this.props.value} clickSave={this.props.clickSave}  inventoryData={this.props.inventoryData}
                inventoryBoolean={this.props.inventoryBoolean} time={this.props.time} handleTime={this.props.handleTime}/>;
            break;
            case 7:

                return <AboutUs value={this.props.value}/>;
            break;
            default : return <CurrentPage value={this.props.value} 
            clickSave={this.props.clickSave} 
            clickDelete={this.props.clickDelete}
            inventoryData={this.props.inventoryData}
            inventoryBoolean={this.props.inventoryBoolean}
            total={this.props.total}
            checkOut={this.props.checkOut}
            />;
        }
    }
    renderSearchBar()
    {}

    renderFilterItems()
    {}

    render()
    {
        return(
            <div>
                {this.renderCurrentPage()}
            </div>
        );
    }
}

export default Page;

