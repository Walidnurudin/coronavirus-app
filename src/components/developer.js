import React from 'react'
import PP from "assets/sembuh.png";
import { Container } from 'reactstrap'
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi"

function Developer() {
    return (
        <Container>
            <div className="d-md-flex">
                <div className="col my-5">
                    <div className="text-center">
                        <h3><u>Developer</u></h3>
                        <img src={PP} alt="" className="PP" />
                        <h5>Walid nurudin</h5>
                        <FiGithub />
                        <FiInstagram />
                        <FiMail />
                    </div>
                </div>

                <div className="col my-5">
                    <div className="text-center">
                        <h3><u>API</u></h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Developer
