import React, { Component } from 'react';

import { Jumbotron, Row, Col } from 'reactstrap';


class HeadJumbotron extends Component {

    render() {
        return (
            <Jumbotron>
                <Row>
                    <Col xs="8">
                        <h1 className="display-5">Lennard Austrup</h1>
                        <p className="lead">
                            Merianweg 31<br/>
                            40724 Hilden<br/>
                            Lennard.Austrup&#64;gmx.de
                        </p>
                    </Col>
                    <Col xs="4">
                        <img className="img-fluid portraitPicture" src="portrait.jpg" alt="Portrait"/>
                    </Col>
                </Row>
            </Jumbotron>
        );
    }
}


export default HeadJumbotron;