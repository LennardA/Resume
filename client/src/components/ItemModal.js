import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

 class ItemModal extends Component {

     state = {
         modal : false,
         name: '',
         description:''
     };

     toggle = () => {
         this.setState({
             modal: !this.state.modal
         });
     };

     onChange = (e) => {
         this.setState({ [e.target.name]: e.target.value });
     };

     onSubmit = e => {
         e.preventDefault();

        const newItem = {
            name: this.state.name,
            description: this.state.description
         };

        //Add Item via Action
         this.props.addItem(newItem);
         // Close Modal
         this.toggle();
     };

     render() {
         return (
             <div>
                 <Button
                    color="dark"
                    style={{marginBottom: '2em'}}
                    onClick={this.toggle}
                 >Ereignis hinzuf&uuml;gen</Button>

                 <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                 >
                     <ModalHeader
                        toggle={this.toggle}
                     >
                         Neues Ereignis hinzuf&uuml;gen
                     </ModalHeader>
                     <ModalBody>
                         <Form onSubmit={this.onSubmit}>
                             <FormGroup>
                                 <Label for="date">Datum</Label>
                                 <Input type="text" name="name" id="item" placeholder="Datum"
                                    onChange={this.onChange} />
                             </FormGroup>
                             <FormGroup>
                                 <Label for="description">Beschreibung</Label>
                                 <Input type="text" name="description" id="item" placeholder="Beschreibung"
                                        onChange={this.onChange}
                                 />
                             </FormGroup>
                             <Button onClick={this.onSubmit} color="dark" block>Ereignis hinzuf&uuml;gen</Button>
                         </Form>
                     </ModalBody>
                 </Modal>
             </div>
         );
     }
 }

 const mapStateToProps = state => ({
     item: state.item
 });

 export default connect(mapStateToProps, { addItem })(ItemModal);