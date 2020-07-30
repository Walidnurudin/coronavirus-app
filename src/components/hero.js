import React from 'react'
import { Container } from 'reactstrap'
import positif from "assets/positif.png"
import sembuh from "assets/sembuh.png"
import meninggal from "assets/meninggal.png"

export default function Hero(props) {
    return (
        <Container>
            {/* TITLE */}
            <div className="row">
                <div className="col text-center">
                    <h1 className="">
                        {props.location}
                    </h1>
                    <p>
                        corona virus information in Indonesia and the world.
                    </p>
                </div>
            </div>

            {/* BOX */}
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col box-info mb-3 mb-md-0">
                    <div className="row">
                        <div className="col data">
                            <p>CASES</p>
                            <h3>{props.positif}</h3>
                        </div>
                        <div className="col images">
                            <img src={positif} alt="emot positif" className="emot" />
                        </div>
                    </div>
                </div>

                <div className="col box-info mb-3 mb-md-0">
                    <div className="row">
                        <div className="col data">
                            <p>RECOVERED</p>
                            <h3>{props.recovered}</h3>
                        </div>
                        <div className="col images">
                            <img src={sembuh} alt="emot positif" className="emot" />
                        </div>
                    </div>
                </div>

                <div className="col box-info mb-3 mb-md-0">
                    <div className="row">
                        <div className="col data">
                            <p>DEATH</p>
                            <h3>{props.death}</h3>
                        </div>
                        <div className="col images">
                            <img src={meninggal} alt="emot positif" className="emot" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
