import React, { Component } from 'react';
import Navigasi from "components/navigasi";
import Developer from "components/developer"

class About extends Component {
    render() {
        return (
            <div>
                <Navigasi />
                <Developer />
            </div>
        );
    }
}

export default About;
