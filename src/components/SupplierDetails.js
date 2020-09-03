import React from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

class SupplierDetails extends React.Component {

    constructor(props){

        super(props);

        const supplierDetails = [
            {supplier_id:'A',supplier_name:'Clean India',address:'RimZim Plaza, Mumbai'},
            {supplier_id:'B',supplier_name:'Stay Safe',address:'Home industries, Bangalore'}
        ];

        this.state = {
            supplierDetails,
            isOpen : false,
            supplier : {
                supplier_id : "",
                supplier_name : "",
                address : ""
            },
        };
        this.openModal = (id) => {
            
            let x = this.state.supplierDetails.find( x => x.supplier_id === id);

            this.setState({ 
                isOpen: true,
                supplier : x
            });

        } 

        this.closeModal = () => this.setState({ isOpen: false });

        this.addEntry = (event) => {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {supplier_id: data.get('supplier_id'),
                            supplier_name: data.get('supplier_name'),
                            address: data.get('address')
            }

            this.setState({
                supplierDetails : [...this.state.supplierDetails, newValue]
            })

        }

        this.updateEntry = (event) => {
            
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {supplier_id: data.get('supplier_id'),
            supplier_name: data.get('supplier_name'),
            address: data.get('address')
            }

            this.setState({
                supplierDetails : [...this.state.supplierDetails, newValue]
            })

        };

        this.deleteEntry = (id) => {
            this.setState({
               supplierDetails: this.state.supplierDetails.filter(item => item.supplier_id !== id)
            })
        };  
      }

    render(){
        return(
            <div>
                <br/>
                <h3>Supppliers Dashboard</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Supplier ID</th>
                            <th>Supplier Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       { this.state.supplierDetails.map((x) => (
                            <tr>
                                <td>{x.supplier_id}</td>
                                <td>{x.supplier_name}</td>
                                <td>{x.address}</td>
                                <td>
                                <button onClick={() => this.openModal(x.supplier_id)} class="btn btn-primary ml-5">Edit</button>
                                <button onClick={() => this.deleteEntry(x.supplier_id)} class="btn btn-danger ml-5">Delete</button>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </Table>

                <br/>
                
                <h4>Add Supplier Entry</h4>

                <form onSubmit={this.addEntry}>
                    <label><b>Supplier ID: </b></label>
                    <input name="supplier_id" type="text" placeholder="Enter supplier ID"/>
                    <label><b>Supplier Name: </b></label>
                    <input name="supplier_name" type="text" placeholder="Enter supplier name"/>
                    <label><b>Address: </b></label>
                    <input name="address" type="text" placeholder="Enter address"/>
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
                            <label><b>Supplier ID: </b></label>
                            <input name="supplier_id" type="text" placeholder="Enter supplier ID" defaultValue={this.state.supplier.supplier_id} readOnly/>
                            <br/>
                            <label><b>Customer Name: </b></label>
                            <input name="supplier_name" type="text" placeholder="Enter supplier name" defaultValue={this.state.supplier.supplier_name}/>
                            <br/>
                            <label><b>Address: </b></label>
                            <input name="address" type="text" placeholder="Enter address" defaultValue={this.state.supplier.address}/>
                            <br/>
                            <br/>
                            <button type="submit" onClick={() => this.deleteEntry(this.state.supplier.supplier_id)} class="btn btn-success ml-5">Update Entry</button>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default SupplierDetails;