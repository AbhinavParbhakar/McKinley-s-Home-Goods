import React, { Component } from 'react';

class AboutUs extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        };
    }

    render() {
        if (this.props.value === 7)
        {
            return(
                <div>
                    <p>This is the about us page.Hopefully this works.</p>
                </div>
            );
        }
    }
}

export default AboutUs;

