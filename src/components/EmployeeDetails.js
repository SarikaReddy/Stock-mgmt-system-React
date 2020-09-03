import React from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

class EmployeeDetails extends React.Component {
    constructor(props){

        super(props);

        const employeeDetails = [
            {employee_id:'A',employee_name:'Sarath',designation:'Admin',UID:'t73283249'},
            {employee_id:'B',employee_name:'Kesav',designation:'Sales Clerk',UID:'t73226872'},
            {employee_id:'C',employee_name:'Aditya',designation:'Manager',UID:'t79843934'}
        ];

        this.state = {
            employeeDetails,
            isOpen : false,
            employee : {
                employee_id : "",
                employee_name : "",
                designation : "",
                UID: "",
            },
        };
        this.openModal = (id) => {
            
            let x = this.state.employeeDetails.find( x => x.employee_id === id);

            this.setState({ 
                isOpen: true,
                employee : x
            });

        } 

        this.closeModal = () => this.setState({ isOpen: false });

        this.addEntry = (event) => {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {employee_id: data.get('employee_id'),
            employee_name: data.get('employee_name'),
            designation: data.get('designation'),
            UID: data.get('UID')
            }

            this.setState({
                employeeDetails : [...this.state.employeeDetails, newValue]
            })

        }

        this.updateEntry = (event) => {

            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {employee_id: data.get('employee_id'),
            employee_name: data.get('employee_name'),
            designation: data.get('designation'),
            UID: data.get('UID')
            }

            this.setState({
                employeeDetails : [...this.state.employeeDetails, newValue]
            })

        };

        this.deleteEntry = (id) => {
            this.setState({
               employeeDetails: this.state.employeeDetails.filter(item => item.employee_id !== id)
            })
        };  
    }

    render(){
        return(
            <div>
                <br/>
                <h3>Employees Dashboard</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Designation</th>
                            <th>UID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       { this.state.employeeDetails.map((x) => (
                            <tr>
                                <td>{x.employee_id}</td>
                                <td>{x.employee_name}</td>
                                <td>{x.designation}</td>
                                <td>{x.UID}</td>
                                <td>
                                <button onClick={() => this.openModal(x.employee_id)} class="btn btn-primary ml-5">Edit</button>
                                <button onClick={() => this.deleteEntry(x.employee_id)} class="btn btn-danger ml-5">Delete</button>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </Table>

                <br/>
                
                <h4>Add Employee Entry</h4>

                <form onSubmit={this.addEntry}>
                    <label><b>Employee ID: </b></label>
                    <input name="employee_id" type="text" placeholder="Enter employee ID"/>
                    <label><b>Employee Name: </b></label>
                    <input name="employee_name" type="text" placeholder="Enter employee name"/>
                    <label><b>Designation: </b></label>
                    <input name="designation" type="text" placeholder="Enter desgination"/>
                    <label><b>UID: </b></label>
                    <input name="UID" type="text" placeholder="Enter UID"/>
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-success ml-5">Add Entry</button>
                </form>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.updateEntry}>
                            <label><b>Employee ID: </b></label>
                            <input name="employee_id" type="text" placeholder="Enter employee ID" defaultValue={this.state.employee.employee_id} readOnly/>
                            <br/>
                            <label><b>Employee Name: </b></label>
                            <input name="employee_name" type="text" placeholder="Enter employee name" defaultValue={this.state.employee.employee_name}/>
                            <br/>
                            <label><b>Designation: </b></label>
                            <input name="designation" type="text" placeholder="Enter designation" defaultValue={this.state.employee.designation}/>
                            <br/>
                            <label><b>UID: </b></label>
                            <input name="UID" type="text" placeholder="Enter UID" defaultValue={this.state.employee.UID}/>
                            <br/>
                            <br/>
                            <button type="submit" onClick={() => this.deleteEntry(this.state.employee.employee_id)} class="btn btn-success ml-5">Update Entry</button>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default EmployeeDetails;