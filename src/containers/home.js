import React from "react";
import Navigasi from "components/navigasi";
import Hero from "components/hero";
import axios from "axios";

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            positif: '',
            recovered: '',
            death: ''
        }
    }

    getDataNational(){
        axios.get("https://api.kawalcorona.com/indonesia", {
            headers: {
                'Content-Type': 'application/json, text/html'
            }
        })
            .then(function(res){
                console.log(res)
            })
            .catch(function(err){
                alert("error", err.message)
            })
    }

    componentDidMount(){
        this.getDataNational()
    }

    render() {
        return (
            <div>
                <Navigasi />
                <Hero
                    location="INDONESIA"
                />
            </div>
        )
    }
}

export default Home;