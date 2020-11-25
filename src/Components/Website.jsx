import React, { Component } from 'react';
import Menu from './Menu';
import Page from './Page';
import Inventory from '../Inventory.json';
import '../Styles/Website.css';
import '../Styles/Home.css';
import '../Styles/Menu.css';
import '../Styles/Departments.css';
import '../Styles/SearchBar.css';

class Website extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        
            buttonValues : ["Home","Food","Appliances","Clothing","Technology","Furniture","Virtual Cart","About us"],
            currentButton : 0,
            data : this.setData(),
            dataClicked : new Array(Inventory.length).fill(false),
            total: parseFloat((0).toFixed(2)),
            itemsInCart : 0,
            currentTime : this.setTime(),
            mTime : this.setMTime()
        };
    }

    renderMenu()
    {
        return (<Menu buttonValues={this.state.buttonValues} click={this.handleMenu} itemsInCart={this.state.itemsInCart}/>);
    } 

    handleMenu = (i) =>
    {
        this.setState({currentButton : i, currentTime : this.setTime(), mTime : this.setMTime()});
    }

    handleTime = () =>
    {
        let mTimeArray = this.state.mTime.split(':');
        if (parseInt(mTimeArray[0]) >= 7 && parseInt(mTimeArray[0]) < 19)
        {
            return "Open";
        }
        else
        {
            return "Closed";
        }
    }

    setMTime()
    {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let time = hours + ":" + minutes;
        return time;
    }

    setTime()
    {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let time = hours + ":" + minutes;
        let timeArray = time.split(':');
        let newTime;

        if (timeArray[0] > 0 && timeArray[0] < 13)
        {
            newTime = timeArray[0] + ":";
        }
        else if (timeArray[0] > 12)
        {
            newTime = (timeArray[0] - 12) + ":";
        }
        else
        {
            newTime = 12 + ":"
        }
      
        if (timeArray[1] < 10)
        {
            newTime += "0" + timeArray[1];
        }
        else
        {
            newTime += timeArray[1];
        }

        if (timeArray[0] >= 12)
        {
            newTime += " PM";
        }
        else
        {
            newTime += " AM"
        }

        return (newTime);
    }

    setData()
    {
        let newData = [...Inventory];

        for (let i = 0; i < Inventory.length;i++)
        {
            newData[i].price = Math.round(parseInt(newData[i].price));
        }
        return newData;
    }

    renderPage() 
    {
        return <Page 
        value={this.state.currentButton} 
        clickSave={this.saveItem} 
        clickDelete={this.deleteItem}
        inventoryData={this.state.data}
        inventoryBoolean={this.state.dataClicked}
        total={this.state.total}
        checkOut ={this.checkOut}
        />;
    }

    saveItem = (i) =>
    {
        let newClicked = [...this.state.dataClicked];
        let newTotal = this.state.total;
        let newData = [...this.state.data];
        let newItemsInCart = this.state.itemsInCart;

        if (this.state.data[i].stock == 0)
        {
            console.log(this.state.data[i].Name + " is out of stock.");
            alert(this.state.data[i].Name + " is out of stock.");
        }
        else{
            if (newClicked[i] == false)
            {
                let newStock =parseInt(newData[i].stock);
                newStock--;
                newData[i].stock = newStock.toString();

                newItemsInCart++;
                newTotal += parseInt(this.state.data[i].price);
            }
            newClicked[i] = true;
            this.setState({dataClicked : newClicked, total : parseFloat(newTotal.toFixed(2)), itemsInCart : newItemsInCart, data : newData,currentTime : this.setTime(), mTime : this.setMTime()});
        }
    }

    deleteItem = (i) =>
    {
        let newData = [...this.state.data];
        let newTotal = this.state.total;
        let newClicked = [...this.state.dataClicked];
        let newItemsInCart = this.state.itemsInCart;
        let newStock =parseInt(newData[i].stock);

        newStock++;
        newData[i].stock = newStock.toString();
        newTotal -= parseInt(this.state.data[i].price);
        newItemsInCart --;
        newClicked[i] = false;
        this.setState({dataClicked : newClicked, total : parseFloat(newTotal.toFixed(2)), itemsInCart : newItemsInCart, data : newData, currentTime : this.setTime(), mTime:this.setMTime()});
    }

    checkOut = () =>
    {
        let newData = this.state.data;
        let newDataClicked = this.state.dataClicked;
        let newTotal = this.state.total;
        let newItemsInCart = this.state.itemsInCart;
      for (let i = 0;i < newData.length;i++)
      {
            if (newDataClicked[i] == true)
            {
                newDataClicked[i] = false;
                newItemsInCart--;
                newTotal -= parseInt(newData[i].price);
            }
      }

      this.setState({dataClicked : newDataClicked, total : newTotal, itemsInCart : newItemsInCart, currentTime : this.setTime(), mTime : this.setMTime()});
    }

    renderTime()
    {
        if (this.handleTime() == "Open")
        {
            return <p className="time">
                    <p className="currentTime">{this.state.currentTime}</p>
                    <p style={{color:"green"}}>{this.handleTime()}</p>
                    </p>;
        }
        else{
            return <p className="time">
                    <p className="currentTime">{this.state.currentTime}</p>
                    <p style={{color:"red"}}>{this.handleTime()}</p>
                    </p>;
        }
    }

    render()
    {
        console.log(this.state.currentButton);
        return(
            <div>
                <div className="nav">
                    <div className="navLogo">
                        <img src="/Images/logo.png" className="navPic" alt="Logo"/>
                        {this.renderTime()}
                    </div> 
                    <div className="navBar">
                        {this.renderMenu()}
                    </div>
                </div>
                <div className="Page">
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}

export default Website;


