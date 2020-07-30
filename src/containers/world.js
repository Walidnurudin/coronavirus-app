import React, { Component } from 'react';
import Navigasi from "components/navigasi";
import Hero from 'components/hero';
import axios from "axios";

class World extends Component {
    constructor(){
        super();
        this.state = {
            positif: '',
            recovered: '',
            death: ''
        }
    }

    getDataPositif(){
        axios.get("https://api.kawalcorona.com/indonesia")
            .then(function(res){
                console.log(res)
            })
            .catch(function(err){
                console.log("error", err)
            })
    }

    componentDidMount(){
        this.getDataPositif()
    }

    render() {
        return (
            <div>
                <Navigasi />
                <Hero 
                    location="WORLD"
                />
            </div>
        );
    }
}

export default World;
