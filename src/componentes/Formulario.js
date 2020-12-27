import React, { Component } from 'react';
import { Row, Col, Form, Input, Label, FormGroup, Button, FormFeedback } from 'reactstrap';

class Formulario extends Component{

    constructor(props){
        super(props);

        this.state = {
            nombre: '',
            correo: '',
            edad: '',
            mensajeNombre: '',
            mensajeCorreo: '',
            mensajeEdad:'',
            validNombre: false,
            validCorreo: false,
            validEdad: false,
        }

        this.onChange = this.onChange.bind(this);
        this.enviarAlaBD = this.enviarAlaBD.bind(this);
    }

    onChange(e){
        let name = e.target.name;
        let value = e.target.value;

        this.serState({
            [name]: value,
        });
    }

    enviarAlaBD(e){
        e.preventDefault();
        if(this.state.nombre === ''){
            this.setState({
                validNombre: true,
                mensajeNombre: 'El campo nombre es obligatorio',
            });
        }

        if(this.state.correo === ''){
            this.setState({
                validCorreo: true,
                mensajeCorreo: 'El campo correo es obligatorio',
            });
        }

        if(this.state.edad === ''){
            this.setState({
                validEdad: true,
                mensajeEdad: 'Indica tu edad',
            });
        }
    }

    render() {
        return(
            <div >
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                    <h2 className="lead text-center">Formulario de Contacto</h2>
                        <Form onSubmit={this.enviarAlaBD}>
                            <FormGroup>
                                <Label>Nombre</Label>
                                <Input type="text" name="nombre" value={this.state.nombre} onChange={this.onChange} invalid={this.state.validNombre} />
                                <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Correo</Label>
                                <Input type="email" name="correo" value={this.state.correo} onChange={this.onChange} invalid={this.state.validCorreo} />
                                <FormFeedback>{this.state.mensajeCorreo}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Edad</Label>
                                <Input type="text" name="edad" className="col-2" value={this.state.edad} onChange={this.onChange} invalid={this.state.validEdad} />
                                <FormFeedback>{this.state.mensajeEdad}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Button color="success">Enviar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
            
        )
    }
}

export default Formulario;