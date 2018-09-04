import React, { Component } from 'react';

import { Container, Button } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from 'prop-types'

class Resume extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render(){
        const { items } = this.props.item;

        return(
            <Container>
                <TransitionGroup>
                {items.map(({_id, name, date, description}) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                        <Row className="resumeDateRow">
                            <Col xs="4" className="resumeDateCol">{name}</Col>
                            <Col xs="6">{description}</Col>
                            <Col xs="2">
                                <Button outline
                                    style={{borderWidth: 0}}
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={ this.onDeleteClick.bind(this, _id) }

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

Resume.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem }) (Resume);