import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Patient extends Component {

    constructor(props) {
        super(props);
        this.state = {pats: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'patient')
            .then(response => response.json())
            .then(data => {
                this.setState({pats:data});

            });
    }
    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const {pats} = this.state;
        return (
            <div>
                <Table className="mt-4" stripped bordered hover-size="sm">
                    <thead>
                        <tr>
                            <th>Patient Id</th>
                            <th>Patient Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Doctor</th>
                            <th>Description</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                    <tbody>
                        {pats.map(pat =>
                            <tr key={pat.PatientId}>
                                <td>{pat.PatientId}</td>
                                <td>{pat.PatientName}</td>
                                <td>{pat.AddressNum}</td>
                                <td>{pat.Phone}</td>
                                <td>{pat.DateofBirth}</td>
                                <td>{pat.Doctor}</td>
                                <td>{pat.DescPatient}</td>
                                <td>Edit / Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}