import React, { Component } from 'react';
import Items from './Items';
import SearchBar from './SearchBar';
import FilterItems from './FilterItems';


class Food extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            searchField : '',
            increment : Math.round(this.calculateIncrement()),
            filter : 0
        };
    }

    renderItems(filter)
    {
        switch(filter)
        {
            case 0: 
            return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).map(i => <Items 
                item={i} 
                value={parseInt(i.id)}
                onClick={this.props.onClick}
                dValue={this.props.dValue}
                pValue={this.props.pValue} 
                clicked={this.props.clicked}
                increment={this.state.increment}
                filter={this.state.filter}
            />));
            break;

            case 1:
                return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).filter(i => Math.round((parseInt(i.price)) >= 0 && Math.round(parseInt(i.price)) <= Math.round(this.state.increment))).map(i => <Items 
                    item={i} 
                    value={parseInt(i.id)}
                    onClick={this.props.onClick}
                    dValue={this.props.dValue}
                    pValue={this.props.pValue} 
                    clicked={this.props.clicked}
                    increment={this.state.increment}
                    filter={this.state.filter}
                />));
            break;

            case 2:
                return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).filter(i => (Math.round(parseInt(i.price)) >= Math.round(this.state.increment) && Math.round(parseInt(i.price)) <= Math.round(2 * this.state.increment))).map(i => <Items 
                    item={i} 
                    value={parseInt(i.id)}
                    onClick={this.props.onClick}
                    dValue={this.props.dValue}
                    pValue={this.props.pValue} 
                    clicked={this.props.clicked}
                    increment={this.state.increment}
                    filter={this.state.filter}
                />));
            break;

            case 3:
                return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).filter(i => (Math.round(parseInt(i.price)) >= Math.round(2 * this.state.increment) && Math.round(parseInt(i.price)) <= Math.round(3 * this.state.increment))).map(i => <Items 
                    item={i} 
                    value={parseInt(i.id)}
                    onClick={this.props.onClick}
                    dValue={this.props.dValue}
                    pValue={this.props.pValue} 
                    clicked={this.props.clicked}
                    increment={this.state.increment}
                    filter={this.state.filter}
                />));
            break;

            case 4:
                return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).filter(i => (Math.round(parseInt(i.price)) >= Math.round(3 * this.state.increment) && Math.round(parseInt(i.price)) <= Math.round(4 * this.state.increment))).map(i => <Items 
                    item={i} 
                    value={parseInt(i.id)}
                    onClick={this.props.onClick}
                    dValue={this.props.dValue}
                    pValue={this.props.pValue} 
                    clicked={this.props.clicked}
                    increment={this.state.increment}
                    filter={this.state.filter}
                />));
            break;

            case 5:
                return (this.props.inventoryData.filter(data =>data.Name.toLowerCase().includes(this.state.searchField.toLowerCase())).filter(i => (Math.round(parseInt(i.price)) >= Math.round(4 * this.state.increment) && Math.round(parseInt(i.price)) <= Math.round(5 * this.state.increment))).map(i => <Items 
                    item={i} 
                    value={parseInt(i.id)}
                    onClick={this.props.onClick}
                    dValue={this.props.dValue}
                    pValue={this.props.pValue} 
                    clicked={this.props.clicked}
                    increment={this.state.increment}
                    filter={this.state.filter}
                />));
            break;
        }
        
    }

    handleChange = (e) =>
    {
        this.setState({searchField : e.target.value});
    }

    handleFilter = (i) =>
    {
        this.setState({filter : i});
    }

    calculateIncrement()
    {
        let high = Math.round(parseInt(this.props.inventoryData[0].price));
        for (let i = 1;i < this.props.inventoryData.length;i++)
        {
            if (high < Math.round(parseInt(this.props.inventoryData[i].price)))
            {
                high = Math.round(parseInt(this.props.inventoryData[i].price));
            }
        }
        let newIncrement = Math.round((high / 5));
        return newIncrement;
    }

    renderFilter()
    {
        return <FilterItems onClick={this.handleFilter} increment={this.state.increment}/>
    }

    render()
    {
        if (this.props.pValue === 1)
        {
            return(
                <div>
                    <div className="foodPicDiv">
                        <img src="/Images/Food.jpg" alt="food" className="pic"/>
                        <pre className="food"> Food</pre>
                    </div>
                    <div className="sidebar">
                        <div><SearchBar handleChange={this.handleChange} department=" Food "/></div>
                        <div>{this.renderFilter()}</div>
                    </div>
                    <div className="items">{this.renderItems(this.state.filter)}</div>
               </div>
            );
        }
    }
}
 
export default Food;