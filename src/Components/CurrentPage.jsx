import React, { Component } from 'react';
import Items from './Items';
import VirtualCart from './VirtualCart';
import Food from './Food';
import Appliances from './Appliances';
import Clothing from './Clothing';
import Technology from './Technology';
import Furniture from './Furniture';

class CurrentPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        };
    }

    renderItemsOrCart()
    {
        switch(this.props.value)
        {
            case 1:
                return <Food inventoryData={this.props.inventoryData.filter(i =>i.department==="Food")} onClick={this.props.clickSave} dValue={1} pValue={this.props.value} clicked={this.props.inventoryBoolean} />;
            
            break;
            case 2:
                return <Appliances inventoryData={this.props.inventoryData.filter(i =>i.department==="Appliances")} onClick={this.props.clickSave} dValue={2} pValue={this.props.value} clicked={this.props.inventoryBoolean} />;
        
            break;
            case 3:
                return <Clothing inventoryData={this.props.inventoryData.filter(i =>i.department==="Clothing")} onClick={this.props.clickSave} dValue={3} pValue={this.props.value} clicked={this.props.inventoryBoolean} />;
          
            break;
            case 4:
                return <Technology inventoryData={this.props.inventoryData.filter(i =>i.department==="Tech")} onClick={this.props.clickSave} dValue={4} pValue={this.props.value} clicked={this.props.inventoryBoolean} />;
    
            break;
            case 5:
                return <Furniture inventoryData={this.props.inventoryData.filter(i =>i.department==="Furniture")} onClick={this.props.clickSave} dValue={5} pValue={this.props.value} clicked={this.props.inventoryBoolean} />;
            break;
            default : return <VirtualCart items={this.props.inventoryData} total={this.props.total} itemsClicked={this.props.inventoryBoolean} dValue={6} pValue={this.props.value} onClick={this.props.clickDelete} checkOut={this.props.checkOut}/>;
        }
    }

    render()
    {
        console.log("CurrentPage - rendered");
        return (
            <div>
                {this.renderItemsOrCart()}
            </div>
        );
    }
}

export default CurrentPage;

