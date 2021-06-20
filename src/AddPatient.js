import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddPatient extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit(event) {
        event.preventdefault();
        fetch(process.env.REACT_APP_API + 'patient', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body.JSON.stringify({
                PatientId: null,
                PatientName: event.target.PatientName.value,
                AddressNum: event.target.AddressNum.value,
                Phone: event.target.Phone.value,
                DateofBirth: event.target.DateofBirth.value,
                Doctor: event.target.Doctor.value,
                DescPatient: event.target.DescPatient.value
            })
        })
            .then(res => res.json())
            .then(result)=> {
            alert(result);
        },
        (error) => {
            alert('Failed');

        })
    }
        render(){
            return (
                <div className="container">)
        }
    };
    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Patient
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form OnSubmit={this.handleSubmit}>
                                    <Form.Group ControlId="PatientName">
                                        <Form.Label>PatientName</Form.Label>
                                        <Form.Control type="text" name="PatientName" required
                                            placeholder="Patient Name"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Patient
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
            )
    }
}