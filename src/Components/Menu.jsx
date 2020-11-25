import React, { Component } from 'react';

class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            buttonValues : [...this.props.buttonValues],
            buttonCounter : [0,1,2,3,4,5,6,7]
        };
    }

    render()
    {
        return (
            <React.Fragment>
                {this.state.buttonCounter.map(value => {
                    if (this.props.itemsInCart > 0 && value === 6)
                    {
                        return <button className="menuBtn" onClick={() => this.props.click(value)}>{this.state.buttonValues[this.state.buttonCounter.indexOf(value)]} ({this.props.itemsInCart})</button>
                    }
                    else{
                        return <button className="menuBtn" onClick={() => this.props.click(value)}>{this.state.buttonValues[this.state.buttonCounter.indexOf(value)]}</button>
                    }
                }
               )
               }
            </React.Fragment>
        );
    }
}

export default Menu;

