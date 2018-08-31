import React, { Component } from 'react';

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Row, Col, Jumbotron, Media} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Resume extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                { id:  Math.floor(Math.random() * 1000 + 1 ), name: 'Peter'},
                { id:  Math.floor(Math.random() * 1000 + 1 ), name: 'Klaus'},
                { id:  Math.floor(Math.random() * 1000 + 1 ), name: 'Ferdinand'},
                { id:  Math.floor(Math.random() * 1000 + 1 ), name: 'Dirk'}
            ]
        };
    }


    render(){
        const { items } = this.state;

        return(
            <Container>
                <Jumbotron>
                    <Row></Row>
                    <Col></Col>
                    <Media>
                        <img className="img-fluid" src="portrait.jpg" alt="Portrait"/>
                    </Media>
                    <h1 className="display-5">Lennard Austrup</h1>
                    <p className="lead">
                        Merianweg 31<br/>
                        40724 Hilden<br/>
                        Lennard.Austrup&#64;gmx.de
                    </p>

                </Jumbotron>
                <Button
                    color="dark" style={{marginBottom: '2em'}}
                    onClick={() => { const name = prompt('Eingabe');
                        if (name){
                            this.setState(state => ({
                                items: [...state.items, { id: (Math.floor( Math.random() * 1000 + 1 ) ), name }]
                            }));
                        }}
                    }
                >Abschnitt hinzufügen
                </Button>

                <ListGroup>
                    <TransitionGroup>
                        {items.map(({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {name}
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
                <TransitionGroup>
                {items.map(({id, name}) => (
                    <CSSTransition key={id} timeout={500} classNames="fade">
                        <Row className="resumeDateRow">
                            <Col xs="4">{id}</Col>
                            <Col xs="6">{name}</Col>
                            <Col xs="2">
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }));
                                }}
                            >&times;
                            </Button>
                        </Col>
                    </Row>
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </Container>
        )
    }
}

export default Resume;