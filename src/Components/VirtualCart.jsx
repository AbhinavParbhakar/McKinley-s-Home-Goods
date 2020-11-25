import React, { Component } from 'react';
import Items from './Items';
import '../Styles/VirtualCart.css'

class VirtualCart extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
        };
    }
 
    renderCheckout()
    {
        if (this.props.total == 0)
        {
            return (<div className="checkout">
            <div className="checkedItems">
            {this.props.items.map( c => {
                if (this.props.itemsClicked[this.props.items.indexOf(c)] == true)
                {
                return <p>{c.Name}.......     ${c.price}</p>
                }
            })}
            </div>
            <h1>
                <pre>Total:         ${this.props.total}</pre>
            </h1>
            <button onClick={() =>this.props.checkOut()} className="exit"><i>Check-out</i></button>
        </div>);
        }
        else
        {
            return (<div className="checkout">
            <div className="checkedItems">
            {this.props.items.map( c => {
                if (this.props.itemsClicked[this.props.items.indexOf(c)] == true)
                {
                    return <React.Fragment>
                    <p>{c.Name}.......     ${c.price}</p>
                    <hr/>
                </React.Fragment>;
                }
            })}
            <p>Shipping and Handling....... $0</p>
            <p>Taxes and Fees....... $0</p>
            </div>
            <h1>
                <pre>Total:         ${this.props.total}</pre>
            </h1>
            <button onClick={() =>this.props.checkOut()} className="exit"><i>Check-out</i></button>
        </div>);
        }
    }

    
    render()
    {
        if (this.props.pValue === this.props.dValue)
        {
            return(
                <div>
                    <div className="savedItems">
                        {
                        this.props.items.map(c => {
                            if (this.props.itemsClicked[this.props.items.indexOf(c)] == true)
                            {
                                return (<Items item={c} clicked={this.props.itemsClicked} value={parseInt(c.id)} onClick={this.props.onClick} pValue={this.props.pValue} dValue={this.props.dValue} total={this.props.total}/>);
                            }
                        })}
                    </div>
                    {this.renderCheckout()}
                </div>
            );
        }
    }
}

export default VirtualCart;

