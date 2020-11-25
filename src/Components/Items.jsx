import React, { Component } from 'react';
import '../Styles/Item.css';

class Items extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        if (this.props.pValue === this.props.dValue)
        {
            if (this.props.clicked[this.props.value] == true)
            {
                if (this.props.dValue == 6)
                {
                    return(
                        <React.Fragment >
                            <button className="item">
                                <p>{this.props.item.Name}</p>
                                <p>Stock: {this.props.item.stock}</p>
                                <p>Price: ${this.props.item.price}</p>
                                <button onClick={() => this.props.onClick(this.props.value)} className="removeItem"><p><i>REMOVE</i></p></button>
                            </button>
                        </React.Fragment>
                    );
                }
                else{
                    return(
                        <React.Fragment>
                            <button onClick={() => this.props.onClick(this.props.value)}  className="item">
                                <p>{this.props.item.Name}</p>
                                <p>Stock: {this.props.item.stock}</p>
                                <p>Price: ${this.props.item.price}</p>
                                <p className="savedItem"><i>SAVED</i></p>
                            </button>
                        </React.Fragment>
                    );
                }
            }
            else{
                return(
                    <React.Fragment>
                        <button className="item">
                            <p>{this.props.item.Name}</p>
                            <p>Stock: {this.props.item.stock}</p>
                            <p>Price: ${this.props.item.price}</p>
                            <button onClick={() => this.props.onClick(this.props.value)} className="saveItem"><p><b>ADD TO CART</b></p></button>
                        </button>
                    </React.Fragment>
                );
            }
        }
    }
}

export default Items;

